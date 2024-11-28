import NavComponent from "@/components/menu/menu.component";

const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <NavComponent />

            <div
                id="contenido"
                className=" pb-5 lg:pb-0 sm:min-h-min min-h-screen"
            >
                {children}
            </div>
        </section>
    );
};

export default Main;
