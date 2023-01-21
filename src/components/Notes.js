import React from 'react';
import Form from "./Form";
import Header from "./Header";
import Note from "./Note";

class Notes extends React.Component{
/*  state = {
    notes: []
  };*/
  constructor(props){
    super(props);
    this.state = { notes: [] }

  }

  noteUpdate = () => {
    fetch('http://localhost:7777/notes', {
        method:"GET"
        })
    .then(response => response.json())
    .then(data => this.setState({ notes:data }));
    console.log('ok1');
  }
  
  noteCreate = (text) => {
     const note = {
        id: 0,
        content: text
    };
    fetch('http://localhost:7777/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    .then(() => {
       return this.noteUpdate()});
  }
  
  noteDelete = (id) => {
    fetch(`http://localhost:7777/notes/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
       return this.noteUpdate()});
  }
  componentDidMount(){
    this.noteUpdate();
}
  render(){
      return(<div>
       <Header noteUpdate={this.noteUpdate}/> 
       <div className = "container my-5">
        <div className="row">
          {this.state.notes.map((note) =>
            <Note {...note}
              key={note.id}
              noteDelete={this.noteDelete} />
               )}
        </div>
        

       </div>
       <Form noteSubmit={this.noteCreate}/>

    </div>
      )
  }
}
export default Notes



