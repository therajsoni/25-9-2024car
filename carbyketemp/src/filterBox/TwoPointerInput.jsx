import React, { useEffect, useState } from 'react';
import Slider from 'react-slider';
import './Slider.css'; // Make sure you have this CSS file
import { useContext } from 'react';
import { BioContext } from '../context';



const TwoPointerInput = ({ handlePriceChange }) => {
  const [values, setValues] = useState([0, 1000000]);
  const {filters,setFilters} = useContext(BioContext);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
    handlePriceChange(newValues[0], newValues[1]); // Use handlePriceChange instead of onPriceChange
  };

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: [values[0], values[1]]  // Update the price range in the filters
    }));
  }, [values, setFilters]);  // Dependency array includes both values and setFilters

// Sync values state with the prop value
// useEffect(() => {
//     setValues(value);

//   }, [value]);

  // Optionally update the parent state whenever the local state changes
//   useEffect(() => {
//     setValue(values);
//   }, [values, setValue]);

  return (
    <div className="flex flex-row items-center w-full">
        {/* <span>${values[0]}</span> */}
      <Slider
        min={0}
        max={1000000}
        value={values}
        onChange={handleSliderChange}
        className="slider"
        renderTrack={(props, state) => <div {...props} className="track" />}
        renderThumb={(props, state) => <div {...props} className="thumb" />}
      />
        {/* <span>${values[1]}</span> */}
      {/* <div className="flex justify-between w-full mb-2">
      </div> */}
    </div>
  );
};

export default TwoPointerInput;
