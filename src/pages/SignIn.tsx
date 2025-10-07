// src/pages/SignIn.tsx
import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { logInOutline } from "ionicons/icons";
import { useAuth0 } from "@auth0/auth0-react";
import "./SignIn.css";

const SignIn: React.FC = () => {
  const { loginWithRedirect, isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Sign In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Loading...</p>
        </IonContent>
      </IonPage>
    );
  }

  if (error) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Sign In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Error: {error.message}</p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton
          expand="block"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          <IonIcon slot="start" icon={logInOutline} />
          Sign In with Auth0
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
