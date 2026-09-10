import './Card.css'

const Card = ({application,handleStatusChange}) => {

  
  
  return (
    <>
      <div className="Job-Card">
        <div className="Job-Data">
          <p>{application.company}</p>
          <p>{application.profile}</p>
          <p>{application.location}</p>
          <p>{application.portal}</p>
          <p>{application.date}</p>
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