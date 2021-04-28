import React, {useContext} from 'react';
import Frauds from "../frauds/Frauds";
import AcceptDecline from "./AcceptDecline";
import {AuthContext} from "../../App";

const Authorized = props => {
  const {user} = useContext(AuthContext)

  return <>
    <Frauds/>
    {user.isAdmin && <AcceptDecline/>}
  </>
}

export default Authorized;
