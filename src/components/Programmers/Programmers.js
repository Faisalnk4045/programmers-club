import React, { useEffect, useState } from 'react';
import Hired from '../Hired/Hired';
import Programmer from '../Programmer/Programmer';

const Programmers = () => {
    const [programmers, setProgrammers] = useState([]);
    const [hiredCoders, setHiredCoders] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data));
    }, []);

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

    const reducer = (pre, cur) => {
        return pre + cur.salary;
    }
    const total = hiredCoders.reduce(reducer, 0);


    return (
        <div className='mt-4'>
            <div className='row'>
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
            </div>
        </div>
    );
};

export default Programmers;