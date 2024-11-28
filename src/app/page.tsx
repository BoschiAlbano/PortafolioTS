const About = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full  px-4 py-4 ">
            <div className=" w-full h-full p-10">
                <Tecnologia />
            </div>
        </div>
    );
};

export default About;

const Tecnologia = () => {
    return (
        <>
            <div id="effect" className={` GrillaTecnologias`}>
                <div className="Tecnologias">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="IconoTec"
                    >
                        <path d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389zm192 0a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389zm-144 48a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437z"></path>
                    </svg>
                    <h1 className="h1Tec">Frontend</h1>
                    <div className="flexTec">
                        <span className="ItemsTecnologias">HTML5</span>
                        <span className="ItemsTecnologias">Css</span>
                        <span className="ItemsTecnologias">JavaScript</span>
                        <span className="ItemsTecnologias">React Js</span>
                        <span className="ItemsTecnologias">Next js</span>
                        <span className="ItemsTecnologias">Tailwind Css</span>
                    </div>
                </div>

                <div className="Tecnologias">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="IconoTec"
                    >
                        <path d="M256 428c-52.35 0-111.39-11.61-157.93-31-17.07-7.19-31.69-18.82-43.64-28a4 4 0 0 0-6.43 3.18v12.58c0 28.07 23.49 53.22 66.14 70.82C152.29 471.33 202.67 480 256 480s103.7-8.67 141.86-24.42C440.51 438 464 412.83 464 384.76v-12.58a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 28-46.54 19.39-105.57 31-157.92 31zm208-301.49c-.81-27.65-24.18-52.4-66-69.85C359.74 40.76 309.34 32 256 32s-103.74 8.76-141.91 24.66c-41.78 17.41-65.15 42.11-66 69.69L48 144c0 6.41 5.2 16.48 14.63 24.73 11.13 9.73 27.65 19.33 47.78 27.73C153.24 214.36 207.67 225 256 225s102.76-10.68 145.59-28.58c20.13-8.4 36.65-18 47.78-27.73C458.8 160.49 464 150.42 464 144z"></path>
                        <path d="M413.92 226c-46.53 19.43-105.57 31-157.92 31s-111.39-11.57-157.93-31c-17.07-7.15-31.69-18.79-43.64-28a4 4 0 0 0-6.43 3.22V232c0 6.41 5.2 14.48 14.63 22.73 11.13 9.74 27.65 19.33 47.78 27.74C153.24 300.34 207.67 311 256 311s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 246.47 464 238.41 464 232v-30.78a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.96z"></path>
                        <path d="M413.92 312c-46.54 19.41-105.57 31-157.92 31s-111.39-11.59-157.93-31c-17.07-7.17-31.69-18.81-43.64-28a4 4 0 0 0-6.43 3.2V317c0 6.41 5.2 14.47 14.62 22.71 11.13 9.74 27.66 19.33 47.79 27.74C153.24 385.32 207.66 396 256 396s102.76-10.68 145.59-28.57c20.13-8.41 36.65-18 47.78-27.74C458.8 331.44 464 323.37 464 317v-29.8a4 4 0 0 0-6.43-3.18c-11.95 9.17-26.57 20.81-43.65 27.98z"></path>
                    </svg>
                    <h1 className="h1Tec">Backend</h1>
                    <div className="flexTec">
                        <span className="ItemsTecnologias">Node Js</span>
                        <span className="ItemsTecnologias">Express Js</span>
                        <span className="ItemsTecnologias">Sql Server</span>
                        <span className="ItemsTecnologias">GraphQl</span>
                    </div>
                </div>

                <div className="Tecnologias">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="IconoTec"
                    >
                        <path d="M469.54 120.52a16 16 0 0 0-25.54-4L382.56 178a16.12 16.12 0 0 1-22.63 0l-26.56-26.6a16 16 0 0 1 0-22.63l61.18-61.19a16 16 0 0 0-4.78-25.92C343.56 21 285.88 31.78 249.51 67.88c-30.9 30.68-40.11 78.62-25.25 131.53a15.89 15.89 0 0 1-4.49 16L53.29 367.46a64.17 64.17 0 1 0 90.6 90.64l153.68-166.85a15.9 15.9 0 0 1 15.77-4.57 179.3 179.3 0 0 0 46.22 6.37c33.4 0 62.71-10.81 83.85-31.64 39.15-38.57 45.12-103.99 26.13-140.89zM99.48 447.15a32 32 0 1 1 28.34-28.35 32 32 0 0 1-28.34 28.35z"></path>
                    </svg>
                    <h1 className="h1Tec">Herramientas</h1>
                    <div className="flexTec">
                        <span className="ItemsTecnologias">GitHub</span>
                        <span className="ItemsTecnologias">Postman</span>
                    </div>
                </div>

                <div className="Tecnologias">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="IconoTec"
                    >
                        <path d="M480 265H232v179l248 36V265zM216 265H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z"></path>
                    </svg>
                    <h1 className="h1Tec">Escritorio</h1>
                    <div className="flexTec">
                        <span className="ItemsTecnologias">C#</span>
                        <span className="ItemsTecnologias">
                            Entity Framework
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
