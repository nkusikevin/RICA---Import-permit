

type Props = {}

function MockedForm({ }: Props) {
    return (
        <div><div className="max-w-3xl mx-auto">
            <div className="mb-4 border border-blue-300 rounded-md p-4">
                <h2 className="text-xl font-bold mb-2">Application Details</h2>
                <div className="mb-2">
                    <label htmlFor="applicationNo" className="block font-medium mb-1">
                        Application No
                    </label>
                    <input
                        type="text"
                        id="applicationNo"
                        name="applicationNo"
                        placeholder="Application No"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                </div>
            </div>

            <div className="mb-4 border border-gray-300 rounded-md p-4">
                <h2 className="text-xl font-bold mb-2">Attachments</h2>
                <div>
                    <p>Attachments</p>
                    <ol className="list-decimal pl-4">
                        <li>Gazette Publication Document</li>
                        <li>Media Publication Document</li>
                    </ol>
                </div>
            </div>
        </div></div>
    )
}

export default MockedForm