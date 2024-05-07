import axios from 'axios';
import { useState, useEffect } from 'react';
import Test1 from '../test/Test1';

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
        <Test1 />
        <div className="test2">
          <button>link2</button>
        </div>
        <div className="test3">
          <button>link3</button>
        </div>
      </>
    )
}

export default HomeLayout;