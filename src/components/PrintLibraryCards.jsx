import ReactToPrint from "react-to-print";
import { useRef } from "react";
import LibraryCardTemplate from "./LibraryCardTemplate";

const PrintLibraryCards = ({ students, collegeYear }) => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="bg-green-500 hover:bg-green-600 py-2 px-10 mx-8 rounded-lg font-custom text-white">
            إطبع
          </button>
        )}
        content={() => componentRef.current}
        documentTitle="Students Library Cards"
        copyStyles={true}
      />
      <div ref={componentRef} className="printable ">
        {students.map((student) => (
          <LibraryCardTemplate
            key={student.id}
            student={student}
            collegeYear={collegeYear}
          />
        ))}
      </div>
    </div>
  );
};
export default PrintLibraryCards;
