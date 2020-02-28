<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\NoteRepository")
 */
class Note
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $author;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comentary", mappedBy="Note")
     */
    private $comentaries;

    public function __construct()
    {
        $this->comentaries = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    /**
     * @return Collection|Comentary[]
     */
    public function getComentaries(): Collection
    {
        return $this->comentaries;
    }

    public function addComentary(Comentary $comentary): self
    {
        if (!$this->comentaries->contains($comentary)) {
            $this->comentaries[] = $comentary;
            $comentary->setNote($this);
        }

        return $this;
    }

    public function removeComentary(Comentary $comentary): self
    {
        if ($this->comentaries->contains($comentary)) {
            $this->comentaries->removeElement($comentary);
            // set the owning side to null (unless already changed)
            if ($comentary->getNote() === $this) {
                $comentary->setNote(null);
            }
        }

        return $this;
    }
}
