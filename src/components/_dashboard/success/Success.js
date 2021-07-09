import { React, useEffect } from 'react';
// ----------------------------------------------------------------------

export default function Success() {
  const setAccessToken = async (token) => {
    await fetch('http://localhost:4000/oauth/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: token })
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    setAccessToken(code);
  }, []);

  return (
    <div className="success-root">
      <p>Success</p>
    </div>
  );
}
