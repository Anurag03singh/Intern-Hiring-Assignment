import React from 'react';
import { Home, Code2, Cloud, FileText, Settings, Phone, LogOut } from 'lucide-react';
import Logo from './Logo';

const menuItems = [
  { icon: Home, label: 'Repositories', active: true },
  { icon: Code2, label: 'AI Code Review' },
  { icon: Cloud, label: 'Cloud Security' },
  { icon: FileText, label: 'How to Use' },
  { icon: Settings, label: 'Settings' },
  { icon: Phone, label: 'Support' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col">
      <div className="p-6">
        <Logo />
        <nav className="mt-8 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                item.active
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-6 border-t">
        <button className="flex items-center gap-3 px-3 py-2 w-full text-gray-700 rounded-lg hover:bg-gray-50">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}