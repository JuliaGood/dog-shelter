import React, {Component} from 'react';
import './Dog.css';

class Dog extends Component {
  render() {
    return (
      <div className="DogList">
        <h1>{this.props.currDog.name}</h1>
      </div>
    )
  }
}

export default Dog;