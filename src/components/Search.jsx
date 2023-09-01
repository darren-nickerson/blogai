import React, { useState, useMemo } from "react";


export default function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const lowercasedPosts = useMemo(
    () =>
      props.posts.map(({ name, path, tag }) => ({
        name: name.toLowerCase(),
        path,
        tag,
      })),
    [props.posts]
  );


  const filteredPosts = useMemo(
    () =>
      lowercasedPosts.filter((post) =>
        post.name.includes(searchQuery.toLowerCase())
      ),
    [lowercasedPosts, searchQuery]
  );


  const renderResults = () => {
    if (searchQuery.length > 1) {
      if (filteredPosts.length > 0) {
        return (
          <div className="mt-4 mb-4 no-underline capitalize  bg-gray-950 p-4 rounded prose md:prose-lg prose-invert w-full max-w-[890px]">
            <ul role="list">
              <h4 className="text-red-600 text-sm">Search Results: {filteredPosts.length}</h4>
              {filteredPosts.map((post, index) => (
                <li key={index} className="list-decimal">
                  <a className="text-gray-400 no-underline hover:underline hover:text-blue-400 font-light text-sm" href={post.path}>{post.name}</a>
                </li>
              ))}
            </ul>
          </div>
        );
      } else {
        return (
          <div className="mt-4 text-gray-500 bg-gray-950 p-4">
            No matches found for '{searchQuery}'.
          </div>
        );
      }
    } else {
      return null;
    }
  };

  return (
    <div className="text-white ">
      <div>
        <input
          className="text-gray-300 w-full mt-2 mb-4  bg-gray-800 rounded-lg"
          type="text"
          onInput={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
      </div>
      {renderResults()}
    </div>
  );
}
