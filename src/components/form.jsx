import React, { useContext, useState } from "react";
import "./form.css";


import GenForm from "../components/GenForm/GenForm";
import EdForm from "../components/EdForm/EdForm";
import AspiForm from "../components/AspiForm/AspiForm";

import { multiStepContext } from "../StepContext";

import ThankYou from "./ThankYou/ThankYou";
import axios from "../axios";



function Form() {

    const { currentStep, userData, setCurrentStep } = useContext(multiStepContext);
    const [clicked, setClicked] = useState(false)
    
    console.log("userdata: ", userData);
    const handleClick = () =>{
        setClicked(true)
    }
    const submitUserData = async (e) => {
        // e.preventDefault();
        handleClick();
        e.currentTarget.disabled = true;
        const data = userData
        // console.log("data: ", data);
        try {
            
            await axios.post("/user/createtradeuser", data)
            
            setCurrentStep(4)
        } catch (err) {
            console.log(err);
        }

    }
    const showStep = (step) => {
        switch (step) {
            case 1:
                return <GenForm />
            case 2:
                return <EdForm />
            case 3:
                return <AspiForm />
            case 4:
                return <ThankYou />
            default:
                return ""
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentStep(i => {
            if (i >= 3) return i;
            return i + 1
        })
    }
    const logo = require("./Decent Arcadia type 4.jpg");

    return (
        <div className={currentStep === 4 ? "TyContainer" : "container"}>

            <div className="header">
                {
                    currentStep === 1 || 4
                        ?
                        <>
                            <img className="logo" src={logo} alt="logo" />

                            <div>
                                <h4>J&K Skill Development Mission</h4>
                                <p className="second">Questionnaire for Trade Bodies</p>
                            </div>
                        </>

                        :
                        <h1>
                            <span className="de">DeCent</span><span className="ar">ArCadia </span>
                        </h1>
                }



            </div>
            <div className={currentStep === 4 ? "TyWrapper" : "wrapper"}>
                <div className="detailHeading">
                    {
                        currentStep === 1
                            ?
                            <h3>
                                General Details :
                            </h3>
                            : ""
                    }
                    {
                        currentStep === 2
                            ?
                            <h3>
                                Trade Details :
                            </h3>
                            : ""
                    }
                    {
                        currentStep === 3
                            ? <h3>
                                Trade Aspirations :
                            </h3>
                            : ""
                    }
                    {
                        currentStep === 4
                            ? ""
                            : <h4>
                                {currentStep} / 3
                            </h4>
                    }


                </div>


                <form onSubmit={handleSubmit}>
                    <div className="pdfContainer" id="pdf-content">
                        <div className="mainDetails">

                            {
                                showStep(currentStep)
                            }
                        </div>
                    </div>



                    <div className="btns">
                        {
                            currentStep === 4
                                ? ""
                                :
                                <>
                                    {
                                        currentStep !== 1
                                            ?
                                            <button type="button" onClick={() => setCurrentStep(i => { if (i <= 0) return i; return i - 1 })}>Back</button>
                                            : ""
                                    }
                                    {
                                        currentStep === 3
                                            ?
                                            <button type="submit" disabled={clicked} className="finishBtn" onClick={submitUserData}>Finish</button>

                                            :
                                            <button type="submit">Next</button>
                                    }
                                </>
                        }


                    </div>


                </form>


            </div>

        </div>
    )
}

export default Form;