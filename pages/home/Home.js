import Announcement from '../../components/announcement/Announcement';
import Banner2 from '../../components/banner2/Banner2';
import Categories from '../../components/categories/Categories';
import Footer from '../../components/footer/Footer';
import SalaryCalcu from '../../components/salaryCalculator/SalaryCalculator';
function Home() {
    return (
        <>
            <Announcement />
            <Banner2 />
            <Categories />
            <SalaryCalcu />
            <Footer/>
        </>
    );
}

export default Home;