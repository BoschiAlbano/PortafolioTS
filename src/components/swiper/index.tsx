import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Swiper_Multimedia({
    multimedia = [],
}: {
    multimedia: string[];
}) {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            autoplay={false}
            navigation={true}
            autoHeight={true}
            loop={multimedia.length > 1 ? true : false}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            {multimedia.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image
                            className="rounded-lg w-full"
                            src={item}
                            alt="Imagen de proyecto"
                            width={1000}
                            height={600}
                            // sizes="100vw"
                            // fill
                            style={{
                                objectFit: "contain",
                                width: "100%",
                                height: "auto",
                            }}
                            loading="lazy"
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
