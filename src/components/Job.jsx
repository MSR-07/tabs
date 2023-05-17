import React from 'react';

const Job = ({ job, isActive, handleClick }) => {
  const { id, company } = job;

  return (
    <button
      key={id}
      onClick={handleClick}
      className={`job-btn ${isActive && 'active-btn'}`}
    >
      {company}
    </button>
  );
};

export default Job;
