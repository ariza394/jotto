import React from 'react';


const Congrats = (props) => {

    return(
        <>
            {(props.success) ?
                <div data-test='component-congrats' className='alert alert-success'>
                    <span data-test='congrats-message'>Congratulation</span>
                </div>
            :
                <div data-test='component-congrats' />
            }

        </>
        
    )
}

export default Congrats;