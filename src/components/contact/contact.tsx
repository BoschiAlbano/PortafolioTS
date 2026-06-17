import { contacto } from "../../utilities/contacto";
import BotonWP from "./botonWP";
import Formulario from "./formulario";

const Contact = () => {
  return (
    <div
      id="effect"
      className="min-h-full w-full flex flex-col justify-center items-center sm:pb-0 sm:px-0 pb-5 px-3"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
        <FooterContact />
        <Formulario />
      </div>
    </div>
  );
};

export default Contact;

function FooterContact() {
  return (
    <div className="w-full lg:w-80 flex flex-col justify-center items-stretch gap-4">
      {contacto.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#1a1a22] px-5 py-4 rounded-2xl border border-white/5 shadow-lg"
          >
            <div className="min-w-[40px] h-[40px] flex justify-center items-center">
              {item.icon}
            </div>
            <div className="flex flex-col justify-center items-start text-gray-300">
              <p
                title={item.title}
                className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
              >
                {item.title}
              </p>
              <p
                title={item.text}
                className="font-bold text-sm text-gray-200 whitespace-pre-line"
              >
                {item.text}
              </p>
            </div>
          </div>
        );
      })}

      <BotonWP />
    </div>
  );
}
