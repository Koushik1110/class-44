import { useEffect, useRef } from "react";

const ColorsEnhanced = () => {
    const btnChangeBGRef = useRef(null);

    useEffect(() =>{
      const btnEl= btnChangeBGRef.current;
      const handleClick= ()=>{
        document.body.style.backgroundColor = 'cyan'
      }

      btnEl.addEventListener('click', handleClick)
    }, [])

  return(
    <div>
      <button ref={btnChangeBGRef}>Change BG</button>
    </div>
  )
};

export default ColorsEnhanced;
