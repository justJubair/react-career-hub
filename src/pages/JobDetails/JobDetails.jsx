import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobIdLS } from "../../components/LocalStorage/LocalStorage";
import { FaDollarSign, FaRegCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const viewedJob = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    salary,
   
   
    job_title,
    educational_requirements,
    experiences,
    contact_information,
  } = viewedJob;

  const handleApply = () => {
    toast("Successfully applied");
    saveJobIdLS(idInt);
  };

  return (
    <div className="flex flex-col items-start gap-4 max-w-screen-lg mx-auto my-6 md:flex-row">
      <div className="w-2/3 space-y-4">
        <p className="text-slate-500">
          <span className="font-semibold text-black">Job Description:</span>{" "}
          <small>{job_description}</small>
        </p>
        <p className="text-slate-500">
          <span className="font-semibold text-black">Job Responsibility:</span>{" "}
          <small>{job_responsibility}</small>
        </p>
        <p className="text-slate-500">
          <span className="font-semibold text-black">
            Educational Requirements:
          </span>{" "}
          <small>{educational_requirements}</small>
        </p>
        <p className="text-slate-500">
          <span className="font-semibold text-black">Experiences:</span>{" "}
          <small>{experiences}</small>
        </p>
      </div>
      <div className="w-1/3">
        <div className="relative flex w-96 flex-col rounded-xl bg-gradient-to-r from-[#ff90fe1a] to-[#9873ff1a] bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="border-b w-full pb-2 block font-sans text-lg font-medium leading-relaxed text-blue-gray-900 antialiased">
                Job Details
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 mb-2 text-gray-500">
                <span className="text-[#9873FF]">
                  <FaDollarSign />
                </span>
                <span className="font-semibold text-gray-600">Salary:</span>
                <span>{salary}</span>
              </p>
              <p className="flex items-center gap-2 text-gray-500">
                <span className="text-[#9873FF]">
                  <FaRegCalendarAlt />
                </span>
                <span className="font-semibold text-gray-600">Job Title:</span>
                <span>{job_title}</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg my-4 border-b pb-2">
                Contact Information
              </h4>
              <p className="flex items-center gap-2 mb-2 text-gray-500">
                <span className="text-[#9873FF]">
                  <FaPhoneAlt />
                </span>
                <span className="font-semibold text-gray-600">Phone:</span>
             {contact_information.phone}
              </p>
              <p className="flex items-center gap-2 mb-2 text-gray-500">
                <span className="text-[#9873FF]">
                  <FaEnvelope />
                </span>
                <span className="font-semibold text-gray-600">Email:</span>
             {contact_information.email}
              </p>
              <p className="flex items-center gap-2 mb-2 text-gray-500">
                <span className="text-[#9873FF]">
                  <FaMapMarkerAlt />
                </span>
                <span className="font-semibold text-gray-600">Address:</span>
             {contact_information.address}
              </p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <button
              onClick={handleApply}
              className="block w-full select-none rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
