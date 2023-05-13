import React, { createContext, useReducer } from 'react';

const LibraryContext = createContext();

const initialState = {
    books: [
        {
            id: '1',
            title: '1984',
            author: 'George Orwell',
            publicationDate: '1949-06-08',
            availableCopies: 5
        },
        {
            id: '2',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            publicationDate: '1960-07-11',
            availableCopies: 3
        },
        {
            id: '3',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            publicationDate: '1925-04-10',
            availableCopies: 7
        },
        {
            id: '4',
            title: 'Moby-Dick',
            author: 'Herman Melville',
            publicationDate: '1851-10-18',
            availableCopies: 2
        },
        {
            id: '5',
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            publicationDate: '1869-01-01',
            availableCopies: 0
        }
    ],
    users: [
        // initial user data
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return { ...state, books: [...state.books, action.payload] };
        case 'BORROW_BOOK':
            return {
                ...state,
                books: state.books.map(book =>
                    book.id === action.payload.bookId && book.availableCopies > 0
                        ? { ...book, availableCopies: book.availableCopies - 1 }
                        : book
                ),
                users: state.users.map(user =>
                    user.id === action.payload.userId
                        ? { ...user, borrowedBooks: [...user.borrowedBooks, action.payload.bookId] }
                        : user
                )
            };
        case 'RETURN_BOOK':
            return {
                ...state,
                books: state.books.map(book =>
                    book.id === action.payload.bookId
                        ? { ...book, availableCopies: book.availableCopies + 1 }
                        : book
                ),
                users: state.users.map(user =>
                    user.id === action.payload.userId
                        ? {
                            ...user,
                            borrowedBooks: user.borrowedBooks.filter(bookId => bookId !== action.payload.bookId)
                        }
                        : user
                )
            };
        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload.bookId)
            };
        case 'UPDATE_BOOK':
            return {
                ...state,
                books: state.books.map(book =>
                    book.id === action.payload.id
                        ? { ...book, ...action.payload.updatedBook }
                        : book
                )
            };
        default:
            return state;
    }
};

export const LibraryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <LibraryContext.Provider value={{ state, dispatch }}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryContext;
