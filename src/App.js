import './App.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//components
import Navbar from "./components/navbar/Navbar";
//Pages
import Students from './pages/Students';
import Student from './pages/Student';
import StudentForm from './pages/StudentForm';
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Students} />
          <Route exact path="/student/:id" component={Student} />
          <Route exact path="/studentForm/:id?" component={StudentForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
