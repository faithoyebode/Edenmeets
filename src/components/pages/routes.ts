import {
  HOMEPAGE,
  SIGNUP,
  SIGNIN,
  FORGOT_PASSWORD
  } from './pagesPath';
import withSuspense from 'components/HOC/withSuspense';


 const routes = [
  {
    path: HOMEPAGE,
    component: withSuspense({ page: "unAuthPages/Home" }),
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
    path:   FORGOT_PASSWORD,
    component: withSuspense({ page: "unAuthPages/ForgotPassword" }),
    exact: true,
  }
];


export default routes;