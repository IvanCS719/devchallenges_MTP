import Section1 from '../section/my-team-page/section1';
import Footer from '../footer/footer';

export default function MyTeamPage() {
    return(
        <main className='min-h-screen px-3 pb-5 flex flex-col justify-between sm:justify-normal'>
            <Section1/>
            <Footer/>
        </main>
    )    
}