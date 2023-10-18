/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnErrorOccurred } from '@strapi/helper-plugin';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';

const App = () => {
  return (
    <div>{/*// @ts-ignore */}
      <Switch>{/*// @ts-ignore */}
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        {/*// @ts-ignore */}
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
