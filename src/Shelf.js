import React from 'react'
import PropTypes from "prop-types";
import Book from "./Book"

class Shelf extends React.Component {
  
    render(){
        
        const { books, changeShelf , currentShelf } = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{currentShelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {books.map((book)=>(
                            <Book
                                book={book}
                                key={book.id} 
                                changeShelf={changeShelf}
                                currentShelf={currentShelf}
                            />
                        ))}
                        
                    </ol>
                </div>
            </div>
        )
    }
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

export default Shelf