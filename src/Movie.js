import React , { Component } from 'react';
import './Movie.css';


class Movie extends Component 
{
    render()
    {   return(
            <div>
                <MoviePoster />
                <h1>Hello! This is Movie!</h1>
            </div>
        );
    }
}

class MoviePoster extends Component
{
    render()
    {
        return(
            <img src="https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/5b97e185898583c10ada2205/5b97e189562fa7b69f68ebd0/1536680333398/VENOM.jpg"></img>
        );
    }
}
export default Movie;