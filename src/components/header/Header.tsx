'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import navData from '../../data/header/header-data.json';
import Button from '../button/Button';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}
	return (
		<>
			<header className='bg-white py-4 sticky top-0 z-5 m-3'>
				<div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
					<div className='flex items-center gap-2'>
						<Image
							src={navData.logo.src}
							alt={navData.logo.name}
							width={32}
							height={32}
						/>
						<span className='font-bold text-3xl text-[#001746]'>CDS</span>
					</div>
					<nav className='space-x-6 hidden md:block'>
						{navData.navLinks.map((item) => (
							<Link
								key={item.id}
								href='#'
								className='text-gray-700 hover:text-blue'
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className='flex items-center space-x-3'>
						<Button type='secondary'>{navData.ctaBook}</Button>
						<Button type='primary'>{navData.ctaLogin}</Button>
						<div
							onClick={toggleMenu}
							className={`hamburger-wrapper md:hidden `}
							id='menuToggle'
						>
							<div
								className={`${styles.hamburger} ${
									isMenuOpen ? styles['is-active'] : ''
								}`}
							>
								<span className={styles.line}></span>
								<span className={styles.line}></span>
								<span className={styles.line}></span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className='md:hidden px-4 py-2 space-y-2 origin-top'
						initial={{ scaleY: 0, opacity: 0 }}
						animate={{ scaleY: 1, opacity: 1 }}
						exit={{ scaleY: 0, opacity: 0 }}
						transition={{ duration: 0.4, ease: 'easeInOut' }}
						style={{ transformOrigin: 'top' }}
					>
						{navData.navLinks.map((item) => (
							<Link
								key={item.id}
								href='#'
								className='block text-gray-700 hover:text-blue-600'
								onClick={() => setIsMenuOpen(false)} // Optional auto-close
							>
								{item.label}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
