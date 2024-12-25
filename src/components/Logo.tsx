import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M15 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="currentColor"/>
      </svg>
      <span className="text-xl font-bold">CodeAnt AI</span>
    </div>
  );
}