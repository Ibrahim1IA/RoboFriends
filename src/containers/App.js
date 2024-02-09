import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(reponse => reponse.json()
        .then(users => this.setState({robots : users}))
        )
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">Robot Friends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobot} />
                </Scroll>
            </div>
        );
    }
    
}

export default App;