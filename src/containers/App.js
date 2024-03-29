import React, {Component} from 'react';
import { render } from 'react-dom';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots : robots,
            // robots : [], for api call
            searchfield : ''
        }
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    //       return response.json();
    //     })
    //     .then(users => {
    //         this.setState({robots: users})
    //     })
    // }

    onSearchChange = (event) => {
       this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots,searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className = 'tc'>
            <h1>RoboFriends</h1>
            <h1>Hiiiiiii</h1>
            <SearchBox searchchange = {this.onSearchChange}/>
            <Scroll>
              <CardList robots = {filteredRobots}/>
            </Scroll>
            
            </div>
        )
    }
}

export default App;
