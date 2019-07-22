import React from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      loading: false,
      setLoading: false,
      currentPage: 1,
      postsPerPage: 20
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    this.setState({
      setLoading: true
    });
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    this.setState({
      posts: res.data,
      setLoading: false
    });
  };

  paginate = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };

  render() {
    // Variables From State
    const { currentPage, postsPerPage, posts, loading } = this.state;

    // Get Current Posts
    const indexOfLastPosts = currentPage * postsPerPage;
    const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);

    return (
      <div className="container mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default App;
