import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  "Venom",
  "The Great War",
  "Search",
  "Negotiation"
]

const movieImages = [
  "https://extmovie.maxmovie.com/xe/files/attach/images/135/783/904/036/0d87a693a33d087b39c213578dbba00e.jpeg",
  "http://cphoto.asiae.co.kr/listimglink/6/2018051810255135369_1526606750.jpg",
  "http://viewers.heraldcorp.com/news/photo/201808/17908_12721_585.jpg",
  "http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2018/08/2018082808481766624-540x772.jpg"

]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]} poster={movieImages[0]}/>
        <Movie title={movies[1]} poster={movieImages[1]}/>
        <Movie title={movies[2]} poster={movieImages[2]}/>
        <Movie title={movies[3]} poster={movieImages[3]}/>
      </div>
    )
  }
}

export default App;
