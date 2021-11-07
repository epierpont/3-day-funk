import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      <Container>
        <main>
          <p>
            Hard Classic Rock and Blues
          </p>
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AD82YyvLFI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </main>
      </Container>
    </div>
  );
}

export default App;
