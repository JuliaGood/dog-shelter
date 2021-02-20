import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import whiskey from './images/whiskey.jpg';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';
import DogList from "./DogList";
import Dog from './Dog';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {
    const getDog = (routeProps) => {
      let dogName = routeProps.match.params.dogName;
      {/* abowe - that's where we define PATH variable right now ("/dogs/:DOGNAME") */}
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === dogName.toLowerCase()
      );
      return <Dog {...routeProps} currDog={currentDog} /> ;
    }
    return (
      <div>
        <Switch>
          <Route exact path='/dogs' render={(routeProps) => <DogList {...routeProps} dogs={this.props.dogs} /> } />
          <Route exact path='/dogs/:dogName' render={getDog} />
          {/* the way above WE connect getDog() to ROUTE component.
          Route will automatically PASS the routeProps into getDog() method */}
        </Switch>
      </div>
    );
  }
}

export default App;
