import './App.css';

function Header(props) {
  return(
    <haeder>
      <h1>Paro's Recipes</h1>
    </haeder>
  )
}

function Main() {
  return(
    <main>
      <p>Best recip's for quick and tasty food.</p>
    </main>
  )
}

function Footer() {
  return(
    <footer>
      <p>Copyright &copy; 2025</p>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
      <Header></Header>
       <Main></Main>
       <Footer></Footer>
    </div>
  );
}

export default App;
