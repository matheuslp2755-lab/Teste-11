import React, { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase';
import Input from './ui/Input';
import Button from './ui/Button';
import Icon from './ui/Icon';

const Login: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  // Login states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoginFormValid, setIsLoginFormValid] = useState(false);

  // Register states
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterFormValid, setIsRegisterFormValid] = useState(false);

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail);
    setIsLoginFormValid(isEmailValid && loginPassword.trim() !== '');
  }, [loginEmail, loginPassword]);

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsRegisterFormValid(
      isEmailValid &&
      fullName.trim() !== '' &&
      username.trim() !== '' &&
      password.trim().length >= 6
    );
  }, [email, fullName, username, password]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoginFormValid) return;
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error: any) {
      console.error("Login failed:", error);
      alert(`Login failed: ${error.message}`);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRegisterFormValid) return;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error("Registration failed:", error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl px-4 py-8">
      <div className="hidden md:block md:w-1/2 pr-12">
        <div className="relative">
           <img src="https://picsum.photos/id/1015/600/800" alt="Phone with SocialSnap app" className="rounded-lg shadow-xl" />
        </div>
      </div>

      <div className="w-full max-w-sm md:w-1/2">
        <div className="bg-white border border-zinc-300 rounded-lg p-10 text-center">
          <div className="flex justify-center mb-6">
            <h1 className="text-4xl font-serif text-zinc-800 tracking-wider">SocialSnap</h1>
          </div>
          
          {isLoginView ? (
            <>
              <form onSubmit={handleLoginSubmit} className="space-y-3">
                <Input
                  id="loginEmail"
                  type="email"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  aria-label="Email"
                />
                <Input
                  id="loginPassword"
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  aria-label="Password"
                />
                <Button type="submit" disabled={!isLoginFormValid}>
                  Log In
                </Button>
              </form>

              <div className="flex items-center my-6">
                <div className="h-px bg-zinc-300 flex-grow"></div>
                <div className="px-4 text-sm font-semibold text-zinc-500">OR</div>
                <div className="h-px bg-zinc-300 flex-grow"></div>
              </div>

              <button className="flex items-center justify-center w-full text-sm font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors">
                <Icon name="facebook" className="w-5 h-5 mr-2" />
                <span>Log in with Facebook</span>
              </button>
              
              <a href="#" className="text-xs text-blue-900 hover:underline">
                Forgot password?
              </a>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-zinc-500 mb-4">
                Sign up to see photos and videos from your friends.
              </h2>
              <button className="flex items-center justify-center w-full text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-4 mb-4 transition-colors">
                <Icon name="facebook" className="w-5 h-5 mr-2 fill-white" />
                <span>Log in with Facebook</span>
              </button>

              <div className="flex items-center my-4">
                <div className="h-px bg-zinc-300 flex-grow"></div>
                <div className="px-4 text-sm font-semibold text-zinc-500">OR</div>
                <div className="h-px bg-zinc-300 flex-grow"></div>
              </div>

              <form onSubmit={handleRegisterSubmit} className="space-y-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email"
                />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  aria-label="Full Name"
                />
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-label="Username"
                />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="Password"
                />
                <p className="text-xs text-zinc-500 py-2">
                  People who use our service may have uploaded your contact information to SocialSnap. <a href="#" className="text-blue-900 hover:underline">Learn More</a>
                </p>
                <p className="text-xs text-zinc-500 pb-2">
                  By signing up, you agree to our <a href="#" className="text-blue-900 hover:underline">Terms</a> , <a href="#" className="text-blue-900 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-900 hover:underline">Cookies Policy</a>.
                </p>
                <Button type="submit" disabled={!isRegisterFormValid}>
                  Sign up
                </Button>
              </form>
            </>
          )}
        </div>
        
        <div className="bg-white border border-zinc-300 rounded-lg p-6 mt-4 text-center">
          <p className="text-sm text-zinc-800">
            {isLoginView ? "Don't have an account?" : "Have an account?"}{' '}
            <button onClick={toggleView} className="font-semibold text-blue-500 hover:underline focus:outline-none">
              {isLoginView ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-zinc-800">Get the app.</p>
          <div className="flex justify-center space-x-3 mt-4">
             <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Get it on Google Play" className="h-10 cursor-pointer" />
             <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="Get it from Microsoft" className="h-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;