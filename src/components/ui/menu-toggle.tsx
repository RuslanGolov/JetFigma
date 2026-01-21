'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MenuToggleProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	className?: string;
	strokeWidth?: number;
}

export function MenuToggle({
	open,
	onOpenChange,
	className,
	strokeWidth = 2,
}: MenuToggleProps) {
	return (
		<button
			onClick={() => onOpenChange(!open)}
			className={cn('relative flex items-center justify-center', className)}
			aria-label="Toggle menu"
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					animate={open ? { d: 'M 5 5 L 19 19' } : { d: 'M 4 6 L 20 6' }}
					transition={{ duration: 0.3 }}
					stroke="currentColor"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
				/>
				<motion.path
					animate={open ? { opacity: 0 } : { opacity: 1, d: 'M 4 12 L 20 12' }}
					transition={{ duration: 0.3 }}
					stroke="currentColor"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
				/>
				<motion.path
					animate={open ? { d: 'M 5 19 L 19 5' } : { d: 'M 4 18 L 20 18' }}
					transition={{ duration: 0.3 }}
					stroke="currentColor"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
				/>
			</svg>
		</button>
	);
}
