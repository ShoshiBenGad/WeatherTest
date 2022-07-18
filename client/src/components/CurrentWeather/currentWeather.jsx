import React from 'react';
import PropTypes from 'prop-types';
import { getImageById } from './weatherImages';

export default function CurrentWeather(props) {
  const { city, currentWeather } = props;

  return (
    <div className="currentWeater">
      <span className="currentWeaterTitle">
        the weather of {`${city.localizedName} ${city.country.localizedName}`} :{' '}
      </span>
      <br />
      {currentWeather.weatherText && <span>{currentWeather.weatherText}</span>}
      <img src={getImageById(currentWeather.weatherIcon) || ''} />
      <br />
      <span>{`temperature : ${currentWeather.temperature?.metric?.value} ${currentWeather.temperature?.metric?.unit}`}</span>
    </div>
  );
}

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object,
  city: PropTypes.object
};
