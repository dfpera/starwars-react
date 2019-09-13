import React, { Component } from 'react';
import Moment from 'react-moment';

class FilmDetails extends Component {
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
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FilmDetails;