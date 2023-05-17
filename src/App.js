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
    setTimeout(() => {
      fetchJobs();
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="w-[90vw] my-20 mx-auto max-w-6xl">
  
      <div className="mb-16 text-center">
        <h2>experience</h2>
        <div className="w-20 mb-5 h-1 mx-auto bg-[#2caeba]"></div>
      </div>
      <div className="flex w-[80vw] flex-wrap md:flex-nowrap my-0 mx-auto max-w-6xl gap-x-12">
        <div className="flex flex-row mb-16 md:flex-col">
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
      <button type="button" className="uppercase bg-[#2caeba] text-white py-[6px] px-3 tracking-wide font-semibold transition-all duration-300
      text-sm border-solid border-transparent cursor-pointer shadow-[0 1px 3px rgba(0,0,0,0.2)] rounded block w-48 text-center mt-12 mx-auto hover:bg-[​#88ebf2] hover:text-[​#044e55]">
        more info
      </button>
    </section>
  );
}

export default App;
