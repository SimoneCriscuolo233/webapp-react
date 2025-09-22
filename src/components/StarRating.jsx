import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const StarRating = ({ vote }) => {
  return [1, 2, 3, 4, 5].map((num, i) => {
    return (

      <i key={i} className={`fa-${i < vote ? "solid" : "regular"} fa-star text-warning`}></i>
    )
  })
}
export default StarRating