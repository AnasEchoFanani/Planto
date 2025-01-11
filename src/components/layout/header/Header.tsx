import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 