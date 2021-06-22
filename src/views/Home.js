import React from 'react';
import Nav from './Nav'
import Cards from './Cards';
import techs from './techs';
import Summary from './summary';
import Education from './Education';


export default function Home() {
    return (
        <>
            <Nav />
            <Summary />
            <Cards techs={techs} />
            <Education />
        </>
    )
}