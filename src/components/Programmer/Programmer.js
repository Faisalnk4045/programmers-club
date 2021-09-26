import React from 'react';
import './Programmer.css'

const Programmer = (props) => {
    const { name, img, handle, rating, contribution, salary } = props.programmer;

    return (
        <div className="col">
            <div className="card h-100 p-3 shadow-sm">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">CF handle: {handle}</p>
                    <p className="card-text">Contest Rating: {rating}</p>
                    <p className="card-text">Contribution: {contribution}</p>
                    <p className="card-text">Salary: ${salary}</p>
                    <button onClick={() => props.handleHiring(props.programmer)} className="btn btn-success w-100"><i className="far fa-user"></i> Hire</button>
                </div>
            </div>
        </div>
    );
};

export default Programmer;