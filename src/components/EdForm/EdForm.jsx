import React, { useContext } from 'react';
import "../form.css"
import { multiStepContext } from '../../StepContext';

function EdForm() {
    const { userData, setUserData } = useContext(multiStepContext);
    const questions = [
        { 
            id: 1, 
            label: "Which industry sector does your organization primarily operate in?", 
            name: "industySector", 
            options: ["Manufacturing", "Retail", "Technology", "Healthcare", "Other (please specify)"] 
        },
        { 
            id: 2, 
            label: "How would you rate the current regulatory environment for your industry?", 
            name: "regulatoryEnvironment", 
            options: ["Very favorable", "Favorable", "Neutral", "Unfavorable", "Very unfavorable"] 
        },
        { 
            id: 3, 
            label: "Have recent trade policies positively impacted your organization's operations?", 
            name: "tradePoliciesImpact", 
            options: ["Yes", "No", "Unsure"] 
        },
        { 
            id: 4, 
            label: "How satisfied are you with the level of government support provided to your industry?", 
            name: "governmentSupportSatisfaction", 
            options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"] 
        },
        { 
            id: 5, 
            label: "To what extent do you utilize digital technologies for enhancing trade processes?", 
            name: "digitalTechnologyUtilization", 
            options: ["Extensively", "Moderately", "Minimally", "Not at all"] 
        },
        { 
            id: 6, 
            label: "How confident are you in the future growth prospects of your industry?", 
            name: "futureGrowthConfidence", 
            options: ["Very confident", "Confident", "Neutral", "Not very confident", "Not confident at all"] 
        },
        { 
            id: 7, 
            label: "What are the primary barriers hindering trade expansion for your organization?", 
            name: "tradeExpansionBarriers", 
            options: ["Tariffs and trade barriers", "Regulatory constraints", "Lack of skilled workforce", "Infrastructure limitations", "Other (please specify)"] 
        },
        { 
            id: 8, 
            label: "How effective is your current networking within the industry for business growth?", 
            name: "networkingEffectiveness", 
            options: ["Highly effective", "Somewhat effective", "Not very effective", "Ineffective"] 
        },
        { 
            id: 9, 
            label: "Do you believe that collaboration with other trade bodies is beneficial for addressing common industry challenges?", 
            name: "collaborationBenefit", 
            options: ["Strongly agree", "Agree", "Neutral", "Disagree", "Strongly disagree"] 
        },
        { 
            id: 10, 
            label: "What are the primary skill gaps or shortages faced by your organization's workforce?", 
            name: "skillGaps", 
            options: ["Technical skills", "Soft skills (communication, teamwork, etc.)", "Leadership skills", "Other (please specify)"] 
        },
        { 
            id: 11, 
            label: "How do you currently address skill gaps within your workforce?", 
            name: "skillGapSolutions", 
            options: ["Internal training programs", "External training partnerships", "Hiring skilled workers externally", "Other (please specify)"] 
        },
        { 
            id: 12, 
            label: "Have you faced challenges in recruiting skilled labor in the past year?", 
            name: "skilledLaborChallenges", 
            options: ["Yes", "No", "Unsure"] 
        },
        { 
            id: 13, 
            label: "How does the availability of skilled labor in your region impact your organization's growth potential?", 
            name: "skilledLaborImpact", 
            options: ["Positively", "Negatively", "No significant impact", "Unsure"] 
        },
        { 
            id: 14, 
            label: "What factors influence your organization's decision to hire foreign workers/ workforce from outside J&K?", 
            name: "foreignWorkerFactors", 
            options: ["Specific skill requirements not met locally", "Cost considerations", "Diversity and cultural perspectives", "Regulatory requirements", "Other (please specify)"] 
        },
        { 
            id: 15, 
            label: "How satisfied are you with the current immigration policies regarding the recruitment of outside labor?", 
            name: "immigrationPoliciesSatisfaction", 
            options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"] 
        },

    ];
    

    const handleCheckboxChange = (questionId, optionValue, isChecked) => {
        setUserData(prevState => {
            const updatedData = { ...prevState };
            const question = questions.find(q => q.id === questionId);
            if (!updatedData[question.name]) {
                updatedData[question.name] = [];
            }
            if (isChecked) {
                updatedData[question.name].push(optionValue);
            } else {
                updatedData[question.name] = updatedData[question.name].filter(item => item !== optionValue);
            }
            return updatedData;
        });
    };

    console.log("userdata: ", userData);
    return (
        <div className="topIndi empDetails">
            {questions.map(question => (
                <div className="indiDetails" key={question.id}>
                    <label htmlFor={`question_${question.id}`}>{question.label}</label>
                    {question.options.map(option => (
                        <div className='checkboxDiv' key={option}>
                            <input
                                className='checkbox'
                                type="checkbox"
                                id={`question_${question.id}_${option}`}
                                name={`question_${question.id}_${option}`}
                                value={option}
                                checked={(userData[question.name] || []).includes(option)}
                                onChange={(e) => handleCheckboxChange(question.id, option, e.target.checked)}
                            />
                            <label htmlFor={`question_${question.id}_${option}`}>{option}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default EdForm;