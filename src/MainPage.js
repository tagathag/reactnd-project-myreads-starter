import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import Shelf from "./Shelf"
import Title from "./Title"

class MainPage extends React.Component {
   
    render(){
        const { books, changeShelf } = this.props;
       
        return(
            <div className="list-books">
                <Title/>
                <div className="list-books-content">
                    <div>
                        <Shelf
                            books={books.filter( book => book.shelf === "currentlyReading" )}
                            currentShelf="curentlyReading"
                            changeShelf={changeShelf}
                        />
                        <Shelf
                            books={books.filter( book => book.shelf === "wantToRead" )}
                            currentShelf="wantToRead"
                            changeShelf={changeShelf}
                        />
                        <Shelf
                            books={books.filter( book => book.shelf === "read" )}
                            currentShelf="read"
                            changeShelf={changeShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/searchPage">Add a book</Link>
                </div>
          </div>
        )
        
    }
}

MainPage.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };


export default MainPage