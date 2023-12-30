'use client'
import { useState, useEffect, RefObject } from 'react';

interface UseScrollToCardProps {
    numCards: number;
    externalRef: RefObject<HTMLDivElement>;
}

const useScrollToCard = ({ numCards, externalRef }: UseScrollToCardProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [childrenWidth, setChildrenWidth] = useState<number[]>([]);

    // Efecto para calcular el ancho de los hijos (childrenWidth)
    useEffect(() => {
        const container = externalRef.current;
        if (container) {
            const widths = Array.from(container.children).map(child => child.clientWidth);
            setChildrenWidth(widths);
        }
    }, [numCards, externalRef]);

    // Efecto para manejar el scroll
    useEffect(() => {
        const container = externalRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollLeft + container.clientWidth / 2;
            let cumulativeWidth = 0;
            for (let i = 0; i < childrenWidth.length; i++) {
                cumulativeWidth += childrenWidth[i];
                if (cumulativeWidth >= scrollPosition) {
                    setActiveIndex(i);
                    break;
                }
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [childrenWidth]); // Dependencia solo en childrenWidth

    const scrollToCard = (index: number) => {
        setActiveIndex(index);
        const container = externalRef.current;
        if (container && childrenWidth.length > index) {
            const offset = childrenWidth.slice(0, index).reduce((acc, width) => acc + width, 0) + (childrenWidth[index] / 2);
            const containerCenter = container.clientWidth / 2;
            container.scrollLeft = offset - containerCenter;
        }
    };

    return {
        activeIndex,
        scrollToCard
    };
};

export default useScrollToCard;