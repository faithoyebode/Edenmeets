import {
  HOMEPAGE,
  ABOUT_US,
  SIGNUP,
  SIGNIN,
  FORGOT_PASSWORD,
  USERDASHBOARD_HOME
  } from './pagesPath';
import withSuspense from 'components/HOC/withSuspense';


 const routes = [
  {
    path: HOMEPAGE,
    component: withSuspense({ page: "unAuthPages/Home" }),
    exact: true,
  },
  {
    path: ABOUT_US,
    component: withSuspense({ page: "unAuthPages/AboutUs" }),
    exact: true,
  },
  {
    path: SIGNUP,
    component: withSuspense({ page: "unAuthPages/SignUp" }),
    exact: true,
  },
  {
    path: SIGNIN,
    component: withSuspense({ page: "unAuthPages/SignIn" }),
    exact: true,
  },
  {
    path:  FORGOT_PASSWORD,
    component: withSuspense({ page: "unAuthPages/ForgotPassword" }),
    exact: true,
  },
  {
    path:  USERDASHBOARD_HOME,
    component: withSuspense({ page: "authPages/UserDashboard" }),
    exact: true,
  }
];


export default routes;