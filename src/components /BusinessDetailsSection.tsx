

type Props = {
    formData: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
};

function BusinessDetailsSection({ formData, handleChange }: Props) {
    return (
        <div className="mb-4 border border-[#0163cf] rounded-md ">
            <div className='w-full bg-[#dfedf9] rounded-t-md'>
                <h2 className="text-2xl font-bold mb-2  text-[#0163cf] p-4">Business Details</h2>
            </div>
            <div className='p-4'>
                <div className="mb-2">
                    <label htmlFor="businessType" className="block font-medium mb-1">
                        Business type
                    </label>
                    <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    >
                        <option value="">Enter Business Type</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Wholesale">Wholesale</option>
                        <option value="Manufacturer">Manufacturer</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="companyName" className="block font-medium mb-1">
                        Company name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="tinNumber" className="block font-medium mb-1">
                        TIN number
                    </label>
                    <input
                        type="number"
                        id="tinNumber"
                        name="tinNumber"
                        value={formData.tinNumber}
                        onChange={handleChange}
                        placeholder="Enter TIN number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                        minLength={9}
                        maxLength={9}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="registrationDate" className="block font-medium mb-1">
                        Registration date
                    </label>
                    <input
                        type="date"
                        id="registrationDate"
                        name="registrationDate"
                        value={formData.registrationDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="businessAddress" className="block font-medium mb-1">
                        Business Address
                    </label>
                    <input
                        type="text"
                        id="businessAddress"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        placeholder="District: Enter district"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
            </div>
        </div>
    )
}

export default BusinessDetailsSection