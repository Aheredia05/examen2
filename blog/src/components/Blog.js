import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//import NotesList from './NotesList';

export default class Blog extends Component {

    state = {
        note: []
    }

    async componentDidMount() {
        this.getNote();
    }

    getNote = async () => {
        const res = await axios.get('http://localhost:8001/api/notes.json');
        this.setState({
            note: res.data
        });
    }

    
    verEntrada = async (titleid) => {
        const response = window.confirm('quieres ver el ');
    

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
                            this.state.note.map(title => (
                                <li className="list-group-item list-group-item-action"
                                 key={title._id} onDoubleClick={() => 
                                 this.verEntrada(title.id)           }>
                                    {title.title}
                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
