import React from 'react';
import { Navigate } from 'react-router-dom';

function WithLoading(Component) {
  return function WithLoadingComponent({ isLoggedIn, navigateTo, ...props }) {
    if (isLoggedIn) return <Component {...props} />;
    return <Navigate to={navigateTo} />;
  };
}

export default WithLoading;
