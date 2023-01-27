import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from '../features/books/AddBook'
import BooksView from '../features/books/BooksView'
import Navbar from '../layouts/Navbar'
import Error from '../pages/Error'
import EditBook from '../features/books/EditBook';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<BooksView />} />
                    <Route path="/show-books" element={<BooksView />} />
                    <Route path="/add-books" element={<AddBook />} />
                    <Route path="/edit-book" element={<EditBook />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Index