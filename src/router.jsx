import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "./Compontens/LayOut/Main";
import Home from "./Compontens/Home/Home";
import Login from "./Compontens/Auth/Login";
import Register from "./Compontens/Auth/Register";
import ApplyJob from "./Compontens/LayOut/ApplyJob";
import PrivateRoute from "./Compontens/Auth/PrivateRoute";
import JobDetails from "./Compontens/Pages/JobDetails";
import MyApplication from "./Compontens/LayOut/MyApplication";
import AddJob from "./Compontens/LayOut/AddJob";
import MyPostedJob from "./Compontens/Pages/MyPostedJob";
import ViewApplication from "./Compontens/LayOut/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>This is error page</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/applyjob/:id",
        element: (
          <PrivateRoute>
            <ApplyJob></ApplyJob>
          </PrivateRoute>
        ),
      },
      {
        path: "jobDetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "myApplication",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "addjob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path:'mypostedjob',
        element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
      },
      {
        path:"viewapplication/:job_id",
        element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>
      }

    ],
  },
]);

export default router;
