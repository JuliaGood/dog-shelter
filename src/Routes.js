import React, { Component } from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import DogList from "./DogList";
import Dog from './Dog';

export default class Routes extends Component {
  render() {
    const getDog = (routeProps) => {
      let dogName = routeProps.match.params.dogName;
      {/* above - that's where we find PATH variable ("/dogs/:DOGNAME") */}
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === dogName.toLowerCase()
      );
      return <Dog {...routeProps} currDog={currentDog} /> ;
    };

    return(
      <Switch>
        <Route exact path='/dogs' render={(routeProps) => <DogList {...routeProps} dogs={this.props.dogs} /> } />
        <Route exact path='/dogs/:dogName' render={getDog} />
        <Redirect to='/dogs' />
      </Switch>
    )
  }
} 