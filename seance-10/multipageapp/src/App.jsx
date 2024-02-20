function App() {
  console.log(window.location);
  if (window.location.pathname == "/") return <h1>page home</h1>;
  if (window.location.pathname == "/contact") return <h1>page contact</h1>;
}

export default App;
