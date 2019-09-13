import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from "react-router-dom";


class ListFilms extends Component {
  render() {
    return (
      <div className="film-list item-list mb-3">
        {this.props.films.map(item => (
          <Link to={"/" + item.filmId} key={item.filmId}>
            <div className="film-item col media py-3">
              <div className="film-info media-body">
                <div className="film-head d-flex">
                  <h4>{item.title}</h4>
                  <span className="film-date ml-auto">
                    <Moment
                      date={item.release_date}
                      parse="YYYY-MM-DD"
                      format="MMM D, YYYY"
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default ListFilms;