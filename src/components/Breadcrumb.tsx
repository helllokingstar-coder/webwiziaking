import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
  lightMode?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  onNavigate,
  lightMode = false
}) => {
  return (
    <nav aria-label="Breadcrumb" className="inline-flex items-center text-xs sm:text-sm font-medium">
      <ol className="inline-flex items-center space-x-1 sm:space-x-2">
        <li className="inline-flex items-center">
          <button
            onClick={() => onNavigate('/')}
            className={`inline-flex items-center transition-colors ${
              lightMode ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            <Home className="w-3.5 h-3.5 mr-1.5" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className={`w-3.5 h-3.5 mx-1 ${lightMode ? 'text-blue-200/50' : 'text-slate-400'}`} />
              {isLast || !item.href ? (
                <span className={`font-semibold truncate max-w-[200px] sm:max-w-xs ${
                  lightMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.href && onNavigate(item.href)}
                  className={`transition-colors truncate max-w-[150px] sm:max-w-xs ${
                    lightMode ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
