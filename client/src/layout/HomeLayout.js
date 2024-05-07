import axios from 'axios';
import { useState, useEffect } from 'react';

function HomeLayout() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios
          .get('http://localhost:5000/api/message')
          .then(response => {
            setMessage(response.data.message)
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }, []);
    
    return (
      <>
        <div className="App">
          <h1>Server says: {message || 'Loading...'}</h1>
        </div>
        <div className="test1">
          <a>link1</a>
        </div>
        <div className="test2">
          <a>link2</a>
        </div>
        <div className="test3">
          <a>link3</a>
        </div>
      </>
    )
}

export default HomeLayout;