import React from 'react'

type Props = {
    formData: any;
    handleChange: any;
};

function ProductInformationSection({ formData, handleChange }: Props) {
    return (

        <div className="mb-4 border border-[#0163cf] rounded-md w-full h-[550px]">
            <div className='w-full bg-[#dfedf9] rounded-t-md'>
                <h2 className="text-2xl font-bold mb-2 text-[#0163cf] p-4">Product Information</h2>
            </div>
            <div className='p-4 grid grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="importPurpose" className="block font-medium mb-1">
                        Purpose of importation
                    </label>
                    <select
                        id="importPurpose"
                        name="importPurpose"
                        value={formData.importPurpose}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    >
                        <option value="">Select the purpose of importation</option>
                        <option value="Direct sale">Direct sale</option>
                        <option value="Personal use">Personal use</option>
                        <option value="Trial use">Trial use</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {formData.importPurpose === 'Other' && (
                    <div>
                        <label htmlFor="specifyImportPurpose" className="block font-medium mb-1">
                            Specify purpose of importation
                        </label>
                        <input
                            type="text"
                            id="specifyImportPurpose"
                            name="specifyImportPurpose"
                            value={formData.specifyImportPurpose}
                            onChange={handleChange}
                            placeholder="Specify purpose of importation"
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            required
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="productCategory" className="block font-medium mb-1">
                        Product category
                    </label>
                    <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    >
                        <option value="">Select product category</option>
                        <option value="General purpose">General purpose</option>
                        <option value="Construction materials">Construction materials</option>
                        <option value="Chemicals">Chemicals</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="productName" className="block font-medium mb-1">
                        Product name
                    </label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="weight" className="block font-medium mb-1">
                        Weight (kg)
                    </label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        placeholder="Enter weight"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="productDescription" className="block font-medium mb-1">
                        Description of products
                    </label>
                    <textarea
                        id="productDescription"
                        name="productDescription"
                        value={formData.productDescription}
                        onChange={handleChange}
                        placeholder="Enter product description"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="unitOfMeasurement" className="block font-medium mb-1">
                        Unit of measurement
                    </label>
                    <select
                        id="unitOfMeasurement"
                        name="unitOfMeasurement"
                        value={formData.unitOfMeasurement}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                    >
                        <option value="">Enter unit of measurement</option>
                        <option value="Kgs">Kgs</option>
                        <option value="Tonnes">Tonnes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="quantity" className="block font-medium mb-1">
                        Quantity of product(s)
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Enter quantity"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                        min={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductInformationSection