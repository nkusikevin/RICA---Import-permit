
type StepperProps = {
    steps: any[];
    currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
    return (
        <ol className="flex items-center w-full">
            {steps.map((_step, index) => (
                <li
                    key={index}
                    className={`flex w-full items-center mb-2 ${index + 1 === currentStep
                        ? 'text-blue-600 dark:text-blue-500 after:content-[""] after:w-full after:h-1 after:border-b after:border-[#0163cf] after:border-4 after:inline-block dark:after:border-[#0163cf]'
                        : 'after:content-[""] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700'
                        }`}
                >
                    <span
                        className={`flex items-center justify-center w-10 h-10 bg-[#0163cf] rounded-full lg:h-12 lg:w-12 dark:bg-[#0163cf] shrink-0`}
                    >
                        {index + 1 === currentStep ? (
                            <svg
                                className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 12"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5"
                                />
                            </svg>
                        ) : (
                            <span
                                className={`w-4 h-4 text-center text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100`}
                            >
                                {index + 1}
                            </span>
                        )}
                    </span>
                </li>
            ))}
        </ol>
    );
};



export default Stepper;