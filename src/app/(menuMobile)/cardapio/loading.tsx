export default function Loading() {
  return (
    <div>
      <div className="animate-pulse bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="border-b-1 justify-between px-3 bg-white items-center flex border-gray-200 py-3">
          <div className="h-10 w-10 bg-red-300 rounded-full"></div>
          <div className="flex flex-col items-end">
            <div className="h-4 w-32 bg-gray-300 rounded mb-1"></div>
            <div className="h-3 w-20 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Título Categorias */}
        <div className="px-4 py-4">
          <div className="h-6 w-24 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-64 bg-gray-300 rounded"></div>
        </div>

        {/* Categories Carousel */}
        <div className="px-4 py-2">
          <div className="flex space-x-4 overflow-x-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-24 text-center">
                <div className="w-20 h-20 bg-yellow-200 rounded-2xl mx-auto mb-2 flex items-center justify-center">
                  <div
                    className={`w-8 h-10 ${
                      i === 1 ? "bg-blue-300" : "bg-red-300"
                    } rounded`}
                  ></div>
                </div>
                <div className="h-3 w-16 bg-gray-300 rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção Energéticos */}
        <div className="px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-orange-300 rounded"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border bg-white shadow-sm p-4 flex flex-col items-center"
              >
                <div className="w-full h-32 bg-gray-300 rounded mb-3 flex items-center justify-center">
                  <div
                    className={`w-12 h-20 ${
                      i === 1 ? "bg-green-400" : "bg-blue-400"
                    } rounded`}
                  ></div>
                </div>
                <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                <div className="flex justify-between items-center w-full mt-2">
                  <div className="h-5 w-16 bg-gray-300 rounded"></div>
                  <div className="h-8 w-8 bg-orange-300 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
