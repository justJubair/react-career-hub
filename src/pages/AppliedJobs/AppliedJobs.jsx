/* eslint-disable no-case-declarations */
import { useLoaderData } from "react-router-dom";
import { getJobIdLS } from "../../components/LocalStorage/LocalStorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedJobId = getJobIdLS();
    if (jobs.length) {
      const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, []);
  const handleFilter = (filter) => {
    switch (filter) {
      case "all":
        setDisplayJobs(appliedJobs);
        break;
      case "remote":
        // eslint-disable-next-line no-case-declarations
        const remoteJob = appliedJobs.filter(
          (job) => job.remote_or_onsite === "Remote"
        );
        setDisplayJobs(remoteJob);
        break;
      case "onsite":
        const onsiteJob = appliedJobs.filter(
          (job) => job.remote_or_onsite === "Onsite"
        );
        setDisplayJobs(onsiteJob);
        break;
    }
    // if(filter === 'all'){
    //   setDisplayJobs(appliedJobs)
    // } else if(filter === 'remote'){
    //   const remoteJob = appliedJobs.filter(job=> job.remote_or_onsite === 'Remote')
    //   setDisplayJobs(remoteJob)
    // } else if(filter === 'onsite'){
    //     const onsiteJob = appliedJobs.filter(job=> job.remote_or_onsite === 'Onsite')
    //     setDisplayJobs(onsiteJob)
    // }
  };
  return (
    <div>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a onClick={() => handleFilter("all")}>All</a>
          </li>
          <li>
            <a onClick={() => handleFilter("remote")}>Remote</a>
          </li>
          <li>
            <a onClick={() => handleFilter("onsite")}>OnSite</a>
          </li>
        </ul>
      </details>
      <h1>Total applied jobs:{appliedJobs.length}</h1>
      {displayJobs.map((job) => (
        <div key={job.id}>
          <p>{job.id}</p>
          <h2>{job.job_title}</h2>
          <h2>{job.company_name}</h2>
          <p className="font-bold">{job.remote_or_onsite}</p>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
