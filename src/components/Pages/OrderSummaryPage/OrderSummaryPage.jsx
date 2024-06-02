import Footer from '../../Fragments/Footer/Footer';
import Navbar from '../../Fragments/Navbar/Navbar';
import HeroSection from '../../Layout/OrderPage/HeroSection';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import LeftFormSection from '../../Layout/OrderSummaryPage/LeftFormSection';
import FloatingCardSection from '../../Layout/OrderSummaryPage/FloatingCardSection';

const OrderSummaryPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <HeroSection />
        <div className="w-[1200px] flex flex-col mt-10">
          <Link
            to="/open-trip"
            className="flex items-center gap-5 w-fit h-[30px] select-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-neutral-80" />
            <h1 className="text-[20px] font-medium text-neutral-80">Kembali</h1>
          </Link>
          <div className="flex gap-10">
            {' '}
            <LeftFormSection />
            <FloatingCardSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderSummaryPage;