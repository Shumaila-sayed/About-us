import Image from 'next/image';
import navData from '../../data/header/header-data.json';

export default function Header() {
	return (
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
						<a
							key={item.id}
							href='#'
							className='text-gray-700 hover:text-blue-600'
						>
							{item.label}
						</a>
					))}
				</nav>
				<div className='flex items-center space-x-2'>
					<button className='border border-[#001746] px-4 py-1 rounded-full text-[#001746] cursor-pointer'>
						{navData.ctaBook}
					</button>
					<button className='bg-blue-600 text-white min-w-30 px-4 py-1 rounded-full hover:bg-blue-700 cursor-pointer'>
						{navData.ctaLogin}
					</button>
				</div>
			</div>
		</header>
	);
}
