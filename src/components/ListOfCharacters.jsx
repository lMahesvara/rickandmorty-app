import CharacterCard from "./CharacterCard"

const ListOfCharacters = ({ characters }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-4">
      {characters?.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  )
}
export default ListOfCharacters
