import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Comlist from './components/Comentariolist'
import Note from './components/Note'
import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import Blog from './components/Blog'
import Comentarios from './components/Comentario'
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={Blog} />
        <Route path="/note" exact component={NotesList} />
        <Route path="/com/:id" component={Comentarios} />
        <Route path="/not" component={Note} />
        <Route path="/comlist" component={Comlist} />
        <Route path="/not" component={Note} />

        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
      </div>
    </Router>
  );
}

export default App;
