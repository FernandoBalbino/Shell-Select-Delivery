export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Header */}
      <div className="border-b-1 justify-between px-3 bg-white items-center flex border-[#f7f7f7] py-3">
        <div className="h-10 w-10 bg-gray-300 rounded"></div>
        <div className="flex flex-col items-end">
          <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
          <div className="h-3 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full h-40 bg-gray-300 rounded mb-7"></div>

      {/* Texto de destaque */}
      <div className="flex-col items-center bg-white rounded-lg m-3 p-3">
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      </div>

      {/* Seção Populares */}
      <div className="px-4 py-6">
        <div className="h-6 w-28 bg-gray-300 rounded mb-4"></div>
        <div className="flex space-x-4 overflow-x-auto">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-60 rounded-lg border bg-white shadow-sm p-4 flex flex-col items-center"
            >
              <div className="w-[150px] h-[150px] bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded mb-3"></div>
              <div className="flex justify-between items-center w-full mt-auto">
                <div className="h-5 w-16 bg-gray-300 rounded"></div>
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Bebidas Populares */}
      <div className="px-4 py-6">
        <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>
        <div className="flex space-x-4 overflow-x-auto">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-60 rounded-lg border bg-white shadow-sm p-4 flex flex-col items-center"
            >
              <div className="w-[150px] h-[150px] bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded mb-3"></div>
              <div className="flex justify-between items-center w-full mt-auto">
                <div className="h-5 w-16 bg-gray-300 rounded"></div>
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
