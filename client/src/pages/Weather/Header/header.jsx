import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import {
  getUserFavorites,
  addCityToFavorites
} from '../weather.service';

export default function Header(props) {
  const { city, userName } = props;

  const [favoritesCount, setFavoritesCount] = useState(0);

  const addFavorite = async (city) => {
    try {
      const response = await addCityToFavorites(userName, city.key);
      if (response) setFavoritesCount(response.data);
    } catch {
      console.log(`error`);
    }
  };

  const initFavoriteCount = async () => {
    try {
      const response = await getUserFavorites(userName);
      if (response) setFavoritesCount(response.data);
    } catch {
      console.log(`error`);
    }
  };

  useEffect(() => {
    initFavoriteCount();
  }, []);

  return (
    <div className="header">
      <div className="userName">
        <span>Hi , {userName}</span>
      </div>
      <div>
        {city.localizedName && city.localizedName !== '' && (
          <Button
            className="favoritesButtom"
            variant="contained"
            onClick={() => addFavorite(city)}
          >
            Add {city.localizedName} to my favorites!
          </Button>
        )}
        <span>My favorites count : {favoritesCount}</span>
      </div>
    </div>
  );
}

Header.propTypes = {
  city: PropTypes.object,
  userName: PropTypes.string
};
