import React, { Component } from 'react';
import './dogList.css';
import { Link } from 'react-router-dom';

class DogList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DogList">
        <h1 className="display-4 text-center my-5" >Dog List!</h1>
        <div className="row">
          {this.props.dogs.map((dog, index) => (
            <div className="Dog col-md-6 col-lg-4 text-center" key={index} >
              <div className="dog-container">
                <div className="dog-box-img"
                  style={{ backgroundImage: `url(${dog.src})` }}
                ></div>
                <h3 className="mt-3" >
                  <Link
                    className="underline"
                    to={`/dogs/${dog.id}`}
                  >{dog.breedName}</Link>
                </h3>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}

export default DogList;
