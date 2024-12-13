import React, { useEffect, useState } from 'react';

// TimeDisplay Component - Only this part will re-render every second
export const TimeDisplay = React.memo(() => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className="text-right">
      <p className="text-lg font-semibold text-primary">{currentTime.toLocaleTimeString()}</p>
      <p className="text-sm text-secondary-100">
        {currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </div>
  );
});