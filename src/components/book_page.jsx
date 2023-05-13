import React, { useContext } from 'react';
import LibraryContext from '../redux/libarary_context';


const BookPage = () => {
    const { state, dispatch } = useContext(LibraryContext);
    

    return (
        <>
            <div>Home Page</div>
        </>
    )
};

export default BookPage
