import React, { useState, useEffect, useRef } from "react";

export default function useNerScreen({ distance = "100px", once = true } = {}) {
    const [isNearScreen, setShow] = useState(false);
    const elementRef = useRef<any>();

    useEffect(function () {
        let Observar: any;
        Promise.resolve(
            typeof IntersectionObserver != "undefined"
                ? IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            Observar = new IntersectionObserver(onchange, {
                rootMargin: distance,
            });

            elementRef.current && Observar.observe(elementRef.current);
        });

        const onchange = (entries: any, observer: any) => {
            const el = entries[0];

            // console.log(el.isIntersecting);

            if (el.isIntersecting) {
                setShow(true);
                once && observer.disconnect();
            } else {
                !once && setShow(false);
            }
        };

        return () => Observar && Observar.disconnect();
    }, []);

    return { isNearScreen, elementRef };
}
