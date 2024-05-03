import React, { useState } from 'react';
import App from './App';
// import axios from 'axios';

export const multiStepContext = React.createContext();
const StepContext = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    // const submitUserData = async () => {
    //     // e.preventDefault();
    //     const data = finalData
    //     console.log("data", data);
    //     try{
    //         await axios.post("/user/create", data)
    //         return true
    //     }catch(err){
    //         console.log(err);
    //         return err
    //     }
        
    // }
    const submitData = () =>{
        setFinalData(finalData => [...finalData, userData]);
        // const res = submitUserData();
        setUserData("");
        // if (res === true){
            // setCurrentStep(6);
        // }
    }

    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData, submitData}} >
                <App />
            </multiStepContext.Provider>
        </div>
    );
}

export default StepContext;