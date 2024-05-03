import jsPDF from 'jspdf';
import 'jspdf-autotable';

const generatePDF = (formData, photoData) => {
  const pdf = new jsPDF();

  // Set font styles
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(12);

  // Add a header
  pdf.text(20, 20, 'Curriculum Vitae');
  if (photoData) {
    const photoWidth = 30;
    const photoHeight = 30;
    pdf.addImage(photoData, 'JPEG', 160, 5, photoWidth, photoHeight);
  }
  // Add content to the PDF using formData
  const personalInfoData = [
    ['Name', formData.name],
    ['Present Designation', formData.designation],
    ['Date of Birth', formData.dob],
    ['Age', formData.age],
    ['Total Years of Experience', formData.YOE],
    ['Email', formData.email],
    ['Phone Number', formData.phoneNumber],
    ['Adhaar Number', formData.adhaar],
  ];

  const educationData = [
    ["Post Graduation", formData.postGradInst, formData.postGradDegree,  formData.postGradDegreeYear],
    ["Graduation",formData.underGradInst, formData.underGradDegree,  formData.underGradDegreeYear],
    ["Other",formData.otherCertiInst, formData.otherCerti,  formData.otherCertiYear],
  ];

  const languageData = [
    ['Languages', 'Read', 'Write', 'Speak'],
    ['English', formData.lang1Read, formData.lang1Write, formData.lang1Speak],
    [ formData.lang2, formData.lang2Read, formData.lang2Write, formData.lang2Speak],
  ];

  const employmentData = [
    [ formData.employeer1,  formData.employeerFrom1,  formData.employeerTo1,  formData.employeerPosition1],
    [ formData.employeer2,  formData.employeerFrom2,  formData.employeerTo2,  formData.employeerPosition2],
  ];

  // Create a table for personal information
  pdf.autoTable({
    startY: 30, // Adjust the starting Y position as needed
    head: [['Field', 'Value']],
    body: personalInfoData,
  });

  // Create a table for education information
  pdf.autoTable({
    startY: pdf.autoTable.previous.finalY + 10, // Start after the previous table
    head: [['Education Field', 'Institute', 'Degree', 'Year']],
    body: educationData,
  });

  // Create a table for language information
  pdf.autoTable({
    startY: pdf.autoTable.previous.finalY + 10, // Start after the previous table
    head: languageData.slice(0, 1),
    body: languageData.slice(1),
  });

  // Create a table for employment information
  pdf.autoTable({
    startY: pdf.autoTable.previous.finalY + 10, // Start after the previous table
    head: [['Employer', 'From', 'To', 'Position']],
    body: employmentData,
  });

  // Add the summary
  pdf.text(20, pdf.autoTable.previous.finalY + 20, `Summary of Areas of Expertise: ${formData.summary}`);

  // Certification
//   pdf.text(20, pdf.autoTable.previous.finalY + 30, 'Certification:');
  const certificationText = `Certification I, the undersigned, certify that to the best of my knowledge and belief, this CV correctly describes myself, my qualifications, and my experience. I understand that any willful misstatement described herein may lead to my disqualification or dismissal, if engaged.`;

  const certificationLines = pdf.splitTextToSize(certificationText, 180); // Adjust the maxWidth as needed
  
  // Add each line separately
  for (let i = 0; i < certificationLines.length; i++) {
    pdf.text(20, pdf.autoTable.previous.finalY + 30 + i * 10, certificationLines[i]);
  }
  // Save the PDF or display it in an iframe
  pdf.save(`${formData.name}_cv.pdf`); 
};


export default generatePDF;