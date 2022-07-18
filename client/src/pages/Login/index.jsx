import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
export default function Login(props) {
  const { userName, setUserName } = props;

  let navigate = useNavigate();

  const onLogIn = () => {
    userName !== '' ? navigate('/weather', { replace: true }) : '';
  };

  return (
    <div className="login">
      <Container>
        <TextField
          fullWidth
          value={userName}
          label="User Name"
          id="LogIn"
          variant="outlined"
          onChange={(event) => setUserName(event.target.value)}
          />
        <Button
          className="loginButtom"
          variant="contained"
          onClick={() => onLogIn()}
        >
          LogIn
        </Button>
      </Container>
    </div>
  );
}

Login.propTypes = {
  userName: PropTypes.string,
  setUserName: PropTypes.func
};
