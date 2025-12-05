import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function GoogleLogin({ onSuccessGoogleAuth }) {

    const { t } = useTranslation();

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "348471396852-9kd5d3ucglav9t5217opj9co0kr3l4a5.apps.googleusercontent.com", 
      callback: handleCredentialResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline" }
    );
  }, []);

  const handleCredentialResponse = (response) => {
    onSuccessGoogleAuth(response.credential);
  };

  return (
    <>
      <button id="googleSignInDiv" className="bg-red-400 relative z-[10]">

      </button>
    </>
  );
}
