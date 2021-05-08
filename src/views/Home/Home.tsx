import React, { useEffect, useState } from 'react';
import {Animation} from '../Animation';
import './Home.css';
const Home = (props:any) => {

  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 3000)
  }, []);


  return (
    showAnimation ? <Animation /> : <> <div>
    <h3>Home View</h3>
    <p> This is the home view of SPA</p>
  </div></>
  )
};

export default Home;