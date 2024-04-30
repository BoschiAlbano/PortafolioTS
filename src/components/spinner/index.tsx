import React from "react";

const Spinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="border-4 border-gray-300 border-l-transparent rounded-full animate-spin h-9 w-9"></div>
            </div>
        </div>
    );
};

export default Spinner;
