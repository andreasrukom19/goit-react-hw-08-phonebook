import React, { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/auth/selectors';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="wrapper">
      <AppBar />
      <Suspense fallback={isLoading ? <Loader /> : ''}>
        <Outlet />
      </Suspense>
    </div>
  );
};
