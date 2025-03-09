import './App.css';
import img_recipe from "./images/pizza_img.jpg"

function Header(props) {
  return(
    <header className='header-styles'>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props) {
  return(
    <main>
      <p>Best recip's for quick and {props.adjective} tasty food.</p>
      <img src={img_recipe} height={200} alt='pizza'/>
      <ul>
        {props.recipes.map((recipe) => (<li key={recipe.id}> {recipe.title} </li>))}
      </ul>
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

const recipes =[
  "Breakfast Recipe's",
  "Braunch Recipes's",
  "Launch Recipe's",
  "Dinner Recipe's",
]

const recipeObjects = recipes.map((recipe, recipe_id) => (
  {
    id: recipe_id,
    title: recipe
  }
));


function App() {
  return (
    <div className="App">
      <Header name="My Recipes"></Header>
       <Main adjective="delicious" recipes ={recipeObjects}></Main>
       <Footer year={new Date().getFullYear()}></Footer>
    </div>
  );
}

export default App;
