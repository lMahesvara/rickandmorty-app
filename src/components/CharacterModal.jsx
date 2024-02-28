import { useEffect, useState } from "react"
import { getCharacterById } from "../services/api"
import { formatDate } from "../utils"
import CloseIcon from "./icons/Close"

const CharacterModal = ({ id, isOpen, handleOpenModal }) => {
  const [character, setCharacter] = useState(null)
  const { name, image, gender, species, origin, status, created } =
    character || {}

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterById(id)
      setCharacter(data)
    }
    if (isOpen) fetchData()
  }, [id, isOpen])

  if (!isOpen || character === null) return null

  return (
    isOpen && (
      <div className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%)] max-h-full flex bg-black/70 transition-all duration-300 ease-in-out">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative rounded-lg bg-zinc-900 p-5 flex flex-col md:flex-row gap-6">
            <button
              className="w-7 h-7 p-2 rounded-md bg-zinc-800 absolute top-2 right-2 inline-flex justify-center items-center hover:bg-zinc-700"
              onClick={handleOpenModal}
            >
              <CloseIcon />
            </button>
            <figure>
              <img
                className="w-full h-full md:max-w-xs rounded-lg object-cover"
                src={image}
                alt={name}
              />
            </figure>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">{name}</h2>
              <p className="text-lg mt-2">
                <span className="text-blue-400 mr-2 font-bold">Gender:</span>
                {gender}
              </p>
              <p className="text-lg">
                <span className="text-blue-400 mr-2 font-bold">Species:</span>
                {species}
              </p>
              <p className="text-lg">
                <span className="text-blue-400 mr-2 font-bold">Origin:</span>
                {origin.name}
              </p>
              <p className="text-lg">
                <span className="text-blue-400 mr-2 font-bold">Status:</span>
                {status}
              </p>
              <p className="text-lg">
                <span className="text-blue-400 mr-2 font-bold">Created:</span>
                {formatDate(created)}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
export default CharacterModal
