import { useState } from "react";
import "./Display.css";
import defaultImage from "./default-image.jpg"; // Import your default image

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(""); // State to handle errors

  const getdata = async () => {
    try {
      const Otheraddress = document.querySelector(".address").value;
      let dataArray;

      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
      } else {
        dataArray = await contract.display(account);
      }

      if (dataArray && dataArray.length > 0) {
        const images = dataArray.map((item, i) => (
          <a href={item} key={i} target="_blank">
            <img src={""} alt="doucment" className="image-list" />
          </a>
        ));
        setData(images);
      } else {
        setError("No image to display");
      }
    } catch (e) {
      setError(e.message); // Handle errors and set the error state
    }
  };

  return (
    <>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="image-list">{data}</div>
      )}
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};

export default Display;
