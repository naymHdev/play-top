const SearchResultsLoading = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3 p-2">
          <div className="h-14 w-14 rounded-md bg-gray-800 animate-pulse"></div>
          <div className="flex flex-col gap-2 flex-1">
            <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
            <div className="h-3 bg-gray-800 rounded w-1/2 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsLoading;
