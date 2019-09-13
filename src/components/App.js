import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/App.css';

import ListFilms from './ListFilms';
import SearchFilms from './SearchFilms';
import FilmDetails from './FilmDetails';

class App extends Component {

  constructor() {
    super();

    this.state = {
      films: [],
      orderBy: 'release_date',
      orderDir: 'asc',
      queryText: '',
      lastIndex: 0
    }

    // Binding methods
    this.changeOrder = this.changeOrder.bind(this);
    this.searchFilms = this.searchFilms.bind(this);
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(response => {
        // Map a unique id to each film
        const swFilms = response.results.map(item => {
          item.filmId = this.state.lastIndex;
          this.setState({lastIndex: this.state.lastIndex+1})
          return item;
        });
        this.setState({
          films: swFilms
        });
      }).catch(error => {
        console.log('Film Request Failed: ', error);
      });
  }

  searchFilms(query) {
    this.setState({
      queryText: query
    });
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }

  render() {

    // Determine order of sorting
    let order;
    let filteredFilms = this.state.films;
    if(this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    // Filter (by queryText) and sort films before displaying
    filteredFilms = filteredFilms.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return(
        eachItem['title']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['opening_crawl']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase())
      );
    });

    return (
      <Router>
        <Link to="/">
          <header className="container text-white">
            <h4 className="py-2 text-center">Star Wars</h4>
          </header>
        </Link>
        { this.state.films.length > 0 && (
          <main className="page bg-white">
            <div className="container">
              <div className="row">
                <div className="col-12 bg-white">
                  <Route path="/" exact render={routeProps => (
                    <div>
                      <SearchFilms
                        orderBy={this.state.orderBy}
                        orderDir={this.state.orderDir}
                        changeOrder={this.changeOrder}
                        searchFilms={this.searchFilms}
                      />
                      <ListFilms {...routeProps} films={filteredFilms} />
                    </div>
                  )} />
                  <Route path="/:id" render={routeProps => (
                    <FilmDetails {...routeProps} films={this.state.films} />
                  )} />
                </div>
              </div>
            </div>
          </main>
        )}
      </Router>
    );
  }
}

export default App;
