import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Überprüfen, ob das modal-box Element existiert und das Klick-Ereignis außerhalb dieses Elements stattgefunden hat
      if (selectedImage && !document.querySelector('.modal-content').contains(event.target)) {
        closeCard();
      }
    };

    // Event-Listener hinzufügen, wenn die Komponente gemountet wird
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup-Funktion, um den Event-Listener zu entfernen, wenn die Komponente unmountet wird
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

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
          <div className="modal-content bg-background text-foreground">
            <div className="card card-side bg-background">
              <figure>
                <img
                  src={selectedImage} // Verwenden Sie hier selectedImage als Bildquelle
                  alt="Selected" />
              </figure>
              <div className="card-body">
                <h2 className="card-title no-wrap">Product</h2>
                <p className="text-m margin-bottom">Price: $</p>
                <p>ingredient 1, ingredient 2, ingredient 3, ...</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent btn-outline">Add to card</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}