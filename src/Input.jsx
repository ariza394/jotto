import React,{useState} from 'react';

const Input = ({success, secredWord}) => {

    const [currentGuess,setCurrentGuess] = useState("");

    return ( 
        <>
        
            {success?
                <div />
                :
                <div data-test='component-input'>
                    <form action="" className='form-inline'>
                        <input 
                            type="text" 
                            data-test='input-box' 
                            className='mb-2 mx-sm-3' 
                            placeholder='enter guess'
                            value={currentGuess}
                            onChange={(e) => setCurrentGuess(e.target.value)}
                        />
                        <button 
                            data-test='submit-button' 
                            className='btn btn-primary mb-2'
                            onClick={(e) =>{
                                e.preventDefault();
                                setCurrentGuess("");
                            }}
                            >submit</button>
                    </form>
                </div>
            }
        </>       
     );
}
 
export default Input;