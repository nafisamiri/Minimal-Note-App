import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-100">
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <a href="/" className="flex-shrink-0 flex items-center">
              Home
            </a>
          </div>
          <div class="flex items-center">
            <>
              <a
                target="blank"
                href="https://github.com/nafisamiri"
                class="text-gray-500 hover:text-gray-700 mx-4"
              >
                <span class="sr-only">GitHub</span>
                Github
              </a>
            </>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar