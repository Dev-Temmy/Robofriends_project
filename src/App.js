import React, {Component} from 'react'; 
import CardList from './CardList';
import SearchBox from './SearchBox';
//import Scroll from '..components/Scroll';
//import {robots} from './robots';
import './App.css';

class App extends Component { //constructor function to create state
    constructor() {
        super()
        this.state = { //describes the App
            robots: [], //this robot will likely be empty array in practice as it will be cumbersome to list all
            searchfield: '' //we can type any robot we are looking for here
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {
        this.setState({robots: users})  //if this is empty, Loading will appear on the page  
        })         
    }
onSearchChange =(event)=>{ //through searchChange we can control SearchBox
    this.setState({searchfield: event.target.value}) //update the searchfield with whatever we typed
}

render() {
    const filteredRobots = this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
if (this.state.robots.length === 0){
return <h1>Loading</h1>
} else {
return (
    <div className='tc'>
        <h1 className='f1'> RobotFriends</h1>
        <SearchBox searchChange= {this.onSearchChange}/>
        <div className= 'overflow-y-scroll-ns { overflow-y: scroll; }'>
        <CardList robots = {filteredRobots} />
        </div>    
    </div>
    );
}
}
}

export default App;

/*  <Scroll>
    <CardList robots = {filteredRobots}/>
         </Scroll>           
         */