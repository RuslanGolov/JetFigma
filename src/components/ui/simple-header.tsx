'use client';

import React from 'react'; 
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';

export function SimpleHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Features',
			href: '#key-features',
		},
		{
			label: 'How it works',
			href: '#how-it-works',
		},
	];

    const ALPHA_URL = "https://docs.google.com/forms/d/e/1FAIpQLSce8tE7wTU47WhYTP1X6mcWBUHjFo7-ANa8tpxh9JpwI3h8IQ/viewform?usp=publish-editor";

	return (
		<header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
			<nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 text-black">
				<div className="flex items-center gap-2">
					<Image 
						src="/logo.png" 
						alt="DesignToCode Logo" 
						width={32} 
						height={32} 
						className="size-8"
					/>
					<p className="font-mono text-lg font-bold">DesignToCode</p>
				</div>
				<div className="hidden items-center gap-4 lg:flex">
					{links.map((link) => (
						<a
							key={link.label}
							className={buttonVariants({ variant: 'ghost' })}
							href={link.href}
						>
							{link.label}
						</a>
					))}
                    <a 
                        href={ALPHA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="gap-2">
                            Sign up for the Alpha <MoveRight className="w-4 h-4" />
                        </Button>
                    </a>
				</div>
				<Sheet open={open} onOpenChange={setOpen}>
					<Button size="icon" variant="outline" className="lg:hidden" asChild>
						<MenuToggle
							strokeWidth={2.5}
							open={open}
							onOpenChange={setOpen}
							className="size-6"
						/>
					</Button>
					<SheetContent
						className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
						showClose={false}
						side="left"
					>
						<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
							{links.map((link) => (
								<a
									key={link.label}
									className={buttonVariants({
										variant: 'ghost',
										className: 'justify-start',
									})}
									href={link.href}
                                    onClick={() => setOpen(false)}
								>
									{link.label}
								</a>
							))}
						</div>
						<SheetFooter className="px-4">
                            <a 
                                href={ALPHA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button className="w-full gap-2">
                                    Sign up for the Alpha <MoveRight className="w-4 h-4" />
                                </Button>
                            </a>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
