import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import talonLogo from './assets/talon.png'
import { createClient } from '@supabase/supabase-js'

import './App.css'


const supabase = createClient("https://dbqngripexpmrgndvwpv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRicW5ncmlwZXhwbXJnbmR2d3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3ODM4NTMsImV4cCI6MjAyNTM1OTg1M30.zDim1uDYoEeT5jmwFCWUewYX77c9PO3UXine1m5ixLg");

function App() {
  const [count, setCount] = useState(0);

  const [test, setTest] = useState(["start"]);

  useEffect(() => {
    tryTest();
    console.log(test);
  }, []);

  async function tryTest() {
    console.log(test);
    const { data, error } = await supabase.rpc('try_test').eq("registry_id", 1);
    console.log(data);
    console.log(error);
    setTest(data);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/users/westoncadena/projects/1" target="_blank">
          <img src={talonLogo} className="logo talon" alt="Talon logo" />
        </a>
      </div>
      <h1>Vite + React + TALON</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> 
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
