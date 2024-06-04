import './App.css';
import React, {useEffect, useState} from 'react'


function App() {
  const [testData, settestData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        settestData(data)
      }
    )
  }, [])

  return (
    <>
      {testData.test}
    </>
  );
}

export default App;
