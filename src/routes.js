import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CvPage from './components/cv/CvPage';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute componet={HomePage}/>
    <Route path="cv" component={CvPage}/>
  </Route>
);
