import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="nb navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dogs" >Dog App</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toogle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" >
            {this.props.dogs.map((dog) => (
              <li className="nav-item" key={dog.id}>
                <NavLink exact to={`/dogs/${dog.id}`} className="nav-link" >
                  {dog.breedName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
