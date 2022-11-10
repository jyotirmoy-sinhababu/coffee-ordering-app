import React from 'react';
import coffee from '../../img/coffee.jpg';
import beans from '../../img/coffee-beans.jpg';
import './mainPage.css';

const MainPage = () => {
  return (
    <>
      <div className='main-cnt'>
        <div
          className='background-img'
          style={{ backgroundImage: `url(${beans})` }}
        >
          <h1 className='heading'>Order your coffee</h1>
          <button className='order-btn'>Oder</button>
        </div>
        <div>
          <img className='coffee-img' src={coffee} alt='coffee' />
        </div>
      </div>
    </>
  );
};

export default MainPage;
