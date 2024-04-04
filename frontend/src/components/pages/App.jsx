import react from 'react';
import reactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route
} from 'react-router-dom'
import { AppProvider } from './src/context.';
import './index.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import BookList from './src/components/BookList/BookList'
import BookDetails from './components/BookDetails/BookDetails';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home />}>
                    <Route path = "about" element = {<About />} />
                    <Route path = "book" element = {<BookList />} />
                    <Route path = "book/:id" element = {<BookDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
    
)