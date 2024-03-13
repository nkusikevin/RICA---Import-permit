import { useState } from 'react'

type Props = {
    formData: any;
    handleChange: any;
    goToNextStep: any
};


const BusinessOwnerDetailsSection = ({ formData, handleChange, goToNextStep }: Props) => {


    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateSection = () => {
        const newErrors: { [key: string]: string } = {};

        // Validate the fields in this section
        if (!formData.applicantCitizenship) {
            newErrors.applicantCitizenship = 'Please select your citizenship.';
        }

        if (formData.applicantCitizenship === 'Rwandan' && !formData.idNumber) {
            newErrors.idNumber = 'Please enter your identification document number.';
        }

        if (formData.applicantCitizenship === 'Foreigner' && !formData.passportNumber) {
            newErrors.passportNumber = 'Please enter your passport number.';
        }

        if (!formData.otherNames) {
            newErrors.otherNames = 'Please enter your other names.';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleNextStep = () => {
        if (validateSection()) {
            goToNextStep();
        }
    };

    return (
        <div className="mb-4 border border-[#0163cf] rounded-md w-full h-[550px]">
            <div className="w-full bg-[#dfedf9] rounded-t-md">
                <h2 className="text-2xl font-bold mb-2 text-[#0163cf] p-4">Business Owner Details</h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="applicantCitizenship" className="block font-medium mb-1">
                        Applicant citizenship
                    </label>
                    <select
                        id="applicantCitizenship"
                        name="applicantCitizenship"
                        value={formData.applicantCitizenship}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    >
                        <option value="">Select citizenship</option>
                        <option value="Rwandan">Rwandan</option>
                        <option value="Foreigner">Foreigner</option>
                    </select>
                </div>
                {formData.applicantCitizenship === 'Rwandan' && (
                    <div>
                        <label htmlFor="idNumber" className="block font-medium mb-1">
                            Identification document number
                        </label>
                        <input
                            type="text"
                            id="idNumber"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleChange}
                            placeholder="Enter Identification document number"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            required
                        />
                    </div>
                )}
                {formData.applicantCitizenship === 'Foreigner' && (
                    <div>
                        <label htmlFor="passportNumber" className="block font-medium mb-1">
                            Passport number
                        </label>
                        <input
                            type="text"
                            id="passportNumber"
                            name="passportNumber"
                            value={formData.passportNumber}
                            onChange={handleChange}
                            placeholder="Enter Passport number"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            required
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="otherNames" className="block font-medium mb-1">
                        Other names
                    </label>
                    <input
                        type="text"
                        id="otherNames"
                        name="otherNames"
                        value={formData.otherNames}
                        onChange={handleChange}
                        placeholder="Enter other names"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="surname" className="block font-medium mb-1">
                        Surname
                    </label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder="Enter surname"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="nationality" className="block font-medium mb-1">
                        Nationality
                    </label>
                    <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder="Enter nationality"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block font-medium mb-1">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium mb-1">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="businessLocation" className="block font-medium mb-1">
                        Business Owner Address
                    </label>
                    <input
                        type="text"
                        id="businessLocation"
                        name="businessLocation"
                        value={formData.businessLocation}
                        onChange={handleChange}
                        placeholder="District: Enter district"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
            </div>
            {/* <button
    type="button"
    onClick={handleNextStep}
    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
  >
    Next
  </button> */}
        </div>
    );
};

export default BusinessOwnerDetailsSection