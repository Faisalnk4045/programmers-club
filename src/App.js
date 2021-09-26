import './App.css';
import Header from './components/Header/Header';
import Programmers from './components/Programmers/Programmers';

function App() {

  return (
    <div className='container my-3'>
      {/* Header -> component for webpage header section */}
      <Header />

      {/* Programmmer -> component for holding programmer and hiring data */}
      <Programmers />
    </div>
  );
}

export default App;