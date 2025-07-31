'use client';

import Image from 'next/image';

export default function Footer({content}) {

	return (
		<footer className='bg-white my-4 p-8 text-sm text-gray-600 border-t-2 border-t-[#001746]'>
			<div className='max-w-7xl mx-auto flex justify-between gap-6 mb-4'>
				<div>
					<div className='flex gap-5 items-center'>
						{content.badges.map((src, i) => (
							<Image
								key={i}
								src={src}
								alt={`Badge ${i + 1}`}
								width={160}
								height={80}
							/>
						))}
					</div>
					<p className='max-w-[24rem] mt-3'>{content.disclaimer}</p>
				</div>

				<div>
					<p className='font-extrabold pl-8 mb-4'>{content.newsletterText}</p>
					<form className='flex rounded-full bg-gray-100 py-2 px-4 '>
						<input
							type='email'
							placeholder='Enter your e-mail'
							className='w-[18rem] outline-none'
						/>
						<button
							type='submit'
							className='bg-gradient-to-r from-[#1177FE] to-[#001746] text-white px-10 py-3 font-semibold rounded-full'
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<div className='flex justify-between'>
				<div className='py-4 px-2 text-xs'>
					<p className='mb-2 font-extrabold'>{content.copyright}</p>
					<div className='flex flex-wrap justify-center gap-3 text-gray-500'>
						{content.legalLinks.map((link, i) => (
							<a
								key={i}
								href='#'
								className='underline'
							>
								{link}
							</a>
						))}
					</div>
				</div>
				<div className='space-y-3 text-center mr-3 md:text-right'>
					<div className='flex justify-center md:justify-end gap-2'>
						{content.socials.map((src, i) => (
							<Image
								key={i}
								alt={`Badge ${i + 1}`}
								width={30}
								height={20}
								src={src}
							/>
						))}
					</div>
					<p className='mt-2'>{content.email}</p>
				</div>
			</div>
		</footer>
	);
}
