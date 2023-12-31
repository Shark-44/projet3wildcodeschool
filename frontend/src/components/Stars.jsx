import { useState } from "react"
import { Rating } from "react-simple-star-rating"

const Stars = () => {
  const [rating, setRating] = useState(100) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    console.info(rate)
  }

  return (
    <Rating
      // fillColor="#BADA55"
      // allowHalfIcon
      tooltipArray={["nul", "bof", "moyen", "top", "génial"]}
      transition
      showTooltip
      onClick={handleRating}
      ratingValue={rating} /* Available Props */
    />
  )
}
export default Stars
