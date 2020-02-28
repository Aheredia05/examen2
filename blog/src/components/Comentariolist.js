import React, { Component } from 'react'
import axios from 'axios'

export default class Comentariolist extends Component {

    state = {
        comentary: []
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:8001/api/comentaries.json')
        this.setState({
            comentary: res.data
        });
        console.log(this.state.comentary)
    }

  

    render() {
        return (
            <div className="row">
                {
                    this.state.comentary.map(comentary => ( 
                        <div className="col-md-8" key={comentary.id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{comentary.name}</h5>
                                    
                                </div>
                                <div className="card-body">
                                    <p>
                                        {comentary.content}
                                    </p>
                                   <p/>
                                    
                                </div>
                                
                               
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
