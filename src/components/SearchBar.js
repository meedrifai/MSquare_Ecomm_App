// ================================
// 7. src/components/SearchBar.js
// ================================
import { Search, X } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Rechercher...",
}) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      )}
    </div>
  );
}
