import logo from './logo.svg';
import './App.css';
import InputTest from './components/InputTest.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit the App.js
        </p>
       
          <main>
            <h2>Tasks</h2>
          <ol>
            <li>Clean Your Room</li>
            <li>Go Shopping</li>
          </ol>
          </main>
          <InputTest/>
      </header>
    </div>
  );
}

export default App;
