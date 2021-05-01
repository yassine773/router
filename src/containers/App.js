import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import IronMan1 from "../assets/img/IronMan.jpg";
import IronMan2 from "../assets/img/Iron_Man_2_poster.jpg";
import IronMan3 from "../assets/img/iron-man-3-international-poster1.jpg";
import Avenger1 from "../assets/img/Avenger1.jpg";
import Avenger2 from "../assets/img/Avenger2.jpg";
import Avenger3 from "../assets/img/Avenger3.jpg";
import MovieList from "../components/MovieList";
import MovieDetails from "../components/MovieDetails";
export default class App extends Component {
  static defaultProps = {
    movieList: [
      {
        id: "IM1",
        name: "Iron_Man",
        linkName: "Iron Man",
        ImgSrc: IronMan1,
        release: "2008",
        story:
          " After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. "
      },
      {
        id: "IM2",
        name: "Iron_Man_2",
        linkName: "Iron Man 2",
        ImgSrc: IronMan2,
        release: "2010",
        story:
          "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy."
      },
      {
        id: "IM3",
        name: "Iron_Man_3",
        linkName: "Iron Man 3",
        ImgSrc: IronMan3,
        release: "2013",
        story:
          "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
      },
      {
        id: "AVR1",
        name: "Marvel's_The_Avengers",
        linkName: "The Avengers",
        ImgSrc: Avenger1,
        release: "2012",
        story:
          "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
      },
      {
        id: "AVR2",
        name: "Avenger_Age_of_Ultron",
        linkName: "Age Of Ultron",
        ImgSrc: Avenger2,
        release: "2015",
        story:
          " When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan."
      },
      {
        id: "AVR3",
        name: "Avengers_Infinity_War",
        linkName: "Infinity War",
        ImgSrc: Avenger3,
        release: "2018",
        story:
          "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe. "
      }
    ]
  };

  render() {
    const getMovie = props => {
      let movieName = props.match.params.name;
      let currentMovieName = this.props.movieList.find(
        movie => movie.name.toLowerCase() === movieName.toLowerCase()
      );
      return <MovieDetails {...props} movie={currentMovieName} />;
    };

    return (
      <div className="App">
        <NavBar movies={this.props.movieList} />

        <Switch>
          <Route
            exact
            path="/movieList"
            render={() => <MovieList movies={this.props.movieList} />}
          />
          <Route exact path="/:name" render={getMovie} />
        </Switch>
      </div>
    );
  }
}
