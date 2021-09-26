import React from 'react';
import './Programmer.css'

const Programmer = (props) => {
    
    // destructuring the property of props.programmer
    const { name, img, handle, rating, contribution, salary } = props.programmer;

    return (
        <div className="col">
            <div className="card h-100 p-3 shadow-sm">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title mb-4">{name}</h5>
                    <h6 className="card-text"><b>CF handle:</b> <span className='text-danger'>{handle}</span></h6>
                    <h6 className="card-text"><b>Contest Rating:</b> <span className='text-danger'>{rating}</span></h6>
                    <h6 className="card-text"><b>Contribution:</b> <span className='text-success'>{contribution}</span></h6>
                    <p className="card-text"><b>Salary:</b> ${salary}</p>
                    <button onClick={() => props.handleHiring(props.programmer)} className="btn success w-100"><i className="far fa-user"></i> Hire</button>
                </div>
            </div>
        </div>
    );
};

export default Programmer;