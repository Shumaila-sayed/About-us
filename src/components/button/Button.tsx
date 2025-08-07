import React from 'react';
import Image from 'next/image';

interface ButtonProps {
	type?: 'primary' | 'secondary';
	variant?: 'normal' | 'gradient' | 'btn-transparent';
	size?: 'small' | 'medium' | 'large';
	icon?: string;
	onClick?: () => void;
	children: React.ReactNode;
	className?: string;
	buttonType?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
	type = 'primary',
	icon,
	onClick,
	children,
	size = 'small',
	variant = 'normal',
	className,
	buttonType = 'button',
}) => {
	const baseClass = [
		'rounded-full text-[14px] md:text-[16px] cursor-pointer px-4 py-1',
		className,
		variant,
	]?.join(' ');

	const buttonTypeClasses = {
		primary: 'bg-[#1177FE] text-white min-w-25 border border-[#1177FE]',
		secondary: 'border border-[#001746] text-[#001746]',
		tertiary: '',
	};

	const buttonSizeClasses = {
		small: '',
		medium: '',
		large: '',
	};

	const classes = `${baseClass} ${buttonTypeClasses[type]} ${buttonSizeClasses[size]}`;

	return (
		<button
			className={`${classes}`}
			onClick={onClick}
			type={buttonType}
		>
			<p className='text-[14px] md:text-[16px]'>
				{children}{' '}
				{icon && (
					<Image
						src={icon}
						alt='icon'
						height={11}
						width={11}
					/>
				)}
			</p>
		</button>
	);
};

export default Button