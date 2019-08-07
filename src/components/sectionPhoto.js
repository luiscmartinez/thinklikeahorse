import React from "react"

const SectionImages = ({ photos }) => {
  return (
    <div>
      {photos.map(photo => {
        return (
          <img
            key={photo.id}
            src={photo.file.url}
            alt={photo.title}
            style={{ width: "100%" }}
          />
        )
      })}
    </div>
  )
}

export default SectionImages
