import './ApplicationForm.css';
import {useState} from 'react';

const ApplicationForm = ({ addApplication }) => {
  const [company, setCompany] = useState("");
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [portal ,setPortal] = useState("");
 
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      id: Date.now(),
      company,
      profile,
      location,
      date,
      portal,
      status: "applied",
    };

    addApplication(data);
  }

  return (
    <>
      <div className="Form">
        <form className="Application-Form" onSubmit={handleSubmit}>
          <div className="Company-Name">
            <label htmlFor="name ">Company Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="Profile">
            <label htmlFor="profile ">Job Profile</label>
            <input
              id="profile"
              type="text"
              placeholder="Enter Job Profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>
          <div className="Location">
            <label htmlFor="location ">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="Date">
            <label htmlFor="date ">Date</label>
            <input
              id="date"
              type="date"
              placeholder="Enter Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="Portal">
            <label htmlFor="portal ">Portal</label>
            <input
              id="portal"
              type="text"
              value={portal}
              placeholder="Enter Portal"
              onChange={(e) => setPortal(e.target.value)}
            />
          </div>
         
         

          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </form>
      </div>
    </>
  );
};

export default ApplicationForm;