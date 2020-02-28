import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NotesList from './NotesList';

export default class CreateUser extends Component {

    state = {
        username: '',
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:8001/api/notes.json');
        this.setState({
            users: res.data
        });
    }

    
    deleteUser = async (userId) => {
        const response = window.confirm('quieres ver el ');
    //    {"/edit/" + note._id}

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                     </div>
               
                     <div className="card-header d-flex justify-content-between">
                                    
                                    <Link to={"/create/" } className="btn btn-secondary">
                                        <i className="material-icons">
                                            border_color</i> nueva entrada
                                    </Link>
                                </div>


                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action"
                                 key={user._id} onDoubleClick={() => 
                                 this.deleteUser(user.id)           }>
                                    {user.title}
                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
