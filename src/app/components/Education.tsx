import React from "react";

interface EducationItem {
  title: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

const Education: React.FC<EducationItem> = ({
  title,
  school,
  location,
  startDate,
  endDate,
  gpa,
}) => {
  return <div>Education</div>;
};

export default Education;
