import React from "react";
import { IonContent, IonPage, IonButton } from "@ionic/react";

import "./Tab1.css";
import { useAuth0 } from "@auth0/auth0-react";

const Tab1: React.FC = () => {
  const url = "https://ionic-auth0-test.netlify.app/signin";
  // const url = "http://localhost:8100/signin";

  const { logout, user, isAuthenticated, isLoading } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {isAuthenticated && (
          <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        )}

        {/* Ionic Logout Button */}
        <div style={{ padding: "16px" }}>
          <IonButton
            expand="block"
            color="danger"
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: url,
                },
              })
            }
          >
            Log Out
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
