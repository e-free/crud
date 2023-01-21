function Note(props){
  console.log(props);
  return<div className="col-md-4">
    <div className="position-relative border border-secondary h-100 p-4">
      <button className = "position-absolute close rounded-circle p-1" onClick={() => props.noteDelete(props.id)}>
        <img src="close.svg" alt="" />
      </button>
      <p>
        {props.content}
      </p>
      </div>
  </div>

}
export default Note