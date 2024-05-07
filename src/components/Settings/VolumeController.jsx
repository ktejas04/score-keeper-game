import React, { useState } from 'react';

const VolumeController = () => {
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="volume-controller">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default VolumeController;