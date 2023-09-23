/* eslint-disable no-case-declarations */
import { useLoaderData } from "react-router-dom";
import { getJobIdLS } from "../../components/LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import swal from "sweetalert";
import SecondBanner from "../../components/SecondBanner/SecondBanner";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [noData, setNoData] = useState(false);
  
  useEffect(() => {
    const storedJobId = getJobIdLS();
  
    if (storedJobId.length) {
      const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    } else {
      setNoData("No Data Found");
    }
  }, [jobs]);
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
  };
  const handleRemoveAll = () => {
    localStorage.clear();
    setDisplayJobs([]);
    setNoData("No Data Found");
    swal("All Removed", "successfully deleted", "success");
  };
  return (
  <>
  <SecondBanner>Applied Jobs</SecondBanner>
    <div className="mt-8 mb-24">
      <div className="flex justify-between">
      <button onClick={handleRemoveAll} className={`btn btn-error text-white ${!displayJobs.length && 'hidden'}`}>
          Remove All
        </button>
        <details className={`dropdown ${noData && 'hidden'}`}>
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
      </div>
  
    {noData ? (
      <p className="flex items-center justify-center text-xl font-semibold h-[50vh] text-center">{noData}</p>
    ) : (
      <div className="flex flex-col gap-6 my-4">
        {displayJobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    )}
  </div>
  </>
  );
};

export default AppliedJobs;
