import { useState } from "react"
import ListOfCharacters from "./components/ListOfCharacters"
import SearchBar from "./components/SearchBar"
import { useSearchCharacters } from "./hooks/useSearchCharacters"

function App() {
  const [query, setQuery] = useState("")
  const data = useSearchCharacters(query)

  const handleSearch = e => {
    setQuery(e.target.value)
  }
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-8">
      <h1 className="text-[#4cc7dd] text-4xl md:text-5xl font-bold text-center">
        Rick and Morty
      </h1>
      <SearchBar query={query} handleSearch={handleSearch} />
      <ListOfCharacters characters={data} />
    </main>
  )
}

export default App
