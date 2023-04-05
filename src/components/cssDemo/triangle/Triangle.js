import React from 'react';

const Triangle = ({ type = "top", size, color = "#ca9292" }) => {
    let triangle_type = type ? `border${type.charAt(0).toUpperCase()}${type.slice(1)}` : "borderTop";

    return (
        <div className='triangle_div' style={{ border: `${size}px solid transparent`, [triangle_type]: `${size}px solid ${color}` }}>

        </div>
    );
};

export default Triangle;
