import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm m-5 rounded overflow-hidden shadow-lg">
      <a href={image.largeImageURL}>
        <img src={image.webformatURL} alt="" className="w-full" /></a>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Image By {image.user}
        </div>
        <ul>
          <li>
            <strong>Views :</strong>
            {image.views}
          </li>
          <li>
            <strong>Download :</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes :</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (<span key={index} className="inline-block bg-gray-200 rounded-full px-3 mx-1 my-1 py-1 text-sm font-semibold text-gray-700 mr-2 ">
          #{tag}
        </span>
        ))}
      </div>
      <br></br>
    </div>
  )
}

export default ImageCard;
