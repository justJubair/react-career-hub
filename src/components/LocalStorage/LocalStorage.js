

const getJobIdLS = ()=>{
    const storedJob = localStorage.getItem('applied-job');
    if(storedJob){
        return JSON.parse(storedJob)
    } else {
        return []
    }
}
const saveJobIdLS = id=>{
    const storedJob = getJobIdLS();
    const isExist = storedJob.find(jobId=> jobId=== id)
    if(!isExist) {

        storedJob.push(id)
     
        localStorage.setItem('applied-job', JSON.stringify(storedJob))
    }

}

export {saveJobIdLS, getJobIdLS }