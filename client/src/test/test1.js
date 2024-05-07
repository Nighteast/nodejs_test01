import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Test1() {
  const [testMessage1, setTestMessage1] = useState('');

  const fetchMessage = () => {
    if (testMessage1 !== '' && testMessage1 !== null) {
      setTestMessage1('');
      return;
    };

    axios.get('http://localhost:5000/test/message1')
      .then(response => {
        setTestMessage1(response.data.testMessage1);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  return (
    <div className="test1">
      <button onClick={fetchMessage}>link1</button>
      <div>{testMessage1}</div>
    </div>
  )
}
export default Test1;