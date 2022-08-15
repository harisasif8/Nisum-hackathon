import React from 'react';

const Email = ({ prevPage, nextPage, handleInputData, values }) => {
    return (
        <div>
            <input placeholder='name' type="text" name="email" value={values.email} id="" onChange={(event) => handleInputData(event)} />
            <button className='btn btn-dark' onClick={nextPage}>Next</button>
            <button className='btn btn-dark' onClick={prevPage}>Previous</button>
        </div>
    );
}

export default Email;
