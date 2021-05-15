import React from 'react'
import 'tachyons'

const Cards = ({id,name,email}) =>{ 
        return (  
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${id}?200x200`} alt="" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }


export default Cards;