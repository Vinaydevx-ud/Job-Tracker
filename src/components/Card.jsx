import './Card.css'

const Card = ({application,handleStatusChange}) => {

  
  
  return (
    <>
      <div className="Job-Card">
        <div className="Job-Card-Data">
          <h3>{application.company}</h3>
          <h2>{application.profile}</h2>
          <h4>{application.location}</h4>
          <h4>{application.portal}</h4>
          <h5>{application.date}</h5>
        </div>
        <div className="Drop-Down">
          <label>Move To</label>
          <select
          value={application.status}
          onChange={(e) => handleStatusChange(application.id, e.target.value)}
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default Card;