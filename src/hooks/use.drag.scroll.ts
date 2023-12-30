
import { useState, useCallback } from 'react';
import { RefObject } from 'react';

interface UseDragScrollProps {
  externalRef: RefObject<HTMLDivElement>;
  multiplier?: number;
}

const useDragScroll = ({ externalRef, multiplier = 3 }: UseDragScrollProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    onDrag
  };
};

export default useDragScroll;