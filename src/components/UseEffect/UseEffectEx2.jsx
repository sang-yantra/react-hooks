import React, { useState, useEffect } from 'react';
import Loader from '../Loader.jsx';
import './UseEffectEx2.css';
const DOGS_API = 'https://dog.ceo/api/breeds/image/random/1';

export default function UseEffectEx2() {
  const [dogsImg, setDogsImg] = useState([]);
  const [number, setNumber] = useState(0);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const GetDogs = async () => {
      const fetchDogs = await fetch(DOGS_API);
      const res = await fetchDogs.json();
      setDogsImg([...dogsImg, ...res.message]);
      setLoader(false);
    };

    GetDogs();
  }, [number]);

  function handleNextImg() {
    setNumber(number + 1);
    setLoader(true);
  }

  return (
    <div className="container">
      <button className="btn btn-success" onClick={() => handleNextImg()}>
        Next Image
      </button>

      <div className="dogContainer">
        {loader ? (
          <Loader />
        ) : (
          <img
            className="dogImg"
            src={dogsImg[dogsImg.length - 1]}
            alt="dogimg"
          />
        )}
      </div>
    </div>
  );
}
