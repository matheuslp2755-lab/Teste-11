import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import Button from './ui/Button';

const Feed: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out: ', error);
      alert('Failed to sign out.');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to SocialSnap!</h1>
        <p className="text-zinc-600 mb-6">This is your feed. Content will appear here soon.</p>
        <Button onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Feed;
