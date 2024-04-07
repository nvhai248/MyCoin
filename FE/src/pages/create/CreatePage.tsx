import React, { useState, useEffect } from "react";
import CreateWalletCard from "../../components/create/Keystore";
import CreateMnemonicPhraseCard from "../../components/create/MnemonicPhrase";
import { useNavigate } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";

const CreatePage: React.FC = () => {
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
          <h1>CREATE NEW WALLET</h1>
        </div>

        <div>
          <CreateWalletCard />
          <CreateMnemonicPhraseCard />
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

export default CreatePage;
