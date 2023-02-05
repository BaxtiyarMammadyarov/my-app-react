import logo from './logo.svg';
import './App.css';
import HomeHeaderComponent from "./components/HomeHeaderComponent";
import HomeMainComponent from "./components/HomeMainComponent";
import ListProductComponenet from "./components/ListProductComponenet";
import CardListComponents from "./components/CardListComponents";
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <div className='container'>
          <GlobalProvider>
              <HomeHeaderComponent/>
              <HomeMainComponent/>
          </GlobalProvider>

          {/*<ListProductComponenet  />*/}
          {/*<CardListComponents/>*/}
      </div>
    </div>
  );
}

export default App;
