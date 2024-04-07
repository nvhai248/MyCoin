import React, { useState, useEffect } from "react";
import AccessKeystoreCard from "../../components/access/Keystore";
import AccessMnemonicPhraseCard from "../../components/access/MnemonicPhrase";
import AccessPrivateKeyCard from "../../components/access/PrivateKey";
import { useNavigate } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";

const AccessPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true to trigger slide animation on mount
    setMounted(true);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <ReturnButton navigate={navigate} />
      <div className={`container ${mounted ? "slide-down" : "slide-up"}`}>
        <div>
          <h1>ACCESS MY WALLET</h1>
        </div>

        <div>
          <AccessKeystoreCard />
          <AccessMnemonicPhraseCard />
          <AccessPrivateKeyCard />
        </div>
      </div>
    </>
  );
};

const ReturnButton: React.FC<{ navigate: any }> = ({ navigate }) => (
  <button className="returnLanding">
    <RiCloseCircleLine
      size={50}
      onClick={() => {
        navigate("/");
      }}
    />
  </button>
);

export default AccessPage;
