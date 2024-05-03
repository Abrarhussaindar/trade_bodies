import React, { useContext } from 'react';
import "../form.css"

import { multiStepContext } from '../../StepContext';

function AspiForm() {
    const { userData, setUserData } = useContext(multiStepContext);
    const questions = [
        {
            id: 16,
            label: "How do salary levels in your industry compare to other sectors in your region?",
            name: "salaryComparison",
            options: ["Higher", "Lower", "Similar", "Unsure"]
        },
        {
            id: 17,
            label: "Have you observed any recent trends in salary expectations among skilled workers in your industry?",
            name: "salaryTrends",
            options: ["Increasing", "Decreasing", "Stable", "Unsure"]
        },
        {
            id: 18,
            label: "To what extent do salary levels influence your organization's ability to attract and retain talent?",
            name: "salaryInfluence",
            options: ["Significantly", "Moderately", "Minimally", "Not at all"]
        },
        {
            id: 19,
            label: "How important is it for your organization to have access to a diverse pool of skilled workers?",
            name: "diversityImportance",
            options: ["Very important", "Important", "Neutral", "Not very important", "Not important at all"]
        },
        {
            id: 20,
            label: "How do you perceive the impact of automation and technological advancements on the future demand for labor in your industry?",
            name: "automationImpact",
            options: ["Positive impact, creating new job opportunities", "Negative impact, leading to job displacement", "Neutral impact, with no significant change expected", "Unsure"]
        },
        {
            id: 21,
            label: "What measures does your organization take to ensure fair and equitable compensation practices for all employees?",
            name: "compensationPractices",
            options: ["Regular salary reviews", "Pay transparency policies", "Equal pay audits", "Other (please specify)"]
        },
        {
            id: 22,
            label: "How do you assess the effectiveness of your organization's employee retention strategies?",
            name: "retentionEffectiveness",
            options: ["High retention rates", "Employee feedback surveys", "Low turnover rates", "Other (please specify)"]
        },
        {
            id: 23,
            label: "What role does upskilling and reskilling play in your organization's workforce development strategy?",
            name: "upskillingRole",
            options: ["Integral, with regular training programs in place", "Occasional, with training provided on an as-needed basis", "Limited, with minimal investment in employee development", "Not applicable"]
        },
        {
            id: 24,
            label: "How do you perceive the impact of remote work and telecommuting on the productivity of your workforce?",
            name: "remoteWorkImpact",
            options: ["Positive impact, leading to increased productivity", "Negative impact, causing disruptions and decreased productivity", "Neutral impact, with productivity levels remaining unchanged", "Unsure"]
        },
        {
            id: 25,
            label: "Does your organization offer flexible work arrangements, such as remote work or flexible hours, to attract and retain talent?",
            name: "flexibleWorkArrangements",
            options: ["Yes, extensively", "Yes, moderately", "No, but considering implementing", "No, not currently offered"]
        },
        {
            id: 26,
            label: "What measures does your organization take to promote diversity and inclusion within the workforce?",
            name: "diversityPromotion",
            options: ["Diversity training programs", "Diverse hiring practices", "Employee resource groups", "Other (please specify)"]
        },
        {
            id: 27,
            label: "How do you assess the impact of government policies on labor migration within your industry?",
            name: "laborMigrationImpact",
            options: ["Facilitating migration for skilled workers", "Restricting migration due to local labor protectionism", "No significant impact", "Unsure"]
        },
        {
            id: 28,
            label: "What role does gender pay equity play in your organization's compensation policies?",
            name: "genderPayEquity",
            options: ["Ensuring equal pay for equal work", "Addressing gender pay gaps through policies and initiatives", "Not a priority", "Other (please specify)"]
        },
        {
            id: 29,
            label: "How do you anticipate demographic shifts, such as an aging workforce or changes in population dynamics, will impact your industry's labor market in the coming years?",
            name: "demographicShiftsImpact",
            options: ["Positively", "Negatively", "No significant impact", "Unsure"]
        },
        {
            id: 30,
            label: "What is the current availability of skilled labor within your local area?",
            name: "skilledLaborAvailability",
            options: ["Abundant", "Moderate", "Limited", "Scarce"]
        },
        {
            id: 31,
            label: "How would you rate the quality of the local talent pool in terms of meeting your organization's skill requirements?",
            name: "talentPoolQuality",
            options: ["High quality", "Average quality", "Below average quality", "Poor quality"]
        },
        {
            id: 32,
            label: "What factors contribute to the attractiveness of your local area for skilled workers?",
            name: "localAttractivenessFactors",
            options: ["Quality of life amenities", "Cost of living", "Job opportunities", "Access to education and training", "Other (please specify)"]
        },
        {
            id: 33,
            label: "How do you engage with local educational institutions (e.g., universities, vocational schools) to meet your organization's skill needs?",
            name: "educationalEngagement",
            options: ["Internship programs", "Collaborative research projects", "Curriculum advisory boards", "Other (please specify)"]
        },
        {
            id: 34,
            label: "What initiatives does your organization undertake to attract and retain local talent?",
            name: "talentRetentionInitiatives",
            options: ["Competitive salary and benefits packages", "Career development opportunities", "Employee wellness programs", "Other (please specify)"]
        },
        {
            id: 35,
            label: "How do you perceive the loyalty and commitment levels of local employees compared to those from other regions?",
            name: "loyaltyComparison",
            options: ["Higher", "Similar", "Lower", "Unsure"]
        },
        {
            id: 36,
            label: "What challenges do you encounter when recruiting from the local workforce?",
            name: "localRecruitmentChallenges",
            options: ["Skills mismatch", "Wage expectations", "Competition from other employers", "Other (please specify)"]
        },
        {
            id: 37,
            label: "How do you assess the impact of demographic trends (e.g., population growth or decline) on the availability of local talent?",
            name: "demographicTrendsImpact",
            options: ["Positive impact", "Negative impact", "No significant impact", "Unsure"]
        },
        {
            id: 38,
            label: "How does the perception of your organization within the local community impact your ability to attract and retain talent?",
            name: "communityPerceptionImpact",
            options: ["Positively", "Negatively", "No significant impact", "Unsure"]
        },
        {
            id: 39,
            label: "In what ways do you collaborate with local government or community organizations to address workforce development challenges?",
            name: "collaborationWithGovernment",
            options: ["Training subsidies or grants", "Job fairs or career expos", "Workforce development initiatives", "Other (please specify)"]
        },
        {
            id: 40,
            label: "How satisfied are you with the current immigration policies regarding the recruitment of outside labor?",
            name: "immigrationPoliciesSatisfaction",
            options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
        },
    ]
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

export default AspiForm;