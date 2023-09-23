import { useEffect, useState } from "react"
import Job from "../Job/Job";



const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
   const [dataLength, setDataLength] = useState(4)
   const [isShowAll, setIsShowAll] = useState(true)
   
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
      
    },[])

    const handleShowAll =()=>{
      if(isShowAll){
        setDataLength(jobs.length)
      } else{
        setDataLength(4)
      }
      setIsShowAll(!isShowAll)
    }
   
   
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-24">
        {jobs.slice(0, dataLength).map(job=> <Job key={job.id} job={job}/>)}
      </div>
    <div className="text-center my-6">
    <button onClick={handleShowAll} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">{isShowAll ? 'Show all' : 'show less'}</button>
    </div>
    </div>
  )
}

export default FeaturedJobs
