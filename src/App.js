import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  getMovie = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
