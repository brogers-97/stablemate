import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Homepage from './components/Homepage';
import Calendar from './components/Calendar';
import HorseInfo from './components/HorseInfo';
import HorseSearch from './components/HorseSearch';
import Header from './components/navbar/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route 
            path='/'
            element={<Homepage />}
          />
          <Route 
            path='/calendar'
            element={<Calendar />}
          />
          <Route 
            path='/horseinfo'
            element={<HorseInfo />}
          />
          <Route 
            path='/search'
            element={<HorseSearch />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
