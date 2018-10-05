import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:   "Venom",
    poster: "https://extmovie.maxmovie.com/xe/files/attach/images/135/783/904/036/0d87a693a33d087b39c213578dbba00e.jpeg"
  },
  {
    title:   "The Great War",
    poster: "http://cphoto.asiae.co.kr/listimglink/6/2018051810255135369_1526606750.jpg"
  },
  {
    title:   "Search",
    poster: "http://viewers.heraldcorp.com/news/photo/201808/17908_12721_585.jpg"
  },
  {
    title:   "Negotiation",
    poster:  "http://tenasia.hankyung.com/webwp_kr/wp-content/uploads/2018/08/2018082808481766624-540x772.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster}/>
        })

        }
      </div>
    )
  }
}

export default App;
