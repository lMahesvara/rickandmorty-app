export const getCharactersByName = async name => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    )
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Error fetching characters", error)
    return []
  }
}

export const getCharacterById = async id => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching character", error)
    return {}
  }
}
