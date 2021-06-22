import React from 'react';
import techs from './techs';
import '../index.css'

export default function Cards() {
    return (
        <>
            <h2>Languages && Technologies</h2>
            <main className="col-3">
                {techs.map(t =>
                    <div className='tech'>
                        <h3>{t.h3}</h3>
                        <img src={t.urlImg} alt={`${t.h3} Logo`} />
                        <p>{t.p}</p>
                    </div>
                )}
            </main>
        </>
    )
}