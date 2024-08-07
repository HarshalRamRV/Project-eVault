import { useEffect, useState } from "react";
import "./Display.css";
import defaultImage from "./default-image.jpg";
import ImagePopup from "./ImagePopup"; // Import the ImagePopup component

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null); // State to manage selected image for popup

  const getData = async () => {
    if (!contract) {
      setError("Contract is not initialized");
      return;
    }

    setLoading(true);
    setError(""); 

    try {
      const Otheraddress = document.querySelector(".address")?.value || account;
      const dataArray = await contract.display(Otheraddress);

      if (dataArray && dataArray.length > 0) {
        const images = dataArray.map((item, i) => (
          <a key={i} onClick={() => setSelectedImage(item)}>
            <img
              src={item || defaultImage}
              alt="document"
              className="image-list"
              onError={(e) => e.target.src = defaultImage} 
            />
          </a>
        ));
        setData(images);
      } else {
        setError("No image to display");
      }
    } catch (e) {
      setError(`Error fetching data: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (contract && account) {
      getData();
    } else {
      setError("Contract or account not available");
    }
  }, [contract, account]);

  return (
    <>
      {loading && <div className="loading-spinner">Loading...</div>}
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="image-list">{data}</div>
      )}
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      />
      <button className="center button" onClick={getData}>
        Get Data
      </button>
      {selectedImage && (
        <ImagePopup 
          imageSrc={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  );
};

export default Display;
