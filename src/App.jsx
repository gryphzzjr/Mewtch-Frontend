import React from 'react'

export default function App() {
  const githubRepo = "https://github.com/gryphzzjr/Mewtch-Frontend";

  function redirectToGithub() {
    window.location.href = githubRepo;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="text-gray-900 font-bold text-3xl">Welcome to <span className="text-orange-400">Mewtch</span></h1>
      <p className="text-gray-600 font-regular w-2xl text-center">
        Heyo! This website is still under development unfortunately... You can check back later, and i promise you it's going to be the best thing you've ever seen!
      </p>

      <div className="flex flex-row space-x-5">
        <button className="bg-orange-400 p-3 rounded-xl text-white font-medium hover:bg-orange-500 transition-all cursor-pointer">Okay, i understand!</button>
        <button className="border-2 border-orange-400 p-3 text-orange-400 rounded-xl hover:bg-orange-100 hover:text-orange-500 transition-all cursor-pointer" onClick={redirectToGithub}>View Github Repo</button>
      </div>
    </div>
  )
}
