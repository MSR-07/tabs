import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Job from './components/Job';
import JobInfo from './components/Info';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => (
            <Job
              key={item.id}
              job={item}
              isActive={index === value}
              handleClick={() => setValue(index)}
            />
          ))}
        </div>
        <JobInfo
          title={title}
          company={company}
          dates={dates}
          duties={duties}
        />
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
