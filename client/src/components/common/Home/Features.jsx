import React from "react";

const Features = () => {
  return (
    <div className="mx-auto  my-32 w-[95vw] px-10 py-1 lg:px-8">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div className="bg-black rounded-md px-10 py-20">
          <div className="mx-auto flex h-20   w-20 items-center justify-center rounded-full bg-blue-100">
            <svg
              className="h-9 w-9 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-xl font-semibold   text-white">
            Creative Library
          </h3>
          <p className="mt-4 text-sm text-white">
            A centralized repository for storing and organizing ad creatives.
           
          </p>
        </div>
        <div className="bg-black rounded-md px-10 py-20">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <svg
              className="h-9 w-9 text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-xl font-semibold text-white">
            Ad Content Management
          </h3>
          <p className="mt-4 text-sm text-white">
            The ability to track changes and manage different versions of ad
            creatives is crucial for collaborative work. 
          </p>
        </div>
        <div className="bg-black rounded-md px-10 py-20">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-9 w-9 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-xl font-semibold text-white">
            Audience Targeting and Segmentation:
          </h3>
          <p className="mt-4 text-sm text-white">
             This includes options for location-based targeting,
            device targeting, and custom audience segments.
          </p>
        </div>
        <div className="bg-black rounded-lg px-10 py-20 ">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-9 w-9 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <h3 className="mt-8 text-xl font-semibold text-white">
            Scheduling and Automation
          </h3>
          <p className="mt-4 text-sm text-white">
            {" "}
            The ability to schedule ad campaigns and automate certain processes helps
            streamline campaign management and ensures timely execution of
            strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
