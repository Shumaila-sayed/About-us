import Image from 'next/image';
import footerData from '../../data/footer/footer-data.json';
import Button from '../button/Button';

export default function Footer() {

	return (
		<footer className='bg-white my-4 p-8 text-sm text-gray-600 border-t-2 border-t-[#001746]'>
			<div className='max-w-7xl mx-auto md:flex md:justify-between gap-6 mb-4'>
				<div className='mb-6'>
					<div className='flex gap-5 items-center'>
						{footerData.badges.map((src, i) => (
							<Image
								key={i}
								src={src}
								alt={`Badge ${i + 1}`}
								width={160}
								height={80}
							/>
						))}
					</div>
					<p className='md:max-w-[24rem] mt-3 pl-3'>{footerData.disclaimer}</p>
				</div>

				<div className='mb-4'>
					<p className='font-extrabold text-black text-center md:pl-8 mb-4'>{footerData.newsletterText}</p>
					<form className='flex rounded-full w-[22rem] m-auto bg-gray-100 py-2 md:px-4 px-7'>
						<input
							type='email'
							placeholder='Enter your e-mail'
							className='md:w-[18rem] outline-none'
						/>
						<Button type='tertiary' variant='gradient' size='medium' buttonType='submit'>Subscribe</Button>
					</form>
				</div>
			</div>

			<div className='flex flex-col-reverse md:flex-row justify-between'>
				<div className='py-4 px-2 text-xs'>
					<p className='mb-2 font-extrabold md:text-left text-center'>{footerData.copyRightText}</p>
					<div className='flex flex-wrap justify-center gap-3 text-gray-500'>
						{footerData.legalLinks.map((link, i) => (
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
				<div className='space-y-3 text-center mr-3 mb-6 md:text-right'>
					<div className='flex justify-center md:justify-end gap-2'>
						{footerData.socialMedia.map((src, i) => (
							<Image
								key={i}
								alt={src.name}
								width={30}
								height={20}
								src={src.src}
							/>
						))}
					</div>
					<p className='mt-2'>{footerData.email}</p>
				</div>
			</div>
		</footer>
	);
}
