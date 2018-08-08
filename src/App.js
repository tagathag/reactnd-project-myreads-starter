import React from 'react'
import { Route } from "react-router-dom"
import { Switch } from "react-router";
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from "./MainPage"
import SearchPage from "./SearchPage"
import NoMatch from "./NoMatch"

class BooksApp extends React.Component {
  state = {
     books: []
  };

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books});
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books)=>{
      this.setState({books});
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/searchPage" render={()=>(
            <SearchPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}/>
          <Route exact path="/" render={()=>(
            <MainPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}/>
          {/* component if user types a page that does not exist */}
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
