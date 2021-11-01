import { useState, useEffect } from 'react';

function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
      <div className="datetime">

<div className= "date">
{date.toLocaleDateString()}
    </div>
    <div className= "time">
      {date.toLocaleTimeString()}
    </div>
    </div>
  );
}
export default Clock;