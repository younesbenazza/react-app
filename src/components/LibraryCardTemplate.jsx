import React from "react";
const LibraryCardTemplate = React.forwardRef((props, ref) => (
  <div ref={ref} className="library-card border p-4  rtl">
    <h2>{props.student.first_name}</h2>
    <p>ID: {props.student.id}</p>
    <p>Course: {props.collegeYear}</p>
    {/* Add more student details here */}
  </div>
));
export default LibraryCardTemplate;
