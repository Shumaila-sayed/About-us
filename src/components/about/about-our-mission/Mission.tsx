import missionData from '../../../data/about/about-page-data.json'

export default function Mission() {
	return (
		<section className='bg-white py-12 px-6 text-center'>
			<h2 className='text-2xl md:text-4xl font-semibold text-[#2C2C2C] mb-4'>
				{missionData.aboutOurMission.sectionHeading}
			</h2>
			<h3 className='text-2xl md:text-4xl font-semibold text-[#2C2C2C] mb-4'>
				{missionData.aboutOurMission.subHeading}
			</h3>
			<p className='text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed mb-4'>
				{missionData.aboutOurMission.paragraph}
			</p>
			<p className='font-semibold text-[#1A1A1A] text-lg md:text-xl'>
				{missionData.aboutOurMission.subText}
			</p>
		</section>
	);
}
