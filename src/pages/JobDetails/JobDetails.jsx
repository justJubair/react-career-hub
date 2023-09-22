import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveJobIdLS } from "../../components/LocalStorage/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const viewedJob = jobs.find(job=> job.id === idInt);
    const {logo, company_name, id:jobId, job_title} = viewedJob

    const handleApply =()=>{
        toast('Successfully applied')
        saveJobIdLS(idInt)
    }
    
  return (
    <div>
        <img src={logo} alt="" />
       <p><small>{jobId}</small></p>
       <h3>Title: {job_title}</h3>
       <h4>{company_name}</h4>
       <button onClick={handleApply} className="btn btn-primary">Apply</button>
       <ToastContainer/>
    </div>
  )
}

export default JobDetails
