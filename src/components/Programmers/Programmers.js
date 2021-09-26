import React, { useEffect, useState } from 'react';
import Hired from '../Hired/Hired';
import Programmer from '../Programmer/Programmer';

const Programmers = () => {
    // state for loading data
    const [programmers, setProgrammers] = useState([]);

    // state for tracing selected programmers
    const [hiredCoders, setHiredCoders] = useState([]);

    // hook for loading data from fakedata.JSON file
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, []);

    // event handler for hire button in the Programmer component
    const handleHiring = (programmer) => {
        const newCoder = [...hiredCoders];

        if (newCoder.length === 0) {
            newCoder.push(programmer);
            setHiredCoders(newCoder);
        }
        else {
            const hired = newCoder.find(coder => coder.id === programmer.id);
            if (hired) {
                // console.log('already hired');
            }
            else {
                newCoder.push(programmer);
                setHiredCoders(newCoder);
            }
        }
    }

    // calculate total cost for hiring
    const reducer = (pre, cur) => {
        return pre + cur.salary;
    }
    const total = hiredCoders.reduce(reducer, 0);


    return (
        <div className='mt-4'>
            <div className='row'>
                {/* start container for programmer  */}
                <div className='col-lg-9'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            programmers.map(programmer => <Programmer
                                key={programmer.id}
                                programmer={programmer}
                                handleHiring={handleHiring} 
                                />)
                        }
                    </div>
                </div>
                {/* end container for programmer */}

                {/* start container for hiring component */}
                <div className='col-lg-3'>
                    <div className='card p-2'>
                        <h5>Programmers added: <b>{hiredCoders.length}</b></h5>
                        <h5>Total: $ <b>{total}</b></h5>
                        {
                            hiredCoders.map(coder => <Hired 
                                key={coder.id} 
                                coder={coder} 
                                />)
                        }
                    </div>
                </div>
                {/* end container for hiring component */}
                
            </div>
        </div>
    );
};

export default Programmers;