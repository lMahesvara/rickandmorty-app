import { useEffect, useState } from "react"
import { useDebounce } from "./useDebounce"
import { getCharactersByName } from "../services/api"

export function useSearchCharacters(query) {
  const debouncedQuery = useDebounce(query, 500)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharactersByName(debouncedQuery)
      setData(data)
    }
    fetchData()
  }, [debouncedQuery])

  return data
}
