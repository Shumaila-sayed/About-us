import Image from 'next/image';

export default function Header({ nav }) {
	return (
		<header className='bg-white py-4 sticky top-0 z-5 m-3'>
			<div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<Image
						src='/logo.svg'
						alt='CDS Logo'
						width={32}
						height={32}
					/>
					<span className='font-bold text-3xl text-[#001746]'>CDS</span>
				</div>
				<nav className='space-x-6 hidden md:block'>
					{nav.navLinks.map((item) => (
						<a
							key={item}
							href='#'
							className='text-gray-700 hover:text-blue-600'
						>
							{item}
						</a>
					))}
				</nav>
				<div className='flex items-center space-x-2'>
					<button className='border border-[#001746] px-4 py-1 rounded-full text-[#001746] cursor-pointer'>
						{nav.ctaBook}
					</button>
					<button className='bg-blue-600 text-white min-w-30 px-4 py-1 rounded-full hover:bg-blue-700 cursor-pointer'>
						{nav.ctaLogin}
					</button>
				</div>
			</div>
		</header>
	);
}
