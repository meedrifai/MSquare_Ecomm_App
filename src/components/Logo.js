// ================================
// 10. src/components/Logo.js
// ================================
export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">M²</span>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
        MSQUARE
      </span>
    </div>
  );
}
