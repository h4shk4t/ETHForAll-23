import React from 'react';
import {IonPage} from '@ionic/react';
import metamask from '../assets/metamask.svg'
import { useHistory } from 'react-router';
const Onboarding: React.FC = () => {
    const history = useHistory();
    const enableEthereum = async () => {
        // @ts-ignore
            await ethereum.request({ method: 'eth_requestAccounts' });
            history.push("/dashboard")

        }
  return (
    <IonPage>
    <div className='onboarding'>
            <div>
                <div className="wallet2">
                <button className='metamask' onClick={enableEthereum}><img src={metamask} />Connect Metamask Wallet &gt;&gt;	</button>
                </div> 
            </div>
    </div>
    </IonPage>
  );
};

export default Onboarding;
