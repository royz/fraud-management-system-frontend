import styled from 'styled-components'

const StyledAuth = styled.div`
  min-height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    color: #292937;
  }

  form {
    width: 600px;
    max-width: 95%;
    background: white;
    border-radius: 10px;
    padding: 40px 30px;
    box-shadow: 0 0 15px 5px rgb(0, 0, 0, 0.1);

    label {
      padding-left: 6px;
      color: #134170;
    }
  }

  .button {
    margin-top: 15px;
  }

  select,
  input[type="text"],
  input[type="date"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #96b1dd;
  }

  select {
    padding: 0;
    width: 100%;
    height: 56px;
    border-radius: 6px;
  }

  input[type="date"], select {
    margin-top: 0;
  }

  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .redirect-link {
    text-align: center;
    font-size: 0.8rem;

    a {
      text-decoration: none;
    }
  }

  .error {
    background: #f8dbcb;
    border-radius: 5px;
    padding: 3px 5px;
    font-size: 0.8rem;
    color: #555555;
  }
`

export default StyledAuth
