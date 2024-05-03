import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import { HomeLayout } from './layout/HomeLayout';

function App() {
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeLayout />}>

        </Route>
      </>
    )
  )

  return (
    <RouterProvider router = {routes} />
  );
}

export default App;
