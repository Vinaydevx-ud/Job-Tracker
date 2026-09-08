import "./Column.css";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import ApplicationForm from "./ApplicationForm.jsx";

const Column = () => {
  const [showform, setShowform] = useState(false);
  const [applications, setApplications] = useState(() => {
    const savedApplications = JSON.parse(localStorage.getItem("applications"));
    return savedApplications ? savedApplications : [];
  });

  const addApplication = (data) => {
    setApplications([...applications, data]);
    setShowform(false);
  };

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  const handleStatusChange = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const appliedList = applications.filter(
    (application) => application.status === "applied",
  );
  const interviewList = applications.filter(
    (application) => application.status === "interview",
  );
  const offerList = applications.filter(
    (application) => application.status === "offer",
  );
  const rejectedList = applications.filter(
    (application) => application.status === "rejected",
  );

  const totalApplications =
    appliedList.length +
    interviewList.length +
    offerList.length +
    rejectedList.length;

  return (
    <>
      {showform && <ApplicationForm addApplication={addApplication} />}
      <div className="heading">
        <div className="applications-details">
          <h2>Job Applications</h2>
          <p>{totalApplications}</p>
        </div>
        
        <div>
          <button className="Add-Button" onClick={() => setShowform(true)}>
            + Add Application
          </button>
        </div>
      </div>
      <div className="Job-applications">
        <div className="Applied">
          <h4>Applied</h4>
          <h2>{appliedList.length}</h2>
          <div className="Card">
            {appliedList.map((application) => (
              <Card
                key={application.id}
                application={application}
                handleStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
        <div className="Interview">
          <h4>Interview</h4>
          <h2>{interviewList.length}</h2>
          <div className="Card">
            {interviewList.map((application) => (
              <Card
                key={application.id}
                application={application}
                handleStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
        <div className="Offer">
          <h4>Offer</h4>
          <h2>{offerList.length}</h2>
          <div className="Card">
            {offerList.map((application) => (
              <Card
                key={application.id}
                application={application}
                handleStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
        <div className="Rejected">
          <h4>Rejected</h4>
          <h2>{rejectedList.length}</h2>
          <div className="Card">
            {rejectedList.map((application) => (
              <Card
                key={application.id}
                application={application}
                handleStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Column;
