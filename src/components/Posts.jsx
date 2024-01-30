import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("An error has occurred.");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </div>
      )}

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      {isLoading && (
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-loader"
            >
              <line x1="12" x2="12" y1="2" y2="6" />
              <line x1="12" x2="12" y1="18" y2="22" />
              <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
              <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
              <line x1="2" x2="6" y1="12" y2="12" />
              <line x1="18" x2="22" y1="12" y2="12" />
              <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
              <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );

  // if (posts.length > 0) {
  //   return (
  //     <div>
  //       {posts.map((user) => (
  //         <p key={post.id}>{post.title}</p>
  //       ))}
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div>
  //       <p>{error}</p>
  //     </div>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <div>
  //       <span>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           stroke="#000000"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //           class="lucide lucide-loader"
  //         >
  //           <line x1="12" x2="12" y1="2" y2="6" />
  //           <line x1="12" x2="12" y1="18" y2="22" />
  //           <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
  //           <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
  //           <line x1="2" x2="6" y1="12" y2="12" />
  //           <line x1="18" x2="22" y1="12" y2="12" />
  //           <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
  //           <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
  //         </svg>
  //       </span>
  //     </div>
  //   );
  // }
  // return <div>App</div>;
};

export default Posts;
