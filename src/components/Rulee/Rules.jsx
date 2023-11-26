import React from 'react';
import rulesData from '../rulesData';

const Rules = () => {
  return (
    <>
      <h2 className='text-bold text-orange-600 text-center text-5xl py-6'>Rules</h2>
      <hr className='bg-orange-600 mx-16' />
      <div className='flex items-center text-center mx-12  p-8 mt-5  border border-solid border-white rounded-lg shadow-2xl'>
        <ol className='text-white  font-seoge text-xl mx-auto my-auto h-auto'>
          {rulesData.map((rule) => (
            <li key={rule.id} className='pr-0'>{rule.text}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Rules;
