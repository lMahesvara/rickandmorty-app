import { useState } from "react"
import { formatDate, statusStyles } from "../utils"
import CharacterModal from "./CharacterModal"

const CharacterCard = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <CharacterModal
        id={character.id}
        isOpen={isOpen}
        handleOpenModal={handleOpenModal}
      />
      <article
        className="rounded-lg overflow-hidden  border border-gray-700 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out transform flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <figure className="w-full flex flex-col ">
          <figcaption className="bg-zinc-900 text-white min-w-full text-xl text-center py-1 px-2 line-clamp-2">
            <strong>{character.name}</strong>
          </figcaption>
          <img className="w-full" src={character.image} alt={character.name} />
        </figure>
        <div
          className={`px-3 py-1 w-full border-b-4 flex flex-col ${
            statusStyles[character.status]
          } flex-1 justify-evenly `}
        >
          <p className="text-sm text-gray-300 text-center">
            {formatDate(character.created)}
          </p>
          <div className="flex justify-evenly align-middle font-medium">
            <p className="text-white">
              <em>{character.gender}</em>
            </p>
            <p className="capitalize">{character.status}</p>
          </div>
        </div>
      </article>
    </>
  )
}
export default CharacterCard
