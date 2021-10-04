
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost'; 
import {action, comedy, documentaries, horror, originals, romance } from './Urls'

function App() {
  
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Originals" genre={originals}/>
      <RowPost title="Action" genre={action} small/>
      <RowPost title="Comedy" genre={comedy} small/>
      <RowPost title="Horror" genre={horror} small/>
      <RowPost title="Documentaries" genre={documentaries} small/>
      <RowPost title="Romance" genre={romance} small/>

      {/* <h1>Hello world!</h1>
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
              setState(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}> CLick this  </button> */}
     {/* {state.length >0 &&
        <table>
        <tr>
          <th>Company</th>
          <th>title</th>
          <th>body</th>
        </tr>
        <Table data={state}/>
      </table>
      } */}
      
    </div>
  );
}

export default App;
