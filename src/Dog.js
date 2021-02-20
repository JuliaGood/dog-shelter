import React, {Component} from 'react';
import './Dog.css';
import {Link} from 'react-router-dom';

class Dog extends Component {
  render() {
    let {currDog} = this.props;
    return (
      <div className='container'>
        <div className="DogDetails row justify-content-center mt-5">
          <div className='col-11 col-lg-5'>
            <div className='DogDetails-card card'>
              <img className='card-img-top' src={currDog.src} alt={currDog.name} />
              <div className='card-body'>
                <h2 className='card-title'>{currDog.name}</h2>
                <h4 className='card-subtitle text-muted'>{currDog.age} years old</h4>
              </div>
              <ul className='list-group list-group-flush'>
                {currDog.facts.map((fact, index) => (
                  <li className='list-group-item' key={index} >{fact}</li>
                ))}
              </ul>
              <div className='card-body'>
                <Link to='/dogs' className='btn btn-info' >Go Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dog;