import React from 'react';

const Calltoaction = () => {
  return (
    <div
      id="calltoaction"
      className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600"
    >


      {/* Content container */}
      <div className="relative py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
            Ready to Enter the Future of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
              Web3?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join Ethereal today and unlock the potential of Web3. Experience the next generation of decentralized applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">

            {/* Explore More Button */}
            <a
              href="https://web3.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 text-base font-medium rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
                aria-label="Explore More"
            >
              Explore More
              <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;

