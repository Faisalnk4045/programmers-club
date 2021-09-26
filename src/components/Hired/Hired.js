import React from 'react';

const Hired = (props) => {
    const { name } = props.coder;

    return (
        <div className='d-flex flex-row justify-content-between card mt-1 p-2 pe-3 shadow-sm'>
            <h6>{name}</h6>
            <div>
                <i className="fas fa-times text-danger"></i>
            </div>
        </div>
    );
};

export default Hired;