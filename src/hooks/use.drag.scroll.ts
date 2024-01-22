
import { useState, useCallback, useRef } from 'react';


interface UseDragScrollProps {
  multiplier?: number;
}

const useDragScroll = ({  multiplier = 3 }: UseDragScrollProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const externalRef = useRef<HTMLDivElement>(null);

  const startDragging = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (externalRef.current?.offsetLeft ?? 0));
    setScrollLeft(externalRef.current?.scrollLeft ?? 0);
  }, [externalRef]);

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onDrag = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (externalRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * multiplier;
    if (externalRef.current) {
      externalRef.current.scrollLeft = scrollLeft - walk;
    }
  }, [isDragging, startX, scrollLeft, multiplier, externalRef]);

  return {
    isDragging,
    startDragging,
    stopDragging,
    onDrag,
    externalRef,
  };
};

export default useDragScroll;