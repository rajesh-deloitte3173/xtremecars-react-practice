import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import ViewAllCars from './components/viewAllCars';
import CarSpecifications from './components/carSpecifications';
import BookingPage from './components/bookingPage';
import BookingSuccessful from './components/bookingSuccessful';
import NotFoundPage from './components/notFound';

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
        <Route exact path='/car/id'>
          <CarSpecifications />
        </Route>
        <Route exact path='/car/id/book'>
          <BookingPage />
        </Route>
        <Route exact path='/car/id/success'>
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
