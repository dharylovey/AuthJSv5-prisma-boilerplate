// pages/404.js
import React from 'react';

export default function Custom404() {
  return (
    <main
      className="flex items-center justify-center h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/404-background.jpg')", // Replace with your desired background image
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">{`Oops! The page you're looking for doesn't seem to exist.`}</p>
        <a href="/" className="text-blue-600 hover:underline">
          Go back home
        </a>
      </div>
    </main>
  );
}