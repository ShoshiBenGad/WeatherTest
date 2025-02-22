import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCities, getCurrentWeather } from './weather.service';
import Header from './Header/header';
import CurrentWeather from './CurrentWeather/currentWeather';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TextField from '@mui/material/TextField';

export default function Weather(props) {
  const { userName } = props;

  const [cityTextSearch, setCityTextSearch] = useState('');
  const [city, setCity] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCityTextSearch('');
    setCity({});
    setCities([]);
  }, []);

  useEffect(() => {
    if (city.localizedName) setCityTextSearch(city.localizedName || '');
  }, [city]);

  const cityChoose = async (newCity) => {
    setCity(newCity);
    try {
      const response = await getCurrentWeather(newCity.key);
      if (response) setCurrentWeather(response.data);
    } catch {
      console.log(`error in getCurrentWeather`);
    }
  };

  const cityTextChange = async (cityText) => {
    setCity({});
    // if (cityTextSearch !== '' && cityText.includes(cityTextSearch)) {
    //   const newCities = cities.filter((c) =>
    //     c.localizedName.toLowerCase().includes(cityText)
    //   );
    //   setCities(newCities);
    // } else {
    try {
      const response = await getCities(cityText);
      if (response) setCities(response.data);
    } catch {
      console.log(`error in getCities`);
    }
    // }
    setCityTextSearch(cityText);
  };

  return (
    <React.Fragment>
      <Header city={city} userName={userName} />
      <Container>
        <Row>
          <Col md={8}>
            <TextField
              fullWidth
              value={cityTextSearch}
              label="search city"
              id="cities"
              variant="outlined"
              onChange={(event) => cityTextChange(event.target.value)}
            />
            <div className="citiesList">
              {!city.localizedName &&
                cities.map((city, index) => (
                  <div
                    onClick={() => cityChoose(city)}
                    className="city"
                    key={index}
                  >
                    <span>{`${city.localizedName} ${city.country.localizedName}`}</span>
                  </div>
                ))}
            </div>
          </Col>
          <Col md={4}>
            {city && city.localizedName && (
              <CurrentWeather city={city} currentWeather={currentWeather} />
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

Weather.propTypes = {
  userName: PropTypes.string
};
