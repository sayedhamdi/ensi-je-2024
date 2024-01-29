import "./Navbar.css"

function Navbar(props){
  let links = [
    {link:"/home",text:"home"},
    {link:"/home",text:"about"},
    {link:"/home",text:"contact"},
    {link:"/home",text:"sign in"},
  ]
  return (
    <ul className="navbar">
      <li><h1>Le President</h1></li>

      {links.map(
        (url)=>(
        <li>
        <a key={url.link}href={url.link}>{url.text}</a></li>)}
    </ul>
  )
}

export default Navbar