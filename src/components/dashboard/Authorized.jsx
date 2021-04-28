import React, {useContext} from 'react';
import Frauds from "../frauds/Frauds";
import AcceptDecline from "./AcceptDecline";
import {AuthContext} from "../../App";
import BlockFrauds from "./BlockFrauds";

const Authorized = props => {
  const {user} = useContext(AuthContext)

  return <>
    <Frauds/>
    {user.isAdmin && <AcceptDecline/>}
    {user.isAdmin && <BlockFrauds/>}
  </>
}

export default Authorized;
