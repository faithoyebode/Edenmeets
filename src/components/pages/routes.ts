import {
  HOMEPAGE,
  SIGNUP,
  SIGNIN 
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
  }
];


export default routes;