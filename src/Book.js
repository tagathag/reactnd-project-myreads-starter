import React  from 'react'
import BookShelfChanger from "./BookShelfChanger"


class Book extends React.Component{
    render(){
        const { book, changeShelf, currentShelf } = this.props;
        // let displayedThumbnail = this.props.book.imageLinks ? 
        //     this.props.book.imageLinks.thumbnail : "";
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        {(book.imageLinks && (
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        )||<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(")` }}></div>)}
                        <BookShelfChanger
                        
                            book={book}
                            changeShelf={changeShelf}
                            currentShelf={currentShelf}
                        
                        />
                    </div>
                    <div className="book-title">{`${book.title}`}</div>
                    <div className="book-authors">{`${book.authors}`}</div>
                </div>
            </li>
        )
    }
}

export default Book 