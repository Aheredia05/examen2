import React, { Component } from 'react'
import axios from 'axios'

export default class Comentariolist extends Component {

    state = {
        comentary: [],
        filtrado:[]
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:8001/api/comentaries.json')
        console.log("res")
        console.log(res)
        this.setState({
            comentary: res.data
        });
        console.log("state")
        console.log(this.state.comentary)

        this.setState({filtardo:this.state.comentary.filter(j=>j.noteId==="9")})
        console.log("this.state.filtardo")
        console.log(this.state.filtardo)
    }

  

    render() {

         
      
        return (
            <div>
                hola
            </div>
        )
    }
}
