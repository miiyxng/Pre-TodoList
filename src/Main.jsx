import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Rating from './Rating';

const Main = () => {
    return (
        <div>
           <ReviewList></ReviewList>
           <ReviewForm>
           </ReviewForm>
           <Rating />
        </div>
    );
};

export default Main;