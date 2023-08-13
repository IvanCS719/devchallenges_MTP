export default function CardTeam({name, photo, job, mt}) {
    return (
        <div className={`flex ${mt}`}>
            <div className=''>
                <img src={photo} alt="" className='w-[8.66994rem] md:w-[11.5rem] lg:w-[14.875rem] mb-[.63rem] lg:mb-3' />
                <span className='text-sm md:text-lg font-semibold'>{name}</span>
            </div>
            <div className='ms-1'>
                <span className='text-[0.625rem] md:text-xs font-PTSerif font-normal uppercase' style={{ writingMode: 'vertical-rl' }}>
                    {job}
                </span>

            </div>
        </div>
    )
}