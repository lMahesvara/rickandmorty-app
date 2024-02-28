const SearchBar = ({ query, handleSearch }) => {
  return (
    <input
      type="search"
      placeholder="Search characters by name..."
      value={query}
      onChange={handleSearch}
      className="bg-zinc-800 mx-auto px-4 py-2 rounded-lg focus:outline-none w-full max-w-xs"
    />
  )
}
export default SearchBar
