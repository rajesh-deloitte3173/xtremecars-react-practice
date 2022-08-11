import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routingComponents/home';
import ViewAllCars from './routingComponents/viewAllCars';
import CarSpecifications from './routingComponents/carSpecifications';
import BookingPage from './routingComponents/bookingPage';
import BookingSuccessful from './routingComponents/bookingSuccessful';
import NotFoundPage from './routingComponents/notFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/cars'>
          <ViewAllCars />
        </Route>
        <Route exact path='/car/:id'>
          <CarSpecifications />
        </Route>
        <Route exact path='/car/:id/book'>
          <BookingPage />
        </Route>
        <Route exact path='/car/:id/success'>
          <BookingSuccessful />
        </Route>
        <Route path='/*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
