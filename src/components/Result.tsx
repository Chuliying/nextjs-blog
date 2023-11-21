import React from "react";

const Result = () => {
  return (
    <div className='main__container result__container'>
      <div className='center__box'>
        <h1 className='main__title'>我們的成果</h1>
        <p className='!text-center'>
          天使的目標是推廣志工服務，鼓勵人人參與，透過志願
        </p>
      </div>
      <div className='grid grid-cols-4 gap-10 text-center'>
        <div>
          <h3>志工人數</h3>
          <h1>400人</h1>
        </div>
        <div>
          <h3>服務時數</h3>
          <h1>20小時</h1>
        </div>
        <div>
          <h3>捐款金額</h3>
          <h1>4000元</h1>
        </div>
        <div>
          <h3>活動場次</h3>
          <h1>68場</h1>
        </div>
      </div>
    </div>
  );
};

export default Result;
