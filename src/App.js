import React, {Component} from 'react';
import photo from "./photo-camera.png";
import search from "./search.png";
import {
  InstantSearch,
  SearchBox,
  InfiniteHits
} from 'react-instantsearch/dom';
import Upload from "./upload";
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.onChangeFile = this.onChangeFile.bind(this)
  }
  onChangeFile = (event)=> {
    console.log('event.target.files[0]', event.target.files[0])
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    console.log('file.....:', file);
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render(){
    return (
      <div className="container">
          <header>
            <p>Settings</p>
          </header>

          <div className="search-container">
            <h1>Image<span>Search</span></h1>
            <div className="input-search">
              <input type="text" placeholder="|" 
             />
              <input type="file" id="file" style={{display:"none"}}
              onChange={(e) => this.onChangeFile(e)} />
               
              <label htmlFor="file" >
                <img src={photo} alt="camera" />
              </label>
              <img src={search} className="search" alt="search icon"/>
             
            
            </div>
          </div>
      </div>
    );
  }
}

export default App;
