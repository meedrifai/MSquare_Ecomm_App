// ================================
// 17. src/components/Skeleton.js
// ================================
export function Skeleton({ type = 'text', className = '' }) {
  const types = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    avatar: 'h-12 w-12 rounded-full',
    image: 'h-48 w-full',
    button: 'h-10 w-32',
    card: 'h-64 w-full'
  };

  return (
    <div className={`${types[type]} ${className} bg-gray-200 animate-pulse rounded`}></div>
  );
}

// Skeleton de carte produit
export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <Skeleton type="image" />
      <div className="p-6 space-y-3">
        <Skeleton type="title" />
        <Skeleton type="text" className="w-1/2" />
        <Skeleton type="button" className="w-full" />
      </div>
    </div>
  );
}