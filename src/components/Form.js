import React, { useState } from 'react';

function Form(props){
  const [text, setText] = useState("");

  function noteSubmit(event) {
    event.preventDefault();
    props.noteSubmit(text);
    setText("");
  } 
  
  function noteChange(event) {
    setText(event.target.value);   
  } 

  return <div className = "container">
    <div className="row p-0" >
      <div className="col-md-6">
        <form onSubmit={noteSubmit}>
        <label htmlFor="note">New note</label>
        <div className="position-relative">
           <textarea className = "w-100 pt-2 pe-5 pb-2 ps-3" cols="40" rows="5" id="note" name="note" value={text} onChange={noteChange}/>
           <button className="rounded-circle p-1 position-absolute submit-note">
             <img src="send.svg" alt="send"/>
           </button>
        </div>
       </form>
      </div>
    </div>
    
  </div>

}
export default Form