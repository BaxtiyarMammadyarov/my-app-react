import logo from './logo.svg';
import './App.css';
import HomeHeaderComponent from "./components/HomeHeaderComponent";
import ListProductComponenet from "./components/ListProductComponenet";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <HomeHeaderComponent/>
        <ListProductComponenet/>
      </div>
    </div>
  );
}

export default App;
