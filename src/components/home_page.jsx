import React, { useContext } from 'react';
import LibraryContext from '../redux/libarary_context';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const { state, dispatch } = useContext(LibraryContext);
    // Display the list of books and users

    return <div>
        <h2>Books</h2>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {state.books.map((book, index) => (
                    <tr key={index}>
                        <td>
                            <Link to={`/books/${book.id}`}>{book.title}</Link>
                        </td>
                        <td>{book.author}</td>
                        <td><button
                            onClick={(e) => {
                                const id = book.id
                                dispatch({
                                    type: "UPDATE_BOOK", payload: {
                                        id: id,
                                        updatedBook: { title: 'New Title' }
                                    }
                                })
                            }}
                        >Update</button></td>
                        <td><button
                            onClick={(e) => {
                                const bookId = book.id
                                dispatch({ type: 'DELETE_BOOK', payload: { bookId } });
                            }}
                        >Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h2>Users</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {state.users.map((user, index) => (
                    <tr key={index}>
                        <td>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
};


export default HomePage