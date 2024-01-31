import { useEffect } from "react";

const Colors = () => {
  useEffect(() => {
    const btnChangeBG = document.querySelector("btn__change__bg");

    const handleClick = () => {
      document.body.style.backgroundColor = "pink";
    };
    
    btnChangeBG.addEventListener("click", handleClick);

    return () => {
      btnChangeBG.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      <button className="btn__change__bg">Change background</button>
    </div>
  );
};

export default Colors;
