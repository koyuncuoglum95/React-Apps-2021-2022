import React from "react";
import "./Hero.css";
import { useAuth0 } from "@auth0/auth0-react";
import movie from "../../data/movie.json";

const Hero = () => {
    const { isAuthenticated } = useAuth0();
    return (
      <div id="HeroPage">
      {isAuthenticated && (
        <>
        <p id="nforiginal">Trending Now</p>
        <div>
          <img src={movie[0].image} id="imgcard" alt={movie[0].name}/>
          <img src={movie[1].image} id="imgcard2" alt={movie[1].name}/>
          <img src={movie[2].image} id="imgcard3" alt={movie[2].name}/>
          <img src={movie[3].image} id="imgcard4" alt={movie[3].name}/>
        </div>
        <p id="nforiginal2">Critically Acclaimed TV Dramas</p>
        <div>
          <img src={movie[4].image} id="imgcard5" alt={movie[4].name}/>
          <img src={movie[5].image} id="imgcard6" alt={movie[5].name}/>
          <img src={movie[6].image} id="imgcard7" alt={movie[6].name}/>
          <img src={movie[7].image} id="imgcard8" alt={movie[7].name}/>
        </div>
        </>
      )}
    </div>
    )
}

export default Hero;
