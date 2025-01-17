import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
      </div>
    </Router>
  );
};

export default App;
