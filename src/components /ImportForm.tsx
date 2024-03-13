import { useState } from 'react';
import BusinessDetailsSection from './BusinessDetailsSection';
import BusinessOwnerDetailsSection from './BusinessOwnerDetails';
import ProductInformationSection from './ProductInformationSection';
import Stepper from './Stepper';

const ImportForm = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState({
        applicantCitizenship: '',
        idNumber: '',
        otherNames: '',
        surname: '',
        nationality: '',
        phoneNumber: '',
        email: '',
        businessLocation: '',
        businessType: '',
        companyName: '',
        tinNumber: '',
        registrationDate: '',
        businessAddress: '',
        importPurpose: '',
        specifyImportPurpose: '',
        productCategory: '',
        productName: '',
        weight: '',
        productDescription: '',
        unitOfMeasurement: '',
        quantity: '',
        passportNumber: '',
    });


    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    const goToNextStep = () => {
        // Validate the current step before proceeding
        // If validation passes, increment the current step
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const goToPreviousStep = () => {
        // Decrement the current step
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full  p-8">
            <div>
                <h1 className="text-4xl font-bold text-center text-blue-500 my-4">RICA - Import permit</h1>
                <Stepper steps={[1, 2, 3]} currentStep={currentStep} />
            </div>
            <div className="w-full h-full ">
                {currentStep === 1 && (
                    <BusinessOwnerDetailsSection formData={formData} handleChange={handleChange} goToNextStep={goToNextStep} />
                )}
                {currentStep === 2 && (
                    <BusinessDetailsSection formData={formData} handleChange={handleChange} />
                )}
                {currentStep === 3 && (
                    <ProductInformationSection formData={formData} handleChange={handleChange} />
                )}
            </div>

            <div className='mt-5'>
                {currentStep > 1 && (
                    <button
                        type="button"
                        onClick={goToPreviousStep}
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 mr-2"
                    >
                        Previous
                    </button>
                )}
                {currentStep < 3 && (
                    <button
                        type="button"
                        onClick={goToNextStep}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Next
                    </button>
                )}
                {currentStep === 3 && (
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    >
                        Submit
                    </button>
                )}
            </div>
        </form>
    );
};

export default ImportForm;