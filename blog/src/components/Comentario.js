import React, { Component } from 'react'
import axios from 'axios'

export default class Comentarios extends Component {

    state = {
        name: '',
        email: '',
        content: '',
        web:'',
        note_id: '',

        title:'',
        content1:'',
        author:'',
        comentary: []
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
          

           const res2 = await axios.get('http://localhost:8001/api/comentaries.json')
           this.setState({
               comentary: res2.data
           });
           console.log(this.state.comentary)
      
    }

    

    
    onSubmit = async (e) => {

        e.preventDefault();
       
            const newNote = {
                name: this.state.name,
                email: this.state.email,
                content: this.state.content,
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
                ------





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
                                value={this.state.name}
                                required />
                        </div>

                         {/* Note email */}
                         <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="email"
                                onChange={this.onInputChange}
                                name="email"
                                value={this.state.email}
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
                                value={this.state.web}
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
