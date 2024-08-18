"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Mock login functionality
    setUsername('Martin');
    setIsLoggedIn(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Grow Up</h1>
      <p className="mt-4 text-lg text-gray-100 text-center">
        Level Up your life by completing daily tasks.
      </p>
      {isLoggedIn ? (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Welcome, {username}!</h2>
          <Link href="/dashboard">
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg">
              Go to Dashboard
            </button>
          </Link>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="mt-6 px-4 py-2 bg-white text-black rounded-lg"
        >
          Login
        </button>
      )}
    </main>
  );
}