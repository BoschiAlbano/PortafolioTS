import { contacto } from "../../utilities/contacto";
import Formulario from "./formulario";

const Contact = () => {
    return (
        <div
            id="effect"
            className=" h-full sm:w-[100%] w-[90%] sm:p-10 p-0  flex flex-col justify-start items-center sm:gap-0 gap-10 "
        >
            <div className=" flex-grow w-full h-full flex flex-row justify-center items-center">
                <Formulario />
            </div>
            <div className=" w-full flex-grow-0 flex flex-row flex-wrap justify-center items-end gap-10">
                {contacto.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className=" sm:w-auto w-full flex justify-center items-center gap-3"
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
        </div>
    );
};

export default Contact;
