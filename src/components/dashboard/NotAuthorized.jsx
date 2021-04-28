import React from 'react';
import styled from "styled-components";

const Styled = styled.div`
  height: calc(100vh - 110px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NotAuthorized = ({authorizationStatus}) => {
  return <Styled>
    <p>
      {authorizationStatus === 0
        ? 'Your account is awaiting admin approval'
        : 'Your account authorization request has ben declined'
      }
    </p>
  </Styled>
}

export default NotAuthorized;
