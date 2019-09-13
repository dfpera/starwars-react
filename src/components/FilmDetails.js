import React, { Component } from 'react';
import Moment from 'react-moment';

class FilmDetails extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      charKey: 0,
      planets: [],
      planKey: 0,
      starships: [],
      starKey: 0,
      vehicles: [],
      vehKey: 0,
      species: [],
      specKey: 0
    }
  }

  componentDidMount() {
    let film = this.props.films[parseInt(this.props.match.params.id)];
    var index;

    // Fetch Characters
    for (index in film.characters) {
      fetch(film.characters[index])
        .then(response => response.json())
        .then(response => {
          response.id = this.state.charKey;
          this.setState({charKey: this.state.charKey+1})
          this.setState({
            characters: this.state.characters.concat(response)
          });
        }).catch(error => {
          console.log('Character Request Failed: ', error);
        });
    }

    // Fetch Planets
    for (index in film.planets) {
      fetch(film.planets[index])
        .then(response => response.json())
        .then(response => {
          response.id = this.state.planKey;
          this.setState({planKey: this.state.planKey+1})
          this.setState({
            planets: this.state.planets.concat(response)
          });
        }).catch(error => {
          console.log('Planet Request Failed: ', error);
        });
    }

    // Fetch Starships
    for (index in film.starships) {
      fetch(film.starships[index])
        .then(response => response.json())
        .then(response => {
          response.id = this.state.starKey;
          this.setState({starKey: this.state.starKey+1})
          this.setState({
            starships: this.state.starships.concat(response)
          });
        }).catch(error => {
          console.log('Starship Request Failed: ', error);
        });
    }

    // Fetch Vehicles
    for (index in film.vehicles) {
      fetch(film.vehicles[index])
        .then(response => response.json())
        .then(response => {
          response.id = this.state.vehKey;
          this.setState({vehKey: this.state.vehKey+1})
          this.setState({
            vehicles: this.state.vehicles.concat(response)
          });
        }).catch(error => {
          console.log('Vehicle Request Failed: ', error);
        });
    }

    // Fetch Species
    for (index in film.species) {
      fetch(film.species[index])
        .then(response => response.json())
        .then(response => {
          response.id = this.state.specKey;
          this.setState({specKey: this.state.specKey+1})
          this.setState({
            species: this.state.species.concat(response)
          });
        }).catch(error => {
          console.log('Species Request Failed: ', error);
        });
    }
  }

  render() {
    let film = this.props.films[parseInt(this.props.match.params.id)];
    return (
      <div>
        { film && (
          <div className="film-list item-list mb-3">
            <div className="film-item col media py-3" key={film.filmId}>
              <div className="film-info media-body">
                <div className="film-head d-flex">
                  <h4>Episode {film.episode_id}: {film.title}</h4>
                  <span className="film-date ml-auto">
                    <Moment
                      date={film.release_date}
                      parse="YYYY-MM-DD"
                      format="MMM D, YYYY"
                    />
                  </span>
                </div>
                <div className="owner-name">
                  <span className="label-item">Director: </span>
                  <span >{film.director}</span>
                </div>
                <div className="owner-name">
                  <span className="label-item">Producer: </span>
                  <span >{film.producer}</span>
                </div>
                <div className="film-crawl">{film.opening_crawl}</div>
                { this.state.characters.length > 0 && (
                  <div className="film-characters">
                    <h5>Characters</h5>
                    <ul>
                      {this.state.characters.map(item => (
                        <li key={item.id} className="film-character">
                          <p>{item.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                { this.state.planets.length > 0 && (
                  <div className="film-planets">
                    <h5>Planets</h5>
                    <ul>
                      {this.state.planets.map(item => (
                        <li key={item.id} className="film-planet">
                          <p>{item.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                { this.state.starships.length > 0 && (
                  <div className="film-starships">
                    <h5>Starships</h5>
                    <ul>
                      {this.state.starships.map(item => (
                        <li key={item.id} className="film-starship">
                          <p>{item.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                { this.state.vehicles.length > 0 && (
                  <div className="film-vehicles">
                    <h5>Vehicles</h5>
                    <ul>
                      {this.state.vehicles.map(item => (
                        <li key={item.id} className="film-vehicle">
                          <p>{item.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                { this.state.species.length > 0 && (
                  <div className="film-species">
                    <h5>Species</h5>
                    <ul>
                      {this.state.species.map(item => (
                        <li key={item.id} className="film-specie">
                          <p>{item.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FilmDetails;