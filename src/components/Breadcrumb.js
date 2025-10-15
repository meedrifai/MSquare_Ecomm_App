// ================================
// 18. src/components/Breadcrumb.js
// ================================
import { ChevronRight, Home } from "lucide-react";
import Link from 'next/link';

export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link
        href="/"
        className="text-gray-600 hover:text-amber-600 transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <a
              href={item.href}
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
