export default function Loading() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="bg-secondary h-14 w-14 rounded-md"></div>
      <div className="bg-secondary h-10 w-1/6 rounded"></div>
      <div className="bg-secondary h-8 w-1/2 rounded"></div>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="bg-secondary h-64 rounded-lg"></div>
          <div className="bg-secondary h-8 rounded"></div>
          <div className="bg-secondary h-8 rounded"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-secondary h-64 rounded-lg"></div>
          <div className="bg-secondary h-8 rounded"></div>
          <div className="bg-secondary h-8 rounded"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-secondary h-64 rounded-lg"></div>
          <div className="bg-secondary h-8 rounded"></div>
          <div className="bg-secondary h-8 rounded"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-secondary h-64 rounded-lg"></div>
          <div className="bg-secondary h-8 rounded"></div>
          <div className="bg-secondary h-8 rounded"></div>
        </div>
      </div>
    </div>
  );
}
