import React, { SetStateAction } from "react";
import TextField from "../../basic_components/TextField";
import SelectField from "../../basic_components/SelectField";

interface GeneralInformationProps {
  requestData: any;
  setRequestData: React.Dispatch<SetStateAction<any>>;
  masterData: any;
}

const GeneralInformation: React.FC<GeneralInformationProps> = ({
  requestData,
  setRequestData,
  masterData,
}) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* RFP Title */}
        <div>
          <label className="block text-sm font-medium mb-2">RFP Title</label>
          <TextField
            id="rfpTitle"
            field="rfpTitle"
            value={requestData.rfpTitle || ""}
            setValue={(value) =>
              setRequestData((prev: any) => ({ ...prev, rfpTitle: value }))
            }
            placeholder="Enter RFP Title"
            style=""
            type="text"
            width="w-full"
          />
        </div>

        {/* RFP Description (SIDE-BY-SIDE) */}
        <div>
          <label className="block text-sm font-medium mb-2">RFP Description</label>
          <TextField
            id="rfpDescription"
            field="rfpDescription"
            value={requestData.rfpDescription || ""}
            setValue={(value) =>
              setRequestData((prev: any) => ({
                ...prev,
                rfpDescription: value,
              }))
            }
            placeholder="Enter RFP description"
            style="min-h-[50px]" // Keep compact height
            type="textarea"
            width="w-full"
          />
        </div>

        {/* Buyer Organization */}
        <div>
          <label className="block text-sm font-medium mb-2">Buyer Organization</label>
          <TextField
            id="buyerOrganizationName"
            field="buyerOrganizationName"
            value={requestData.buyerOrganizationName || ""}
            setValue={(value) =>
              setRequestData((prev: any) => ({
                ...prev,
                buyerOrganizationName: value,
              }))
            }
            placeholder="Buyer Organization Name"
            style=""
            type="text"
            width="w-full"
          />
        </div>

        {/* Buyer Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Buyer</label>
          <TextField
            id="buyerName"
            field="buyerName"
            value={requestData.buyerName || ""}
            setValue={(value) =>
              setRequestData((prev: any) => ({
                ...prev,
                buyerName: value,
              }))
            }
            placeholder="Buyer"
            style=""
            type="text"
            width="w-full"
          />
        </div>

        {/* Buyer Department */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Buyer Department <span className="text-red-500">*</span>
          </label>
          <SelectField
            id="departmentId"
            label=""
            style="w-full"
            value={
              masterData?.departments?.find(
                (x: any) => x?.id === requestData?.departmentId
              )?.departmentName || "Buyer department"
            }
            options={(masterData?.departments || []).map((x: any) => ({
              label: (
                <div>
                  <span className="text-md font-medium">{x.departmentName}</span>
                </div>
              ),
              value: x.id,
            }))}
            onChange={(selectedValue) => {
              setRequestData((prev: any) => ({
                ...prev,
                departmentId: selectedValue,
              }));
            }}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <SelectField
            id="categoryId"
            label=""
            style="w-full"
            value={
              masterData?.categories?.find(
                (x: any) => x?.id === requestData?.categoryId
              )?.name || "Select Category"
            }
            options={(masterData?.categories || []).map((x: any) => ({
              label: (
                <div>
                  <span className="text-md font-medium">{x.name}</span>
                </div>
              ),
              value: x.id,
            }))}
            onChange={(selectedValue) => {
              setRequestData((prev: any) => ({
                ...prev,
                categoryId: selectedValue,
              }));
            }}
          />
        </div>

        {/* Purchase Requisition ID */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Purchase Requisition ID
          </label>
          <TextField
            id="purchaseRequisitionId"
            field="purchaseRequisitionId"
            value={requestData.purchaseRequisitionId || ""}
            setValue={(value) =>
              setRequestData((prev: any) => ({
                ...prev,
                purchaseRequisitionId: value,
              }))
            }
            placeholder="Purchase Requisition ID"
            style=""
            type="text"
            width="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
