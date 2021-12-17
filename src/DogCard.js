import React, { Component } from 'react';
import './dogCard.css';
import { Link } from 'react-router-dom';

class DogCard extends Component {
  render() {
    const { currDog } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-11 col-lg-5">
            <div className="dog-card card">
              <img className="card-img-top" src={currDog.src} alt={currDog.breedName} />
              <div className="card-body">
                <h2 className="card-title">{currDog.breedName}</h2>
                <h4 className="card-subtitle text-muted">{currDog.lifeSpan}</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" >Height: {currDog.height} cm</li>
                <li className="list-group-item" >{currDog.temper}</li>
              </ul>
              <div className="card-body">
                <Link to="/dogs" className="btn btn-info" >Go Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DogCard;
