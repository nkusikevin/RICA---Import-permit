
export const validateSection = (currentStep: number, formData: any) => {
    let newErrors: string[] = [];
    if (currentStep === 1) {

        if (!formData.applicantCitizenship) {
            newErrors.push('Please select your citizenship.');
        }

        if (formData.applicantCitizenship === 'Rwandan' && !formData.idNumber) {
            newErrors.push('Please enter your identification document number.');
        }

        if (formData.applicantCitizenship === 'Foreigner' && !formData.passportNumber) {
            newErrors.push('Please enter your passport number.');
        }

        if (!formData.phoneNumber) {
            newErrors.push('Please enter your phoneNumber.');
        }
        if (!formData.email) {
            newErrors.push('Please enter your email.');
        }
        if (!formData.businessLocation) {
            newErrors.push('Please enter your businessLocation.');
        }
    }

    if (currentStep === 2) {
        if (!formData.businessType) {
            newErrors.push('Please enter your businessType.');
        }
        if (!formData.companyName) {
            newErrors.push('Please enter your companyName.');
        }
        if (!formData.tinNumber) {
            newErrors.push('Please enter your tinNumber.');
        }
        if (!formData.registrationDate) {
            newErrors.push('Please enter your registrationDate.');
        }
        if (!formData.businessAddress) {
            newErrors.push('Please enter your businessAddress.');
        }
    }

    if (currentStep === 3) {
        if (!formData.importPurpose) {
            newErrors.push('Please enter your importPurpose.');
        }
        if (formData.importPurpose === 'Other' && !formData.specifyImportPurpose) {
            newErrors.push('Please specify your importPurpose.');
        }
        if (!formData.productCategory) {
            newErrors.push('Please enter your productCategory.');
        }
        if (!formData.productName) {
            newErrors.push('Please enter your productName.');
        }
        if (!formData.weight) {
            newErrors.push('Please enter your weight.');
        }
        if (!formData.productDescription) {
            newErrors.push('Please enter your productDescription.');
        }
        if (!formData.unitOfMeasurement) {
            newErrors.push('Please enter your unitOfMeasurement.');
        }
        if (!formData.quantity || formData.quantity <= 0) {
            newErrors.push('Please enter your quantity.');
        }
    }

    return newErrors;
}








