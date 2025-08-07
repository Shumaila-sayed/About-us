"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroData from '../../../data/about/about-page-data.json';

export default function Hero() {
	return (
		<section
			className='bg-gradient-to-r from-[#1177FE] to-[#001746] text-white py-25 rounded-3xl relative overflow-hidden m-7'
			style={{
				boxShadow: 'inset 0 -90px 90px -70px #C4ECFE',
			}}
		>
			<div className='max-w-5xl mx-auto px-4 text-center relative z-2'>
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-xl uppercase mb-2'
				>
					{HeroData.aboutHeroSection.heading}
				</motion.h2>
				<motion.h3
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className='text-4xl md:text-5xl leading-tight px-53 mb-12'
				>
					{HeroData.aboutHeroSection.sectionHeading}
				</motion.h3>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className='text-4xl md:text-5xl leading-tight px-53 mb-12'
				>
					{HeroData.aboutHeroSection.subHeading}
				</motion.h1>
				<motion.button
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className='bg-[#7dd4ee8c] text-white mt-4 border-2 border-x-[#C4ECFE] border-y-0 px-6 py-3 flex max-w-fit mx-auto items-center gap-2 rounded-full'
				>
					{HeroData.aboutHeroSection.buttonText}{' '}
					<Image
						src='/arrow.png'
						alt='Arrow'
						width={30}
						height={20}
					/>
				</motion.button>
			</div>

			<div className='absolute left-105 top-1 w-30 z-3 '>
				<Image
					src='/server-center.svg'
					alt='Server center'
					width={150}
					height={150}
					className='drop-shadow-[0_0_40px_#C4ECFE]'
				/>
			</div>
			<div className='absolute right-8 bottom-12 w-50 z-4'>
				<Image
					src='/server-right.svg'
					alt='Server right'
					width={150}
					height={150}
					className='drop-shadow-[0_0_40px_#C4ECFE]'
				/>
			</div>

			<div className='absolute left-0.2 bottom-0.5 w-40 z-3'>
				<Image
					src='/server-left.svg'
					alt='Server left'
					width={150}
					height={150}
				/>
			</div>

			<div className='absolute left-1 top-1 w-1100 opacity-40 '>
				<Image
					src='/arch.svg'
					alt='Arch'
					width={1300}
					height={80}
				/>
			</div>
		</section>
	);
}
