import { useEffect, useState } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

interface UseScrollPositionProps {
  throttleDelay?: number;
}

const useScrollPosition = (
  callback: ({
    currPos,
    prevPos,
  }: {
    currPos: ScrollPosition;
    prevPos: ScrollPosition;
  }) => void,
  { throttleDelay = 16 }: UseScrollPositionProps = {}
): void => {
  const [prevPos, setPrevPos] = useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currPos = { x: window.pageXOffset, y: window.pageYOffset };
      callback({ currPos, prevPos });
      setPrevPos(currPos);
    };

    const throttledHandleScroll = throttle(handleScroll, throttleDelay);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [callback, prevPos, throttleDelay]);
};

const throttle = (fn: (...args: any[]) => void, delay: number) => {
  let lastCallTime = 0;

  return function throttledFunction(...args: any[]) {
    const now = new Date().getTime();

    if (now - lastCallTime >= delay) {
      fn(...args);
      lastCallTime = now;
    }
  };
};

export default useScrollPosition;
