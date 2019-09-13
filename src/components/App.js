import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../css/App.css';

import ListFilms from './ListFilms';
import FilmDetails from './FilmDetails';

class App extends Component {

  constructor() {
    super();

    this.state = {
      films: [],
      orderBy: 'filmName',
      orderDir: 'asc',
      lastIndex: 0
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(response => {
        const swFilms = response.results.map(item => {
          item.filmId = this.state.lastIndex;
          this.setState({lastIndex: this.state.lastIndex+1})
          return item;
        });
        this.setState({
          films: swFilms
        });
      }).catch(error => {
        console.log('Request Failed: ', error);
      });
  }

  render() {
    return (
      <Router>
        <main className="page bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12 bg-white">
                <Route path="/" exact render={routeProps => (
                  <ListFilms {...routeProps} films={this.state.films} />
                )} />
                <Route path="/:id" render={routeProps => (
                  <FilmDetails {...routeProps} films={this.state.films} />
                )} />
              </div>
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
