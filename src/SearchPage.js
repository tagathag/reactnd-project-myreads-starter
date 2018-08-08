import React  from 'react'
import PropTypes from "prop-types";
import * as BooksAPI from './BooksAPI'
import Book from "./Book"
import { Link } from "react-router-dom"


class SearchPage extends React.Component{
    state = {
        query: "",
        searchedBooks: []
     };
    
    updateQuery = (query)=>{
        this.setState({ query: query})
        this.updateSearchedBooks(query)
    }


    updateSearchedBooks = (query ) => {
        if (query){
            BooksAPI.search(query).then((searchedBooks)=>{
                if (searchedBooks.error){
                    this.setState({ searchedBooks: []})

                }else{
                    this.setState({ searchedBooks: searchedBooks })
                }  
            })   
        }else{
            this.setState({ searchedBooks: []})
        }
    }
     
    render(){
        const { changeShelf, books } = this.props;
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search"  to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event)=>this.updateQuery(event.target.value)}
                    />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                    this.state.searchedBooks.map(searchedBook => {

                        let defaultShelf = "none"
                        
                        books.map( book => (
                            book.id === searchedBook.id ? defaultShelf= book.shelf : ""
                        ) )

                        return(
                        <Book
                            key={searchedBook.id}
                            book={searchedBook}
                            changeShelf={changeShelf}
                            currentShelf={defaultShelf}
                        />
                        )
                    })
                }
              </ol>
            </div>
          </div>
        )
        
    }
}


SearchPage.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };


export default SearchPage