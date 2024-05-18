import React from "react"

const HeaderNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between  p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://euka.edu.au/wp-content/themes/euka/assets/images/euka-future-learning-logo.svg"
            className="h-8"
            alt="Euka Logo"
          />
        </a>
        <label
          className="inline-flex items-center px-4 py-2 w-auto justify-center text-sm  text-gray-900 font-bold rounded-lg"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          mesith@gmail.com
        </label>
      </div>
    </nav>
  )
}

export default HeaderNavBar
