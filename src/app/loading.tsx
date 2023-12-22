export default function Loading() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="bg-secondary h-14 w-14 rounded-md"></div>
      <div className="bg-secondary h-10 w-1/6 rounded"></div>
      <div className="bg-secondary h-40 w-full rounded"></div>

      <div className="bg-secondary mt-12 h-10 w-1/2 rounded"></div>
      <div className="mt-3 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="bg-secondary h-24 w-full rounded"></div>
        <div className="bg-secondary h-24 w-full rounded"></div>
        <div className="bg-secondary h-24 w-full rounded"></div>
        <div className="bg-secondary h-24 w-full rounded"></div>
      </div>
    </div>
  );
}
