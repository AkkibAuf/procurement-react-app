import React, { useState } from 'react';
import ShowStatus from '../buttons/ShowStatus';
import { useNavigate } from 'react-router-dom';
import { IRfp } from '../../types/rfpTypes';

interface NewRequestsCardProp {
  requests: any[]
  trigger:()=>void
}
const NewRequestsCard: React.FC<NewRequestsCardProp> = ({ requests,trigger }: NewRequestsCardProp) => {
  // Example data
  const navigate = useNavigate();
  const [, setSelectedRequest] = useState<IRfp>()
  const [, setIsModalOpen] = useState(false);
  const handleRowClick = (request: any) => {
    if (request.status == "approved") {
      navigate(`/spend_analysys/${request.id}`)
    } else if (request.status == "draft") {
      setSelectedRequest(request);
      setIsModalOpen(true);
    } else {
      navigate(`/request/${request.id}`)
    }
    trigger && trigger();
  }

  return (
    <div className="bg-white h-full rounded-lg p-4 min-h-[100vh] flex flex-col ">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 sticky">New tasks</h2>

      {requests.length!==0?<ul className="flex flex-col gap-4">
        {requests.map((request, index) => (
          <li
            key={index}
            className="flex justify-between items-start border-b pb-2 last:border-none cursor-pointer"
            onClick={() => handleRowClick(request)}
          >
            <div>
              {/* <p className="text-sm max-w-[100px] desktop-wide:max-w-[200px] font-medium text-gray-800">{request.projectName}</p> */}
              <div className="w-36 group relative">
                {/* <p className="mb-1 text-gray-500">{request.projectName}</p> */}
                <span className="block truncate text-sm">{request.projectName}</span>

                {/* Tooltip on Hover */}
                <div className="absolute text-xs left-0 top-full hidden group-hover:flex bg-[#EDF4FD] shadow-md p-2 rounded w-max max-w-[300px] z-10 border border-gray-300">
                  {request.projectName}
                </div>
              </div>
              {/* <span className="text-xs text-gray-500">{request?.expenditureType}</span> */}
              <div className="w-36 group relative">
                {/* <p className="mb-1 text-gray-500">{request.projectName}</p> */}
                <span className="block truncate text-xs text-gray-500">{request?.expenditureType}</span>

                {/* Tooltip on Hover */}
                <div className="absolute text-xs left-0 top-full hidden group-hover:flex bg-[#EDF4FD] shadow-md p-2 rounded w-max max-w-[300px] z-10 border border-gray-300">
                  {request.expenditureType}
                </div>
              </div>
            </div>
            <span>
              <ShowStatus status={request.status as string} type='rfps' />
            </span>
          </li>
        ))}
      </ul>:<span className='px-4 py-2 border-b text-center text-sm'>No new requests</span>}
    </div>
  );
};

export default NewRequestsCard;
