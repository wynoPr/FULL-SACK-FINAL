import React from 'react'

export default function SOSbutton() {
    const [isPressed, setIsPressed] = useState(false);
    const [pressTimeout, setPressTimeout] = useState(null);
    const history = useHistory();
    const pressDuration = 3000; // 3 segundos

  return (
    <button
      className='btt_danger h2 home_emergency'
    //   onMouseDown={handleMouseDown}
    //   onMouseUp={handleMouseUp}
    //   onMouseLeave={handleMouseUp}
    //   onTouchStart={handleMouseDown}
    //   onTouchEnd={handleMouseUp}
    //   onClick={handleClick}
    >
      S.O.S.
    </button>
  )
}
