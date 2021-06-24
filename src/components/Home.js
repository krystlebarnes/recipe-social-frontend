import React from 'react';
import Login from './Login.js';
import { Link } from 'react-router-dom'

const Home = () => {
    return (    
        <div>
            <Login />
            <p>Don't have an account yet? <Link to="/signup">Sign Up.</Link></p>
        </div>
    )
}


export default Home