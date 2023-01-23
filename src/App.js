import logo from './logo.svg';
import './App.css';
import Header from "./component/Header/Header";
import Topcontainer from './component/Topcontainer/Topcontainer';
import Skillcontainer from './component/Skillcontainer/Skillcontainer';
import { Link,Element } from 'react-scroll';

import Home from './component/home/Home.js';
import ProjectContainer from './component/ProjectContainer/ProjectContainer';
import Contact from './component/Contact/Contact';
function App() {
return (
    <div>
    <Header/>
    <Element>
   {/* <Topcontainer/> */}
   <Home/>
    
<Skillcontainer/>
<ProjectContainer/>
<Contact/>
</Element>
    </div>
)

}

export default App;
