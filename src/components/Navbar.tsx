import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Info,
  Layers,
  ListChecks,
  UserPlus,
  LogIn,
  Menu,
  X,
  User,
} from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: <Home size={18} /> },
    { name: 'About Us', icon: <Info size={18} /> },
    { name: 'Features', icon: <Layers size={18} /> },
    { name: 'Steps', icon: <ListChecks size={18} /> },
  ];

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    toggleSidebar(); // Open profile sidebar after auth
  };

  const handleSignUp = () => {
    setIsSignUpModalOpen(true);
  };

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const signUpWithEmailAndPassword = () => {
    alert('Signed up with email and password');
    setIsLoggedIn(true);
    setIsSignUpModalOpen(false);
  };

  const signUpWithGoogle = () => {
    alert('Sign up with Google');
    setIsLoggedIn(true);
    setIsSignUpModalOpen(false);
  };

  const signUpWithGitHub = () => {
    alert('Sign up with GitHub');
    setIsLoggedIn(true);
    setIsSignUpModalOpen(false);
  };

  const loginWithEmailAndPassword = () => {
    alert('Logged in with email and password');
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`}
>
  <div className="container flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center">
      <img
        src="/public/assets/logo1.png" // Replace with the actual path to your logo image
        alt="EDUWAY Logo"
        className="h-16 w-16"
      />
      <span className="ml-2 text-2xl font-display font-bold bg-gradient-to-r from-[#0070C4] to-[#0070C4] bg-clip-text text-transparent">
        EDUWAY
      </span>
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-1">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={`#${link.name.toLowerCase().replace(' ', '-')}`}
          className={`nav-link ${index === 0 ? 'active' : ''}`}
        >
          {link.icon}
          <span>{link.name}</span>
        </a>
      ))}
      {!isLoggedIn ? (
        <div className="flex items-center space-x-4"> {/* Added space-x-4 */}
          <button
            onClick={handleSignUp}
            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <UserPlus size={20} />
          </button>
          <button
            onClick={handleLogin}
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <LogIn size={20} />
          </button>
        </div>
      ) : (
        <button onClick={toggleSidebar}>
          <User size={20} />
        </button>
      )}
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
        >
          Logout
        </button>
      )}
    </nav>

    {/* Mobile Menu Button */}
    <div className="flex md:hidden">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 rounded-full bg-primary-50 text-primary-600"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden bg-white shadow-lg"
    >
      <div className="container py-4 flex flex-col space-y-2">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={`#${link.name.toLowerCase().replace(' ', '-')}`}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-primary-600">{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
        {!isLoggedIn && (
          <div className="flex flex-col space-y-4"> {/* Added space-y-4 */}
            <button
              onClick={handleSignUp}
              className="flex items-center space-x-2 p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              <UserPlus size={20} />
              <span>Sign Up</span>
            </button>
            <button
              onClick={handleLogin}
              className="flex items-center space-x-2 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <LogIn size={20} />
              <span>Log In</span>
            </button>
          </div>
        )}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary-50"
          >
            Logout
          </button>
        )}
      </div>
    </motion.div>
  )}
</header>

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                onClick={signUpWithEmailAndPassword}
                className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Sign Up
              </button>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={signUpWithGoogle}
                  className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Sign Up with Google
                </button>
                <button
                  type="button"
                  onClick={signUpWithGitHub}
                  className="w-full p-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                >
                  Sign Up with GitHub
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsSignUpModalOpen(false)}
              className="mt-4 w-full p-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Log In</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                onClick={loginWithEmailAndPassword}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Log In
              </button>
            </form>
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="mt-4 w-full p-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;