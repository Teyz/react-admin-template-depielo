import { React, useEffect, useState } from 'react';
import './AppView.css';

// ----------------------------------------------------------------------

export default function AppView() {
  const [totalSubs, setTotalSubs] = useState(0);
  const [levels, setLevels] = useState('0');
  const [step, setStep] = useState(0);
  useEffect(() => {
    getAllLevels();
    const sse = new EventSource('http://localhost:4000/total/subs');

    function getRealtimeData(data) {
      setTotalSubs(data);
    }

    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data));
  }, []);

  const getAllLevels = () => {
    fetch('http://localhost:4000/levels')
      .then((data) => data.json())
      .then((data) => {
        setLevels(Object.values(data));
      });
  };

  const getCurrentSubsStepMessage = () => (
    <div className="view-sub-objectif">{levels[step].message}</div>
  );

  const getCurrentSubsStepLevel = () => (
    <div className="view-sub-objectif">{levels[step].level}</div>
  );

  return (
    <div className="view-root">
      <div className="view-main">
        <div className="view-sub-content">
          {getCurrentSubsStepLevel()}
          <div className="view-sub-current">{totalSubs} SUB</div>
          <div className="view-sub-title">
            {getCurrentSubsStepMessage()}
            <div>DÉFI SUB GOAL</div>
          </div>
        </div>
        <a href="https://id.twitch.tv/oauth2/authorize?client_id=fjy90hse8krg82q08klc5bloev2k53&redirect_uri=http://localhost:3000/success&response_type=code&scope=channel:read:subscriptions">
          Login
        </a>
      </div>
      <div className="view-progress" style={{ width: `${totalSubs}%` }} />
    </div>
  );
}
