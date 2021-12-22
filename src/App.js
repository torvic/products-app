import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AboutPage from './pages/AboutPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/products/:productId">
        <ProductDetailsPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
