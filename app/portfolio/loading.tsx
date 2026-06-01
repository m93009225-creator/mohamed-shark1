export default function Loading() {
  return (
    <div className="min-h-screen p-10 pt-24 animate-pulse">
      <div className="h-10 w-1/3 bg-white/10 rounded mb-10"></div>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-64 bg-white/10 rounded-xl"
          ></div>
        ))}
      </div>
    </div>
  );
}