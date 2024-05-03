import React, { useContext, useState } from "react";
import "../form.css";
import { multiStepContext } from "../../StepContext";

function GenForm() {

    const { userData, setUserData } = useContext(multiStepContext);
    const [phoneNumber, setPhoneNumber] = useState("")
    const handlePhoneInput = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        const phValue = value.slice(0, 10)
        setPhoneNumber(phValue); // Limit to 10 digits
        setUserData({ ...userData, "PhoneNumber": phValue })
    };
    console.log("userdata: ", userData);
    return (
        <>
            <div className="topIndi">
                <div className="indiDetails">
                    <label htmlFor="name">Organization Name</label>
                    <input type="text" value={userData['OrganizationName']} required onChange={(e) => setUserData({ ...userData, "OrganizationName": e.target.value })} name="name" id="name" />
                </div>
                <div className="indiDetails">
                    <label htmlFor="name">Key Personnel</label>
                    <input type="text" value={userData['KeyPersonnel']} required onChange={(e) => setUserData({ ...userData, "KeyPersonnel": e.target.value })} name="name" id="name" />
                </div>
                <div className="indiDetails">
                    <label htmlFor="desig">Founder/CEO: </label>
                    <input type="text" value={userData['Founder']} required onChange={(e) => setUserData({ ...userData, "Founder": e.target.value })} name="desig" id="desig" />
                </div>
                <div className="indiDetails">
                    <label htmlFor="email">Legal Structure</label>
                    <div className="customSelect">
                        <select value={userData['LegalStructure']} required onChange={(e) => setUserData({ ...userData, "LegalStructure": e.target.value })}>
                            <option value="">Select Option</option>
                            <hr />
                            <option value="corporation">corporation</option>
                            <hr />
                            <option value="non-profit">non-profit</option>
                            <hr />
                            <option value="partnership">partnership</option>

                        </select>
                        <span className="customArrow"></span>
                    </div>
                </div>




            </div>
            <div className="indiDetails">
                <label htmlFor="text">Address</label>
                <input className="email" type="text" value={userData['Address']} required onChange={(e) => setUserData({ ...userData, "Address": e.target.value })} name="email" id="email" />
            </div>
            <div className="indiDetails">
                <label htmlFor="email">Email ID</label>
                <input className="email" type="email" value={userData['Email']} required onChange={(e) => setUserData({ ...userData, "Email": e.target.value })} name="email" id="email" />
            </div>
            <div className="indiDetails">
                <label htmlFor="text">Website</label>
                <input className="email" type="text" value={userData['Website']} required onChange={(e) => setUserData({ ...userData, "Website": e.target.value })} name="email" id="email" />
            </div>
            

            <div className="indiDetails">
                <label htmlFor="phone">Phone Number (+91)</label>
                <div>
                    <input maxLength={10} type="number" value={phoneNumber} required onChange={handlePhoneInput} />
                    {/* <input maxLength={10} type="Number" value={userData['PhoneNumber']} required onChange={(e) => setUserData({ ...userData, "PhoneNumber": e.target.value })} /> */}
                </div>
            </div>

            <div className="indiDetails">
                <label htmlFor="text">Industry Sector</label>
                <input className="email" type="text" value={userData['IndustrySector']} required onChange={(e) => setUserData({ ...userData, "IndustrySector": e.target.value })} name="email" id="email" />
            </div>
            <div className="indiDetails">
                <label htmlFor="text">Membership Affiliations</label>
                <input className="email" type="text" value={userData['MembershipAffiliations']} required onChange={(e) => setUserData({ ...userData, "MembershipAffiliations": e.target.value })} name="email" id="email" />
            </div>
        </>
    )
}

export default GenForm;