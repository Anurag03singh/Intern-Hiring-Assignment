import React from 'react';
import { FileIcon, RefreshCw, Plus, Search } from 'lucide-react';

interface Repository {
  name: string;
  isPrivate: boolean;
  language: string;
  size: string;
  updatedAt: string;
}

const repositories: Repository[] = [
  { name: 'design-system', isPrivate: false, language: 'React', size: '7320 KB', updatedAt: '1 day ago' },
  { name: 'codeant-ci-app', isPrivate: true, language: 'Javascript', size: '5871 KB', updatedAt: '2 days ago' },
  { name: 'analytics-dashboard', isPrivate: true, language: 'Python', size: '4521 KB', updatedAt: '5 days ago' },
  { name: 'mobile-app', isPrivate: false, language: 'Swift', size: '3096 KB', updatedAt: '3 days ago' },
  { name: 'e-commerce-platform', isPrivate: true, language: 'Java', size: '6210 KB', updatedAt: '6 days ago' },
  { name: 'blog-website', isPrivate: false, language: 'HTML/CSS', size: '1876 KB', updatedAt: '4 days ago' },
  { name: 'social-network', isPrivate: true, language: 'PHP', size: '5432 KB', updatedAt: '7 days ago' },
];

export default function RepositoryList() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Repositories</h1>
          <p className="text-gray-600">33 total repositories</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh All</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Add Repository</span>
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <div key={repo.name} className="flex items-center justify-between p-4 border-b">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{repo.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${repo.isPrivate ? 'bg-gray-100 text-gray-700' : 'bg-blue-100 text-blue-700'}`}>
                  {repo.isPrivate ? 'Private' : 'Public'}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileIcon className="w-4 h-4" />
                  <span>{repo.size}</span>
                </div>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}