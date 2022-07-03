const UseEffectEx2str =  
`
import React, { useState, useEffect } from 'react';
import './UseEffectEx2.css';
const DOGS_API = 'https://dog.ceo/api/breeds/image/random/1';

export default function UseEffectEx2() {
  const [dogsImg, setDogsImg] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const GetDogs = async () => {
      const fetchDogs = await fetch(DOGS_API);
      const res = await fetchDogs.json();
      setDogsImg([...dogsImg, ...res.message]);
    };

    GetDogs();
  }, [number]);

  return (
    <div className="container">
      <button className="btn btn-success" onClick={() => setNumber(number + 1)}>
        Next Image
      </button>
      <div className="dogContainer">
        {dogsImg && (
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

`;

export {
  UseEffectEx2str
}