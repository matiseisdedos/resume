import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';


export default function Nav() {

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <a href="https://github.com/matiseisdedos">Git-Hub</a>
                <a href="mailto:matiasseisdedosg@gmail.com">Gmail</a>
                <a href="https://www.linkedin.com/in/matiasseisdedosgiletta">LinkedIn</a>
            </nav>

        </>
    )
}