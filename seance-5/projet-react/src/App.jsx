import './App.css'
import Card from "./components/Card"
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Card fullname="Kais said" jobTitle="President of tunisia"/>
      <Card fullname="Joe biden" jobTitle="President of us"/>
          
    </div>
  )
}

export default App
