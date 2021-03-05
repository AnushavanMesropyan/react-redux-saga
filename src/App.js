import PostForms from "./componnents/PostForms";
import Posts from "./componnents/Posts";
import FetchedPost from "./componnents/FetchedPost";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForms></PostForms>
        </div>
        <div className="row">
        <div className="col">
          <h2>Sync Posts</h2>
          <Posts></Posts>
        </div>
        <div className="col">
          <h2>Async Posts</h2>
          <FetchedPost ></FetchedPost>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
