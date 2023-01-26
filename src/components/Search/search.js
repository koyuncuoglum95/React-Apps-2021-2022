import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import './search.css';

// We should type npm install unsplash-js to any terminal
// The above one is a way of importing unsplash
// This is how we get our api key with unsplash.

 const unsplash = createApi({
    accessKey: "DM5-ZRjEkPVg3dypxPYk-6ay-p3WB_5bnVJYwHZnBl0",
});


// This code is taking input you type to query with setQuery
// unsplash.search.getPhotos({query}) search photon depending on your input
// We added the photos json. Json.response.results connect to array and put picture variable with setPicture

export default function Search() {
    const [query, setQuery ] =  useState('');
    const [picture, setPicture] = useState([]);

    console.log(query);
    console.log(picture);

    const searchImage = (e) => {
    e.preventDefault();
    unsplash.search
    .getPhotos({query})
    .then(json => {
        setPicture(json.response.results);
    })
    
  };

// we added the array values to p bia map method because we cannot show array values without map method.

    return (
        <div>
        <form onSubmit={searchImage}>
        <input type="text" id="imageSearch" placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>
        <button id="btn1">Search</button>
        </form>
        <div>
        {
          picture.map((p) =>
            <div>
              <img
                id="img1"
                alt={p.alt_description}
                src={p.urls.full}
              ></img>
            </div>)
        }
      </div>
        </div>
    )
}