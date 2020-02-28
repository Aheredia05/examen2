import React, { Component } from 'react'
import axios from 'axios'

export default class CreateNote extends Component {

    state = {
        name: '',
        email: '',
        content: '',
        web:'',
        users: [],
        editing: false,
        note_id: ''
    }

    async componentDidMount() {
        
        console.log(this.props.match.params.id)
      
    }

    
    onSubmit = async (e) => {
        e.preventDefault();
       
            const newNote = {
                name: this.state.name,
                email: this.state.email,
                content: this.state.content,
                note_id: this.props.match.params.id       
            };
            axios.post('http://localhost:8001/api/comentary', newNote);
        
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Ccomentarios</h4>
                    <form onSubmit={this.onSubmit}>
                        
                        {/* Note name */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="name"
                                onChange={this.onInputChange}
                                name="name"
                                value={this.state.title}
                                required />
                        </div>

                         {/* Note email */}
                         <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="email"
                                onChange={this.onInputChange}
                                name="elami"
                                value={this.state.author}
                                required />
                        </div>

                        
                         {/* Note web */}
                         <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="web"
                                onChange={this.onInputChange}
                                name="web"
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
