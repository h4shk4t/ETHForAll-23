import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import Home from './pages';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './pages/leftPane.css'
import Onboarding from './pages/onboarding';
/* Global CSS */
import './global.css';
import swap from './pages/swap';
import borrow from './pages/borrow';
import Deposite from './pages/deposite';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={Onboarding} exact={true} />
          <Route path="/dashboard"  component={Home} exact={true} />
          <Route path="/swap"  component={swap} exact={true} />
          <Route path="/borrow"  component={borrow} exact={true} />
          <Route path="/deposite"  component={Deposite} exact={true} />

        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
