import { useEffect, useRef } from "react";

// custom hook
export const useOutsideClick = (callback) => {
    // button에 ref를 걸었음
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (event) => {
            // ref가 존재하고, ref 안에 클릭한 부분이 없을 때만 동작한다.
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [callback, ref]);

    return ref;
};
