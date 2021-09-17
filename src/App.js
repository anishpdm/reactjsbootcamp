import logo from './logo.svg';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Haeding from './components/Haeding';
import Demo from './components/Demo';
import Employees from './components/Employees';
import EmployeeDataRead from './components/EmployeeDataRead';
import Joke from './components/Joke';
import Posts from './components/Posts';
import News from './components/News';
import CourseView from './components/CourseView';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">


<BrowserRouter>
<Header/>

<Route path="/" exact component={AddCourse}  />
<Route path="/viewcourse" exact component={CourseView}  />

</BrowserRouter>

  
    </div>
  );
}

export default App;
