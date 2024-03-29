import React from "react";

const HomeCard = ({ post }) => {
  const imgURL = post.multimedia.split("ipfs://");
  return (
    <div
      key={post.title}
      style={{ height: "100%" }}
      className="relative  overflow-hidden rounded-2xl shadow-lg group"
    >
      <img
        src={`https://ipfs.io/ipfs/${imgURL[1]}`}
        style={{ width: "100%", height: "100%" }}
        className="transition-transform opacity-95 object-cover group-hover:scale-110 group-hover:bg-gradient-to-t from-stone-900/80  duration-400"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-stone-900/40 to-transparent">
        <div className="p-4 w-full text-xl text-white">
          <h3 className="text-3xl font-bold dark:text-white">{post.title}</h3>
          <br />
          <div className="flex">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            {post.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
