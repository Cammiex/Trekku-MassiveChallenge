import Navbar from '../../Fragments/Navbar/Navbar';
import Footer from '../../Fragments/Footer/Footer';
import CarouselSection from '../../Layout/HomePage/CarouselSection';
import PopularDestinationSection from '../../Layout/HomePage/PopularDestinationSection';
import OpenTripRecomendSection from '../../Layout/HomePage/OpenTripRecomendSection';
import TouristFeedbackSection from '../../Layout/HomePage/TouristFeedbackSection';
import ArticleTipsSection from '../../Layout/HomePage/ArticleTipsSection';
import FloatButton from '../../Fragments/FloatButton/FloatButton';

function HomePage() {
  return (
    <div className="">
      <Navbar />
      <FloatButton />
      <CarouselSection />
      <PopularDestinationSection />
      <OpenTripRecomendSection />
      <TouristFeedbackSection />
      <ArticleTipsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
