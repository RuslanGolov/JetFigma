"use client";

import React, { useEffect, useRef } from 'react';

// Reusable BentoItem component
const BentoItem = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const item = itemRef.current;
        if (!item) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        };

        item.addEventListener('mousemove', handleMouseMove);

        return () => {
            item.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={itemRef} className={`bento-item bg-white ${className}`}>
            {children}
        </div>
    );
};

// Main Component
export const CyberneticBentoGrid = () => {
    return (
        <div className="main-container py-20 bg-slate-50">
            <div className="w-full max-w-6xl z-10 mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-black text-center mb-12">Core Features</h1>
                <div className="bento-grid">
                    <BentoItem className="col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-black">Real-time Analytics</h2>
                            <p className="mt-2 text-gray-600">Monitor your application's performance with up-to-the-second data streams and visualizations.</p>
                        </div>
                        <div className="mt-4 h-48 bg-neutral-100 rounded-lg flex items-center justify-center text-gray-400 border border-black/5">
                            Chart Placeholder
                        </div>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-black">Global CDN</h2>
                        <p className="mt-2 text-gray-600 text-sm">Deliver content at lightning speed, no matter where your users are.</p>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-black">Secure Auth</h2>
                        <p className="mt-2 text-gray-600 text-sm">Enterprise-grade authentication and user management built-in.</p>
                    </BentoItem>
                    <BentoItem className="row-span-2">
                        <h2 className="text-xl font-bold text-black">Automated Backups</h2>
                        <p className="mt-2 text-gray-600 text-sm">Your data is always safe with automated, redundant backups.</p>
                    </BentoItem>
                    <BentoItem className="col-span-1 md:col-span-2">
                        <h2 className="text-xl font-bold text-black">Serverless Functions</h2>
                        <p className="mt-2 text-gray-600 text-sm">Run your backend code without managing servers. Scale infinitely with ease.</p>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-black">CLI Tool</h2>
                        <p className="mt-2 text-gray-600 text-sm">Manage your entire infrastructure from the command line.</p>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
};
