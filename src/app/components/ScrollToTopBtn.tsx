'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollToTopBtn() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setIsVisible(false);
    };

    return (
        isVisible && (
            <button
                type="button"
                onClick={handleClick}
                className="fixed bottom-8 right-8 bg-white text-primary p-3
                rounded-full shadow-lg transition-opacity duration-300"
            >
                ↑ Top
            </button>
        )
    );
}
