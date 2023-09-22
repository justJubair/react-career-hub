import { useLoaderData} from "react-router-dom";
import { getJobIdLS } from "../../components/LocalStorage/LocalStorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([])
  useEffect(() => {
    const storedJobId = getJobIdLS();
    // first way to display data from local storage
    const jobApplied = jobs.filter((job) => storedJobId.includes(job.id));
    setAppliedJobs(jobApplied)
    // second way to display data from local storage
    // const jobApplied = [];
    // for(let id of storedJobId){
    //   const job = jobs.find(job=> job.id === id)
    //   jobApplied.push(job)
    // }

  }, []);
  console.log(appliedJobs);
  return (
    <div>
      <h1>Total applied jobs:{appliedJobs.length}</h1>
    </div>
  );
};

export default AppliedJobs;
