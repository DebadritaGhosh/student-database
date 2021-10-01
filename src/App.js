import './App.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//components
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
