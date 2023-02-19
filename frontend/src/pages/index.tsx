import React from 'react';
import {IonPage} from '@ionic/react';
import LeftPane from '../components/leftPane';
import Dashboard from '../components/dashboard';
const Home: React.FC = () => {
  // var data=[
  //   {
  //     "id":'1',
  //     "ethval":10,
  //     "usdval":100
  //   },
  //   {
  //     "id":'2',
  //     "ethval":20,
  //     "usdval":200
  //   },
  //   {
  //     "id":'3',
  //     "ethval":30,
  //     "usdval":300
  //   },
  // ]
  return (
    <IonPage>
    <div className='structure'>
      <div className="leftPane">
        <LeftPane />
      </div>
      <div className="rightPane"> 
        <Dashboard/>
      </div>
    </div>
    </IonPage>
  );
};

export default Home;
