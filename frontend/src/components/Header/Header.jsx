import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css";

const Header = () => {
    return (
        <div className='holder'>
            <header className='haeder'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalized'>Find your book of choice.</h2><br />
                    <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis beatae voluptatem mollitia quam eum, cum omnis facilis ratione corrupti incidunt natus perspiciatis consequatur illo.</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header