import "./Card.css"

function Card(props){
  return (
    <div className="card">
      <img src="" alt="" />
      <h1>{props.fullname}</h1>
      <h2>{props.jobTitle}</h2>
    </div>
  )
}

export default Card