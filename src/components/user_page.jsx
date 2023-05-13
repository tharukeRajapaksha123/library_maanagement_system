import React, { useContext } from 'react';
import LibraryContext from './LibraryContext';

const UserPage = () => {
    const { state, dispatch } = useContext(LibraryContext);


    return <>
        <div>

            User Page
        </div>
    </>
};

export default UserPage
