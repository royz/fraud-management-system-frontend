import React, {useContext} from 'react';
import {AuthContext} from "../../App";
import {Redirect} from "react-router-dom";
import Authorized from "./Authorized";
import NotAuthorized from "./NotAuthorized";

const Dashboard = props => {
  const {user} = useContext(AuthContext);

  if (!user?.loggedIn)
    return <Redirect to='/login'/>

  if (user.isAuthorized === 1)
    return <Authorized/>
  else
    return <NotAuthorized authorizationStatus={user.isAuthorized}/>
}

export default Dashboard;
