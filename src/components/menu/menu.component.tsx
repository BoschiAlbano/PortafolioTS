"use client";
import React, { useRef, useState, useEffect } from "react";
import { menu } from "../../utilities/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scroll } from "./scrollUp.component";

const tituto = "Boschi Albano Jose";

const NavComponent = () => {
  const router = usePathname();

  const firstItemRef = useRef<HTMLLabelElement | null>(null);
  const [whidth, setWidth] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>(router);

  useEffect(() => {
    setWidth(firstItemRef?.current?.offsetWidth ?? 0);
    setLeft(firstItemRef?.current?.offsetLeft ?? 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setLeft(firstItemRef?.current?.offsetLeft ?? 0);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleclick = ({
    index,
    e,
  }: {
    index: string;
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>;
  }) => {
    setWidth(e.currentTarget.offsetWidth);
    setLeft(e.currentTarget.offsetLeft);
    setSelectedOption(index);
  };

  useEffect(() => {
    window.addEventListener("blur", () => {
      document.title = "¡No te vayas!";
    });

    window.addEventListener("focus", () => {
      document.title = tituto;
    });
  }, []);

  return (
    <nav
      id="effect"
      className="sm:mb-0 mb-10 sm:fixed relative top-0 right-0 z-50  w-full "
    >
      <ul className="sm:w-auto w-full relative flex flex-row sm:justify-end justify-evenly items-center sm:gap-6 gap-2 sm:py-4 py-2 sm:px-8 px-4 ">
        {menu.map((item, index) => {
          return (
            <Link
              href={`${item.href}`}
              key={crypto.randomUUID()}
              className=" h-full p-0 m-0"
            >
              <label
                onClick={(e) => handleclick({ index: item.href, e })}
                className="cursor-pointer  h-full w-full flex"
                ref={item.href === selectedOption ? firstItemRef : null}
              >
                <input
                  type="radio"
                  name="opcion"
                  id={`${index + 1}`}
                  className={`py-4 px-2 sm:text-xl text-lg active:text-[#c2cf09] hover:text-[#c2cf09] text-[#d1d5db]`}
                  defaultChecked={selectedOption === item.href}
                />
                <span id="MenuTitle" className=" text-lg">
                  {item.title}
                </span>
              </label>
            </Link>
          );
        })}
        {left !== 0 && (
          <div
            id="line"
            className=" sm:bottom-[12px] bottom-[5px] translate-y-[60%]"
            style={{ width: `${whidth}px`, left: `${left}px` }}
          ></div>
        )}
      </ul>

      <Scroll />
    </nav>
  );
};

export default NavComponent;
