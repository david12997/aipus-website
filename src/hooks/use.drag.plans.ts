import { useState, useEffect, useRef, useCallback } from 'react';

const useSectionPlanes = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollMobileContainerRef = useRef<HTMLDivElement>(null);

    const [childrenWidth, setChildrenWidth] = useState<number[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Mobile logic
    useEffect(() => {
        const container = scrollMobileContainerRef.current;
        if (container) {
            const widths = Array.from(container.children).map(child => child.clientWidth);
            setChildrenWidth(widths);
        }
    }, []);

    const handleScroll = () => {
        const container = scrollMobileContainerRef.current;
        if (container) {
            const center = container.scrollLeft + container.clientWidth / 2;
            let cumulativeWidth = 0;
            for (let i = 0; i < childrenWidth.length; i++) {
                cumulativeWidth += childrenWidth[i];
                if (cumulativeWidth > center) {
                    setActiveIndex(i);
                    break;
                }
            }
        }
    };

    const scrollToChild = (index: number) => {
        setActiveIndex(index);
        const container = scrollMobileContainerRef.current;
        if (container && childrenWidth.length > index) {
            const offset = childrenWidth.slice(0, index).reduce((acc, width) => acc + width, 0) + (childrenWidth[index] / 2);
            const containerCenter = container.clientWidth / 2;
            container.scrollLeft = offset - containerCenter;
        }
    };

    // Desktop drag logic
    const startDragging = useCallback((e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft ?? 0);
    }, []);

    const stopDragging = useCallback(() => {
        setIsDragging(false);
    }, []);

    const onDrag = useCallback((e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0);
        const walk = (x - startX) * 3; // The multiplier can be adjusted
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    }, [isDragging, startX, scrollLeft]);

    return {
        isDragging,
        scrollContainerRef,
        scrollMobileContainerRef,
        startDragging,
        stopDragging,
        onDrag,
        handleScroll,
        scrollToChild,
        activeIndex,
        childrenWidth
    };
};

export default useSectionPlanes;