"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

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
        <div id="key-features" className="main-container py-20 bg-slate-50">
            <div className="w-full max-w-6xl z-10 mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-black text-center mb-12">Key Features</h1>
                <div className="bento-grid">
                    <BentoItem className="col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-black">Supports All Major UI Frameworks </h2>
                            <p className="mt-2 text-gray-600">Supports all major UI frameworks and generates code that follows their native patterns and best practices.</p>
                        </div>
                        <div className="mt-4 h-auto min-h-[8rem] bg-neutral-100 rounded-lg flex items-center justify-center border border-black/5 overflow-hidden p-4">
                            <div className="grid grid-cols-5 md:grid-cols-9 gap-4 items-center w-full justify-items-center">
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                                    alt="React" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" 
                                    alt="Vue.js" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" 
                                    alt="Angular" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" 
                                    alt="Flutter" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" 
                                    alt="SwiftUI" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" 
                                    alt="Electron" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg" 
                                    alt="Tauri" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg" 
                                    alt="Qt" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                                <Image 
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" 
                                    alt="Svelte / SvelteKit" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                    </BentoItem>
                    <BentoItem>
                        <div className="flex items-center gap-2">
                            <Image 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                                alt="VS Code"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <h2 className="text-xl font-bold text-black">VS Code supported</h2>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">Project-aware UI generation, now available inside Visual Studio Code.</p>
                    </BentoItem>
                    <BentoItem>
                        <div className="flex items-center gap-2">
                            <Image 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg"
                                alt="JetBrains"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <h2 className="text-xl font-bold text-black">Native to Your JetBrains IDE</h2>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm">Seamlessly integrated with IntelliJ IDEA, WebStorm, PyCharm, Android Studio, and the JetBrains ecosystem</p>
                    </BentoItem>
                    <BentoItem className="row-span-2">
                        <h2 className="text-xl font-bold text-black">Build consistent UI at scale</h2>
                        <p className="mt-2 text-gray-600 text-sm">Every implemented design follows the same rules, keeping the UI consistent across the entire project.</p>
                    </BentoItem>
                    <BentoItem className="col-span-1 md:col-span-2">
                        <h2 className="text-xl font-bold text-black">Verify existing UI components</h2>
                        <p className="mt-2 text-gray-600 text-sm">Detect whether required components already exist in the codebase and reuse them instead of creating new ones.</p>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-black">Enforce project style guides</h2>
                        <p className="mt-2 text-gray-600 text-sm">Ensure colors, typography, spacing, and theming follow your project’s design system and style guidelines.</p>
                    </BentoItem>
                    <BentoItem>
                        <h2 className="text-xl font-bold text-black">Secure Auth</h2>
                        <p className="mt-2 text-gray-600 text-sm">Enterprise-grade authentication and user management built-in.</p>
                    </BentoItem>
                </div>
            </div>
        </div>
    );
};
