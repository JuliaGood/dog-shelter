import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogCard from './DogCard';

class App extends Component {
  static defaultProps = {
    numDogs: 9
  }

  constructor(props) {
    super(props);
    this.state = {
      dogs: JSON.parse(window.localStorage.getItem('dogs') || "[]")
    }
  }

  componentDidMount() {
    if (this.state.dogs.length === 0) {
      this.getDogs();
    }
  }

  getDogs = async () => {
    try {
      const randDogs = new Map();
      while (randDogs.size < this.props.numDogs) {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=d8b24e68-2e88-46f9-b418-e92f25f5e4cd', {
          headers: {
            'Authorization': 'd8b24e68-2e88-46f9-b418-e92f25f5e4cd'
          }
        });
        console.log('response: ', response);

        const dogInfo = response.data[0];
        console.log(`dogInfo`, dogInfo);

        if (dogInfo.breeds.length > 0) {
          const newDog = {
            src: dogInfo.url,
            id: dogInfo.id,
            breedName: dogInfo.breeds[0].name,
            lifeSpan: dogInfo.breeds[0].life_span,
            height: dogInfo.breeds[0].height.metric,
            temper: dogInfo.breeds[0].temperament
          }

          console.log(`newDog`, newDog);

          if (!randDogs.has(newDog.breedName)) {
            randDogs.set(newDog.breedName, newDog);
          } else {
            console.log(`duplicate found`);
          }

          this.setState({ dogs: Array.from(randDogs.values()) }, () => {
            localStorage.setItem('dogs', JSON.stringify(this.state.dogs));
          });

        } else {
          console.log('dogInfo.breeds.length === 0');
        }
      }
    } catch (error) {
      console.log('GET request error', error);
    }
  }


  render() {
    const getDogCard = (routeProps) => {
      const dogId = routeProps.match.params.dogId;
      {/* how to find the PATH, the variable "/dogs/:DOGID" in the url */ }
      const currentDog = this.state.dogs.find((dog) => {
        return dog.id.toLowerCase() === dogId.toLowerCase()
      });
      return <DogCard {...routeProps} currDog={currentDog} />;
    };

    return (
      <div>
        <Navbar dogs={this.state.dogs} />
        <Switch>
          <Route exact path="/dogs" render={(routeProps) => <DogList {...routeProps} dogs={this.state.dogs} getDogs={this.getDogs} />} />
          <Route exact path="/dogs/:dogId" render={getDogCard} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;
