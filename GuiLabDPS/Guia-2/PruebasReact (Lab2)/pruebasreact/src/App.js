import logo from './logo.svg';
import './App.css';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <div className="App-content">
        <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '60px' }}>
          Aqui haremos nuestro TO-DO list
        </p>
        <Form />
      </div>
    </div>
  );
}

export default App;
