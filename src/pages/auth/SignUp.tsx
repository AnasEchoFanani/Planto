import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Signing up with:', { name, email, password })
    } catch (err) {
      setError('An error occurred during registration. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" data-aos="fade-up">
      <div className="max-w-md w-full space-y-8 glass p-8 rounded-[2rem]">
        <div>
          <h2 className="text-3xl font-bold text-center text-white">Create Your Garden</h2>
          <p className="mt-2 text-center text-gray-400">
            Join Planto and start your journey to a greener life.{' '}
            <Link to="/signin" className="text-green-400 hover:text-green-300">
              Already have an account?
            </Link>
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaUser />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none relative block w-full px-10 py-3 border border-white/10 
                    placeholder-gray-400 text-white rounded-xl bg-black/20 backdrop-blur-sm
                    focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/30
                    transition-all duration-300"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-10 py-3 border border-white/10 
                    placeholder-gray-400 text-white rounded-xl bg-black/20 backdrop-blur-sm
                    focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/30
                    transition-all duration-300"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaLock />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-10 py-3 border border-white/10 
                    placeholder-gray-400 text-white rounded-xl bg-black/20 backdrop-blur-sm
                    focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/30
                    transition-all duration-300"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent 
                text-sm font-medium rounded-xl text-white bg-green-600 hover:bg-green-700
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>

          <p className="text-center text-sm text-gray-400">
            By signing up, you agree to our{' '}
            <Link to="/terms" className="text-green-400 hover:text-green-300">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-green-400 hover:text-green-300">Privacy Policy</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp 