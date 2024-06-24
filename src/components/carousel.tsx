import { useState } from 'react';
import "/src/styles/carousel.css";

const images = [
  "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
  "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
  "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
  "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
  "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
];

export default function Carousel() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCard = (image) => {
    setSelectedImage(image);
  };

  const closeCard = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="carousel carousel-center max-w-300 p-4 space-x-4 bg-background rounded-box">
        {images.map((image, index) => (
          <div className="carousel-item" key={index} onClick={() => openCard(image)}>
            <img src={image} className="rounded-box" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={selectedImage} alt="Selected" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Selected Image</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                  <button className="btn" onClick={closeCard}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}