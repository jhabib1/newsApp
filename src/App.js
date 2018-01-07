import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [{
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
},
{
  title: 'Redux',
  url: 'https://facebook.github.io/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: '2',
  points: '5',
  objectID: 1

}

];


// function isSearched(searchTerm) {
//   return function (item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);
    const {list, searchTerm}  = this.state;
    this.state = {
      list: list,
      searchTerm: '',
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);



  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({
      list: updatedList
    })
  }

  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    })

  }



  render() {
    const {searchTerm, list} = this.state;
    return (
      <div className="App">
        <form>
          <input type="text" 
          value={searchTerm}
          onChange={this.onSearchChange} />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => {
          return (
            <div>
              <span>
                <a href={item.url}> {item.title} </a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button">
                Dismiss
                 </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
