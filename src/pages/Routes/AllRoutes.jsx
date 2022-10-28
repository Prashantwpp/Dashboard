import {Routes,Route} from 'react-router-dom';
import React from 'react';
import { SignIn } from '../Login/SignIn';
import { HomePage } from '../Homepage/HomePage';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    </div>
  )
}
