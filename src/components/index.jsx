import React from 'react';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';

const index = () => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 mr-4">
        <AddProduct />
      </div>
      <div className="w-1/2 ml-4">
        <SignUpUser />
      </div>
    </div>
  );
};

export default index;