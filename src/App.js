import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSeaarch from './components/ImageSeaarch';
import './index.css'
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [perpage, setPerpage] = useState(100);
  const [orientation, setOrientation] = useState("horizontal");


  const API = "22586535-6c5e61b25130c57b0272301cc";
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${API}&q=${term}&image_type=photo&per_page=${perpage}&orientation=${orientation}`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);

        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div>
      <h1 className="text-6xl text-center mx-auto mt-2">Image Finder</h1>
      <ImageSeaarch searchText={(text) => setTerm(text)} />

      <div className="container mx-auto w-full">
        <div className="m-5">
          {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">
            Loding...

          </h1> : <div className="grid space-x-1 lg:grid-cols-4 grid-gap-5 content-center">
            {images.map(image => (
              <ImageCard key={image.id} image={image} className="px-4 py-4 bg-white border-2 border-gray-400 rounded content-center" />

            ))}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
