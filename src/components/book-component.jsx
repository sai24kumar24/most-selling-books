import React from "react";
import '../components/book.styles.css'

export const Book = (props) => {

    return (
        <div className="book-styles">
           <h1>{props.book.name}</h1>
        </div>
    )
}