import styled from 'styled-components';

export const Container = styled.main`
  h1 {
  text-align: center;
  margin-top: 20px;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Varela Round', sans-serif;
  }

  form {
    width: 800px;
    background: #e0e0e0;
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;

export const FormGroup = styled.div`
  background: #fff;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.125rem;

  #file::-webkit-file-upload-button {
    font-family: 'Varela Round', sans-serif;
    padding: 10px 30px;
    border-radius: 5px;
    outline: none;
    border: none;
    color: #fff;
    font-size: 16px;
    background: #651fff;
    cursor: pointer;
  }

  span.max-chars {
    display: block;
    font-size: 0.875rem;
    margin: 5px 0;
  }

  span {
    margin-right: 10px;
  }

  span.chars-repeat {
    display: block;
    font-size: 0.75rem;
    margin-bottom: 5px;
  }
`;

export const ButtonSubmit = styled.div`
  text-align: center;
  margin-bottom: 10px;

  button {
    width: 100%;
    padding: 10px;
    font-size: 1.125rem;
    text-transform: uppercase;
    outline: 0;
    border: 0;
    border-radius: 10px;
    background: #651fff;
    color: #fff;
    font-family: 'Varela Round', sans-serif;
    transition: all linear 0.2s;
  }

  button:hover {
    background-color: #7c4dff;
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #263238;
  bottom: 0px;
  left: 0px;
  color: #fff;

  span {
    position: relative;
    top: 5px;
    font-size: 20px;
    padding: 50px;
  }

  a {
    position: relative;
    top: 10px;
    font-size: 30px;
    color: #fff;
    margin-left: 80px;
    transition: 0.5s;
  }

  a:hover {
    color: #7c4dff;
    cursor: pointer;
  }
`;
