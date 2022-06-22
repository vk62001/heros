import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes  = getHeroesByPublisher(publisher);

    return (
        <div
            className='row row-cols-3 rows-cols-md-3 g-3'
        >
            {
                heroes.map(hero=>(
                    <HeroCard 
                            key={hero.id}
                            {...hero}
                        />
                ))
                        
                
            }
        </div>
    )
}
