import CardTeam from './components/cardTeam';
import photo1 from '../../../assets/my-team-page/photo1.png';
import photo2 from '../../../assets/my-team-page/photo2.png';
import photo3 from '../../../assets/my-team-page/photo3.png';
import photo4 from '../../../assets/my-team-page/photo4.png';
import photo5 from '../../../assets/my-team-page/photo5.png';
import photo6 from '../../../assets/my-team-page/photo6.png';

export default function Section1() {
    return (
        <section className="w-full flex flex-col sm:flex-grow items-center justify-center py-[4.44rem] lg:py-24">
            <div className='w-full sm:w-[40rem] md:w-[46rem] lg:w-[60rem] lg:px-9 sm:flex mb-14 lg:mb-24'>
                <div className='w-full md:w-3/6'>
                    <h3 className='text-4xl font-bold mb-10 font-PTSerif'>
                        The creative crew
                    </h3>
                </div>
                <div className='w-full md:w-3/6 lg:ms-10'>
                    <p className='text-lg font-semibold uppercase mb-[.66rem]'>WHO WE ARE</p>
                    <p className='text-sm md:text-lg w-[19rem] md:w-[24rem] leading-normal font-poppins font-normal'>
                        We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.
                    </p>
                </div>
            </div>
            <div className="w-full sm:w-[42rem] md:w-[48rem] lg:w-[60rem] grid grid-cols-2 sm:grid-cols-3 gap-y-3 sm:gap-y-8 justify-items-center">

                <CardTeam name={'Bill Mahoney'} photo={photo1} job={'Product owner'} mt={'mt-0'} />
                <CardTeam name={'Saba Cabrera'} photo={photo2} job={'Art director'} mt={'mt-12 sm:mt-24'} />
                <CardTeam name={'Shae Le'} photo={photo3} job={'Tech Lead'} mt={'mt-0'} />
                <CardTeam name={'Skylah Lu'} photo={photo4} job={'UX Designer'} mt={'mt-12 sm:mt-0'} />
                <CardTeam name={'Griff Richards'} photo={photo5} job={'Developer'} mt={'sm:mt-24'} />
                <CardTeam name={'Stan John'} photo={photo6} job={'Deverloper'} mt={'mt-12 sm:mt-0'} />

            </div>
        </section>
    )
}