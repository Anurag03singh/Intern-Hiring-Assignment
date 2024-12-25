import React from 'react';
import { Github } from 'lucide-react';
import Logo from '../components/Logo';

const providers = [
  { icon: Github, name: 'Github' },
  { icon: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm12-6a6 6 0 100 12 6 6 0 000-12z"/>
    </svg>
  ), name: 'Bitbucket' },
  { icon: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.247 8.877zm9.363 3.563l7.37 5.393v3.472L0 15.263l2.247-2.967 7.116 2.967z"/>
    </svg>
  ), name: 'Azure Devops' },
  { icon: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.387 9.452.045 13.587a.924.924 0 00.331 1.023L12 23.054l11.624-8.443a.92.92 0 00.331-1.024"/>
    </svg>
  ), name: 'GitLab' },
];

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Logo />
          <h1 className="mt-6 text-3xl font-bold">Welcome to CodeAnt AI</h1>
        </div>

        <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
          <button className="flex-1 px-4 py-2 rounded-md bg-blue-600 text-white font-medium">
            SAAS
          </button>
          <button className="flex-1 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
            Self Hosted
          </button>
        </div>

        <div className="space-y-3">
          {providers.map((Provider) => (
            <button
              key={Provider.name}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border rounded-lg shadow-sm hover:bg-gray-50 font-medium"
            >
              <Provider.icon />
              <span>Sign in with {Provider.name}</span>
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600">
          By signing up you agree to the{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}