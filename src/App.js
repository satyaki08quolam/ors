
import {SideBar, DropDown} from './components/sidebar';


import './App.css';
import { Nub, Nub_3 } from './components/basics/basics';




function App() {
  return (
    <div className="App">
      {/* <SideBar>
        <DropDown con="home" />
        <DropDown con="link one" />
        <DropDown con="link two">
          sublink 1
          sublink 2
          sublink 3
        </DropDown>
        <DropDown con="link three">
          sublink 1
          sublink 2
          sublink 3
        </DropDown>
        <DropDown con="link four">
          sublink 1
          sublink 2
          sublink 3
        </DropDown>
        <DropDown con="link five">
          sublink 1
          sublink 2
          sublink 3
        </DropDown>
        <DropDown con="contact review" />
        <DropDown con="link six">
          sublink 1
          sublink 2
          sublink 3
        </DropDown>
      </ SideBar> */}


      <div className="basics">
        <Nub />
      </div>   

    </div>
  );
}

export default App;
