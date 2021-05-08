import './App.css';
import Tabs from "./components/tabs";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/" component={Tabs} />
    </div>
    </Router>
  );
}

export default App;
