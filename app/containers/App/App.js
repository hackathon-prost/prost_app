/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import VolunteersPage from '../VolunteersPage/VolunteersPage';
import ONGsPage from '../ONGsPage/ONGsPage';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Platform"
      defaultTitle="Platform"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="/ongs" component={ONGsPage} />
      <Route path="/volunteers" component={VolunteersPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
