import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <section className="App cover bg-cover-index">
          <span className="sr-only">If you need to add a cover to your page</span>
        </section>

        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-md-4 p-0">
              <img className="img-fluid d-block" src="http://placehold.it/650x300.png" alt=""/>
            </div>
            <div className="col-md-4 p-0">
              <img className="img-fluid d-block" src="http://placehold.it/650x300.png/333/aaa/" alt=""/>
            </div>
            <div className="col-md-4 p-0">
              <img className="img-fluid d-block" src="http://placehold.it/650x300.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    ); 
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="second-div">
          <p className="h3">HOLA MUNDO!</p>
        </div>
      </div>
    );*/
  }
}

export default App;
