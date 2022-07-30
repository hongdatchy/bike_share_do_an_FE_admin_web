import React from "react";
import PrivateRoute from './../PrivateRoute';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Station } from './Station';
import { User } from './User';
import { Contract } from './Contract';
import { Header } from './../header/Header';


export function MyRouter(props) {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {
          <Route element={<PrivateRoute checkToken={props.isLogin} />}>
            <Route exact path="" element={<Station />} />
            <Route exact path="/station" element={<Station />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/contract" element={<Contract />} />
          </Route>
        }
      </Routes>
    </div>

  );
}