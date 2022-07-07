import React, { useState } from 'react';

const ReviewForm = () => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0)
    const [content, setContent] = useState('');
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleRatingChange = (e) => {
        const nextRating = Number(e.target.value);
        setRating(nextRating);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefult();
        console.log({
            title,
            rating,
            content,
        });
    };

    return (
        
            <div onSubmit={handleSubmit}>
                <input value={title} onChange={ handleTitleChange}></input>
                <input type='number' value={rating} onChange={handleRatingChange} />
                <textarea value={content} onChange={handleContentChange} />
                <button type='submit'>확인</button>
            </div>
    
    );
};

export default ReviewForm;