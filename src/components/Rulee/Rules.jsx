import React from 'react';
import rulesData from '../rulesData';

const Rules = () => {
  return (
    <>
      <h2 className='text-bold text-orange-600 text-center text-5xl py-6'>Rules</h2>
      <hr className='bg-orange-600 mx-16' />
      <div className='flex bg-primary items-center text-center mt-5 h-auto border border-solid border-white rounded-lg shadow-2xl'>
        <ol className='text-white font-seoge list-decimal text-2xl my-5'>
          {rulesData.map((rule) => (
            <li key={rule.id} className='mb-2'>{rule.text}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Rules;
