const API_URL = process.env.REACT_APP_API_URL

export const getCharactersByName = async name => {
  try {
    const response = await fetch(`${API_URL}/character/?name=${name}`)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Error fetching characters", error)
    return []
  }
}

export const getCharacterById = async id => {
  console.log("API_URL", API_URL)
  try {
    const response = await fetch(`${API_URL}/character/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching character", error)
    return {}
  }
}
