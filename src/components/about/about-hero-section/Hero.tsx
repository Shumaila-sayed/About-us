"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroData from '../../../data/about/about-page-data.json';
import Button from '../../button/Button';

export default function Hero() {
	return (
		<section
			className='bg-gradient-to-r from-[#1177FE] to-[#001746]  text-white py-25 rounded-3xl relative overflow-hidden m-7'
			style={{
				boxShadow: 'inset 0 -90px 90px -70px #C4ECFE',
			}}
		>
			<div className='md:max-w-5xl mx-auto md:mt-0 mt-[-12px] px-4 text-center relative z-2'>
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='md:text-3xl text-2xl mb-2'
				>
					{HeroData.aboutHeroSection.heading}
				</motion.h2>
				<motion.h3
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className='text-3xl md:text-5xl leading-tight md:px-42  font-semibold'
				>
					{HeroData.aboutHeroSection.sectionHeading}
				</motion.h3>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className='text-3xl font-bold md:text-5xl leading-tight md:px-42 mb-4 md:mb-12'
				>
					{HeroData.aboutHeroSection.subHeading}
				</motion.h1>
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
				>
					<Button type='tertiary' variant='btn-transparent' icon='/arrow.png'>{HeroData.aboutHeroSection.buttonText}</Button>
				</motion.div>
			</div>

			<div className='absolute md:left-100 left-20 top-1 w-30 z-3 transition-transform duration-300 hover:scale-110'>
				<div className='relative w-[80px] md:w-[170px] h-[80px]  md:h-[170px]'>
					<Image
						src='/server-center.svg'
						alt='Server center'
						fill
						className='drop-shadow-[0_0_40px_#C4ECFE] object-contain'
					/>
				</div>
			</div>
			<div className='absolute md:left-250  left-70 md:bottom-12 bottom-5 w-50 z-4 transition-transform duration-300 hover:scale-110'>
				<div className='relative w-[80px]  md:w-[250px] h-[80px]  md:h-[250px]'>
					<Image
						src='/server-right.svg'
						alt='Server right'
						fill
						className='drop-shadow-[0_0_40px_#C4ECFE] object-contain'
					/>
				</div>
			</div>

			<div className='absolute md:left-[-30] left-[-14] bottom-0 w-40 z-3 transition-transform duration-300 hover:scale-110'>
				<div className='relative w-[80px] md:w-[250px] h-[80px] md:h-[250px]'>
					<Image
						src='/server-left.svg'
						alt='Server left'
						fill
						className='drop-shadow-[0_0_40px_#C4ECFE] object-contain'
					/>
				</div>
			</div>

			<div className='absolute left-1 top-1 w-1100 opacity-40 '>
				<div className='relative w-[350px] md:w-[1300px] h-[320px]  md:h-[600px]'>
					<Image
						src='/arch.svg'
						alt='Arch'
						fill
						className='object-contain'
					/>
				</div>
			</div>
		</section>
	);
}
