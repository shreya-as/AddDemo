
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Demo from './components/Demo'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from  './components/UserGreeting'
import NameList from './components/NameList'
import LifeCycleA from './components/LifeCycleA'
import ParentComp from './components/ParentComp'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import AddDemo from './components/AddDemo';

function App() {
  return (
    <div className="App">
      {/* this is component   called greet  */}
{/* <Greet name="shreya"  heroName="Batman"></Greet>
<Greet name="saurav" heroName="Spider Man"/>
<button>Action </button>
<Welcome name="sh" heroName="the "/>
<Welcome name="nporiya" heroName="this"/>
<Hello name="sofia"/>
<Hello name="Ram"/>  
<Hello/>  
<Message/>    
<Demo/> */}
{/* <ParentComponent/> */}
{/* <EventBind/> */}
{/* <FunctionClick/>
<ClassClick/>
  <UserGreeting/>
  <NameList/>
  <LifeCycleA/> */}

{/* <ParentComp/>    
<PortalDemo/> */}
{/* <ErrorBoundary>
<Hero heroName="BatMan" /></ErrorBoundary>

<ErrorBoundary>
<Hero heroName="SpiderMan"/></ErrorBoundary>

<ErrorBoundary>
<Hero heroName="Jower"/></ErrorBoundary> */}
{/* <ClickCounter name='sreay'></ClickCounter>
<HoverCounter></HoverCounter>
<ClickCounter2></ClickCounter2>
<HoverCounter2></HoverCounter2>
<User name='Shreya'></User> */}
<AddDemo/>   </div>
  );
}

export default App;
 