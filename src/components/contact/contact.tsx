import { contacto } from "../../utilities/contacto";

const Contact = () => {
    return (
        <div
            id="effect"
            className=" h-full sm:w-[100%] w-[90%] sm:p-10 p-5 flex flex-col justify-start items-center gap-10 "
        >
            {contacto.map((item, index) => {
                return (
                    <div
                        key={index}
                        className=" w-full flex justify-center items-start gap-3"
                    >
                        {/* icon */}
                        <div
                            id="icon"
                            className="sm:min-w-10 sm:h-10 min-w-10 h-10 grid place-items-center rounded-xl"
                        >
                            <div className="h-[50px] w-[50px] p-[6px] flex flex-col justify-center items-center  ">
                                {item.icon}
                            </div>
                        </div>

                        <div className=" w-full flex flex-col justify-center items-start text-gray-300 h-[50px]  ">
                            <p
                                title={item.title}
                                className="text-sm font-semibold  text-gray-300 space-nowrap truncate"
                            >
                                {item.title}
                            </p>
                            <p
                                title={item.text}
                                className="  w-[100%] font-bold text-md  text-gray-300 space-nowrap "
                            >
                                {item.text}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Contact;
