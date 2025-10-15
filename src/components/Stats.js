// ================================
// 20. src/components/Stats.js
// ================================
export function StatCard({ icon, label, value, trend, trendLabel }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-amber-100 rounded-lg">
          {icon}
        </div>
        {trend && (
          <span className={`text-sm font-medium ${
            trend > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{label}</p>
      
      {trendLabel && (
        <p className="text-xs text-gray-500 mt-2">{trendLabel}</p>
      )}
    </div>
  );
}