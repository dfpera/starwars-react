import React, {Component} from 'react';

class SearchFilms extends Component {
  render() {
    return (
      <div className="search-films row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchFilms"
              type="text"
              className="form-control"
              aria-label="Search Films"
              onChange={(e) => this.props.searchFilms(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button 
                  className={
                    'sort-by dropdown-item ' + (this.props.orderBy === 'release_date' ? 'active' : '')
                  }
                  onClick={(e) => this.props.changeOrder('release_date', this.props.orderDir)}
                  href="#"
                >
                  Date
                </button>
                <button 
                  className={
                    'sort-by dropdown-item ' + (this.props.orderBy === 'title' ? 'active' : '')
                  }
                  onClick={(e) => this.props.changeOrder('title', this.props.orderDir)}
                  href="#"
                >
                  Title
                </button>
                <div role="separator" className="dropdown-divider" />
                <button 
                  className={
                    'sort-by dropdown-item ' + (this.props.orderDir === 'asc' ? 'active' : '')
                  }
                  onClick={(e) => this.props.changeOrder(this.props.orderBy, 'asc')}
                  href="#"
                >
                  Asc
                </button>
                <button 
                  className={
                    'sort-by dropdown-item ' + (this.props.orderDir === 'desc' ? 'active' : '')
                  }
                  onClick={(e) => this.props.changeOrder(this.props.orderBy, 'desc')}
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilms;