import './App.css';
import Table from './components/Table';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <div className='content'>
        <Table />
        <Button />
      </div>
    </div>
  );
}

export default App;
