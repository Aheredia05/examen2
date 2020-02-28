import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class NotesList extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:8001/api/notes.json')
        this.setState({
            notes: res.data
        });
    }

    deleteNote = async (noteId) => {
        await axios.delete('http://localhost:8001/api/notes/' + noteId);
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title}</h5>
                                    <Link to={"/com/" + note.id} className="btn btn-secondary">
                                        <i className="material-icons"> 
                                            border_color</i>com
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {note.content}
                                    </p>
                                    <p>
                                        Author: {note.author}
                                    </p>
                                    
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" 
                                    onClick={() => this.deleteNote(note.id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
