import React from "react";

const Posts = props => {
  const { posts, loading } = props;

  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(posts);
  return (
    <>
      <ul className="list-group mb-4">
        {posts.map(post => {
          return (
            <div key={post.id} className="mb-4 border border-dark rounded">
              <div className="list-group-item d-flex justify-content-between">
                <li className="list-group-item px-0 border-0">{post.name}</li>
                <li className="list-group-item border-0">{post.id}</li>
              </div>

              <li className="list-group-item border-top border-primary border-bottom-0 border-right-0 border-left-0">
                {post.body}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;
