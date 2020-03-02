import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateNote extends Component {

    state = {
        title: '',
        content: '',
        author:'',
        users: [],
        editing: false,
        _id: ''
    }

    onSubmit = async (e) => {
        console.log("sutmit")
        e.preventDefault();
       
            const newNote = {
                title: this.state.title,
                content: this.state.content,
                author: this.state.author,        
            };
            console.log(newNote)
            axios.post('http://localhost:8001/api/notes', newNote);
        
        window.location.href = '/';

    }

    onInputChange = (e) => {
        console.log("imput")
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>
                    <form onSubmit={this.onSubmit}>
                        
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                         {/* Note Author */}
                         <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Author"
                                onChange={this.onInputChange}
                                name="author"
                                value={this.state.author}
                                required />
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Content"
                                name="content"
                                onChange={this.onInputChange}
                                value={this.state.content}
                                required>
                            </textarea>
                        </div>
                       
                        
                        <button className="btn btn-primary">
                            Save <i className="material-icons">
                                assignment
</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
