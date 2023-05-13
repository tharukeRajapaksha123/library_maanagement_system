import React from 'react';
import { Route,  BrowserRouter, Routes } from 'react-router-dom';
import { LibraryProvider } from './redux/libarary_context';
import HomePage from './components/home_page';
import BookPage from './components/book_page';
import BookDetailPage from './components/book_detail_page';
// Import other pages

const App = () => (
    <LibraryProvider>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/books/:id" element={<BookDetailPage/>}/>
        </Routes>
       </BrowserRouter>
    </LibraryProvider>
);

export default App;
