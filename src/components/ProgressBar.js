// ================================
// 16. src/components/ProgressBar.js
// ================================
export function ProgressBar({
  value,
  max = 100,
  showLabel = true,
  color = "amber",
}) {
  const percentage = Math.min((value / max) * 100, 100);

  const colors = {
    amber: "bg-amber-600",
    green: "bg-green-600",
    blue: "bg-blue-600",
    red: "bg-red-600",
  };

  return (
    <div className="w-full">
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colors[color]} transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <p className="text-sm text-gray-600 mt-1 text-right">
          {value} / {max}
        </p>
      )}
    </div>
  );
}
