import UseScrollDirection from "@/hook/useScrollDirection";

export const Scroll = () => {
    const { prevScrollY } = UseScrollDirection();

    const handelClick = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <div
            className={` cursor-pointer rounded-full w-[50px] h-[50px] fixed bottom-0 right-0 sm:m-10 m-2 transition-all duration-300 ${
                prevScrollY <= 10 ? "translate-x-[500px]" : " translate-x-0"
            }`}
            onClick={() => handelClick()}
        >
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className=" w-[30px] h-[30px] fill-[#c2cf09] vibrar"
            >
                <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
            </svg>
        </div>
    );
};
