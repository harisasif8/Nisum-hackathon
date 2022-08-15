import React from 'react';

const Name = ({ nextPage, handleInputData, values }) => {
    return (
        <div>
            <input placeholder='name' type="text" name="name" value={values.name} id="" onChange={(event) => handleInputData(event)} />
            <button className='btn btn-dark' onClick={nextPage}>Next</button>
        </div>
    );
}

export default Name;
