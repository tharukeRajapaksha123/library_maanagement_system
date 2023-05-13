import React, { useContext } from 'react';
import LibraryContext from '../redux/libarary_context';
import { useParams } from 'react-router-dom';

const BookDetailPage = ({ match }) => {
    const params = useParams()
    const { state, dispatch } = useContext(LibraryContext);
    const bookId = params.id; 

    const book = state.books.find(book => book.id === bookId);
    if (!book) return <div>Book not found</div>

    const handleBorrow = () => {
        dispatch({ type: 'BORROW_BOOK', payload: { bookId } });
    }

    const handleReturn = () => {
        dispatch({ type: 'RETURN_BOOK', payload: { bookId } });
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Publication Date: {book.publicationDate}</p>
            <p>Available Copies: {book.availableCopies}</p>
            <button onClick={handleBorrow}>Borrow</button>
            <button onClick={handleReturn}>Return</button>
        </div>
    );

}
export default BookDetailPage