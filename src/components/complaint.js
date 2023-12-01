
import React, { useState } from 'react';
import '../styles/complaint.css';
import image1 from './image1.png';

const CollegeComplaintSystem = () => {
  const [department, setDepartment] = useState('ECE');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [complaints, setComplaints] = useState([]);
  const [totalComplaints, setTotalComplaints] = useState(0);
  const [solvedCount, setSolvedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [showSidePanel, setShowSidePanel] = useState(false);

  const registerComplaint = () => {
    if (!department || !description || !name || !number) {
      alert('Please fill in all the fields.');
      return;
    }

    const newComplaint = {
      department,
      description,
      name,
      number,
      status: 'Pending',
    };

    setComplaints((prevComplaints) => [...prevComplaints, newComplaint]);
    setTotalComplaints((prevTotal) => prevTotal + 1);

    
    setDepartment('ECE');
    setDescription('');
    setName('');
    setNumber('');
  };

  const toggleSidePanel = () => {
    setShowSidePanel((prevShow) => !prevShow);
  };

  const closeSidePanel = () => {
    setShowSidePanel(false);
  };

  const markAsSolved = (index) => {
    const updatedComplaints = [...complaints];
    updatedComplaints[index].status = 'Solved';

    setComplaints(updatedComplaints);
    setSolvedCount((prevCount) => prevCount + 1);
  };

  const markAsRejected = (index) => {
    const updatedComplaints = [...complaints];
    updatedComplaints[index].status = 'Rejected';

    setComplaints(updatedComplaints);
    setRejectedCount((prevCount) => prevCount + 1);
  };

  const deleteComplaint = (index) => {
    const updatedComplaints = [...complaints];
    updatedComplaints.splice(index, 1);

    setComplaints(updatedComplaints);
    setTotalComplaints((prevTotal) => prevTotal - 1);

    // Close the side panel after deleting a complaint
    setShowSidePanel(false);
  };

  return (
    <>
      <div className="container">
        src={image1} alt="Top Image" className="top-image"
        <h1>College Complaint System</h1>

        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="ECE">ECE</option>
          <option value="ISE">ISE</option>
          <option value="CSE">CSE</option>
          <option value="ME">ME</option>
          <option value="EEE">EEE</option>
        </select>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your complaint description"
        ></textarea>

        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
        />

        <button onClick={registerComplaint}>Submit Complaint</button>

        <button onClick={toggleSidePanel}>Recent Complaints</button>

        <div id="complaintList">
          <h2>Complaints</h2>
          {complaints.map((complaint, index) => (
            <div key={index} className="complaint">
              <p><strong>Department:</strong> {complaint.department}</p>
              <p><strong>Description:</strong> {complaint.description}</p>
              <p><strong>Name:</strong> {complaint.name}</p>
              <p><strong>Number:</strong> {complaint.number}</p>
              <p><strong>Status:</strong> {complaint.status}</p>
              <button onClick={() => markAsSolved(index)} disabled={complaint.status === 'Solved'}>
                Mark as Solved
              </button>
              <button onClick={() => markAsRejected(index)} disabled={complaint.status === 'Rejected'}>
                Mark as Rejected
              </button>
              <button onClick={() => deleteComplaint(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>

      {showSidePanel && (
        <div className="side-panel">
          <button className="close-btn" onClick={closeSidePanel}>
            Close
          </button>
          <h2>Recent Complaints</h2>
          {complaints.slice(0, 5).map((complaint, index) => (
            <div key={index} className="recent-complaint">
              <p><strong>Department:</strong> {complaint.department}</p>
              <p><strong>Description:</strong> {complaint.description}</p>
            </div>
          ))}
        </div>
      )}

      <div className="container">
        <div id="complaintCounts">
          <p>Total Complaints: {totalComplaints}</p>
          <p>Solved: {solvedCount}</p>
          <p>Rejected: {rejectedCount}</p>
        </div>
      </div>

      <footer className="copyright">
        <p>&copy; 2023 Shridevi Institute of Technology. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default CollegeComplaintSystem;
