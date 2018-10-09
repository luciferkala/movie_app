import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    greeting: 'Hello',
    movies: [
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
  }

  componentWillMount(){
    console.log("will mount");
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "murder",
            poster: "http://dimg.donga.com/wps/SPORTS/IMAGE/2018/09/06/91858817.1.jpg"
          }
        ]

      })
    },5000)
  }

  render() {
    console.log("did render");
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie,index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })

        }
      </div>
    )
  }
}

export default App;
