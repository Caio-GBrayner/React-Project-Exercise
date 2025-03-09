import './App.css';

function Header(props) {
  return(
    <haeder>
      <h1>{props.name}</h1>
    </haeder>
  )
}

function Main(props) {
  return(
    <main>
      <p>Best recip's for quick and {props.adjective} tasty food.</p>
    </main>
  )
}

function Footer(props) {
  return(
    <footer>
      <p>Copyright &copy; {props.year}</p>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
      <Header name="My Recipes"></Header>
       <Main adjective="delicious"></Main>
       <Footer year={new Date().getFullYear()}></Footer>
    </div>
  );
}

export default App;
