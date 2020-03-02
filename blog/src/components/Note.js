import React, { Component } from 'react'
import axios from 'axios'

export default class Comentarios extends Component {

    state = {
       

        title:'',
        content1:'',
        author:'',
        comentary: [],
        filtardo:[]
    }

    async componentDidMount() {
        console.log("k haces en notas??")   
        console.log(this.props.match.params.id)
           const res = await axios.get('http://localhost:8001/api/notes/' + this.props.match.params.id +'.json');
         console.log(res.data)
           this.setState({
                   title: res.data.title,
                   content1:res.data.content,
                   author:res.data.author
           });
          

    }

    

    
    onSubmit = async (e) => {

        e.preventDefault();
       
            const newNote = {
                name: this.state.name,
                email: this.state.email,
                content: this.state.content,
                web: this.state.web,
                noteId: this.props.match.params.id       
            };
            console.log(newNote)
            axios.post('http://localhost:8001/api/comentaries', newNote);
        
        

    }

    onInputChange = (e) => {
        console.log(e.target.name, e.target.value)
     
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
  
           


            
            <div className="col-md-6 offset-md-3">
                 <h1>{this.state.title}</h1><p/>
            <b/>
            ------------------------------------
            <h2>{this.state.content1}</h2> <p/>
            ------------------------------------
            <h5>Autor:{this.state.author}</h5>

            <h1>COMENTARIOS</h1>
            ------------------------
         </div>
        )
    }
}
