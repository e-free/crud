
function Header (props){
 console.log("Header.props:", props);
  //onClick={props.noteUpdate()}
  return<div className="container pt-5" onClick={props.noteUpdate}>
    <div className = "header d-flex">
      <h1>Notes</h1>
      <button className="rounded-circle p-1 m-1" >
        <img src="refresh.svg"  alt="refresh"/>
      </button>
    </div>
  </div>
}
export default Header