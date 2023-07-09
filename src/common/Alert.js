import { XCircleIcon } from '@heroicons/react/24/outline';

const Alert = ({ alert, onClose }) => {
    if (alert?.active && alert?.autoClose) {
        setTimeout(() => {
            onClose();
        }, 9000);
    }
    return (
        <>
            {alert.active && (
                <div className="bg-indigo-100 p-5 w-full rounded mb-8">
                    <div className="flex space-x-3">
                        <div className="flex-1 leading-tight text-sm text-black font-medium">
                            {alert.message}
                        </div>
                        <button type="button">
                            <XCircleIcon
                                className="h-6 w-6 text-gray-600"
                                onClick={onClose}
                            />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
    // return (
    //     <div className={`rounded-md bg-${type}-50 p-4`}>
    //         <div className="flex">
    //             <div className="flex-shrink-0">
    //                 <XCircleIcon
    //                     className={`h-5 w-5 text-${type}-400`}
    //                     aria-hidden="true"
    //                 />
    //             </div>
    //             <div className="ml-3">
    //                 <h3 className={`text-sm font-medium text-${type}-800`}>
    //                     {message}
    //                 </h3>
    //             </div>
    //             <div className="ml-auto pl-3">
    //                 <div className="-mx-1.5 -my-1.5">
    //                     <button
    //                         type="button"
    //                         className={`inline-flex bg-${type}-50 rounded-md p-1.5 text-${type}-500 hover:bg-${type}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${type}-50 focus:ring-${type}-600`}
    //                         onClick={onClose}
    //                     >
    //                         <span className="sr-only">Dismiss</span>
    //                         <XCircleIcon
    //                             className="h-5 w-5"
    //                             aria-hidden="true"
    //                         />
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Alert;
