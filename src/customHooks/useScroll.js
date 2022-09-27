import { useRef, useEffect, useCallback } from "react";

export const useScroll = () => {

const ref = useRef();

const handleScrolling = useCallback(() => {
  console.log("scrolling");

}, []);

useEffect(() => {

  const div = ref.current;

  div.addEventListener('scroll', handleScrolling);

}, [handleScrolling]);


}