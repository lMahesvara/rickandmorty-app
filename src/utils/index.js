export const statusStyles = {
  Alive: "border-green-700 text-green-500",
  Dead: "border-red-700 text-red-500",
  unknown: "border-gray-600 text-gray-400",
}

export const formatDate = date => {
  return new Date(date).toLocaleDateString(
    {},
    { day: "2-digit", month: "2-digit", year: "numeric" }
  )
}
