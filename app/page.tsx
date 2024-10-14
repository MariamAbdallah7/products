import Container from 'react-bootstrap/Container';
import Categories from "./(components)/Categories/caregories";
import Description from "./(components)/Description/description";
import FeaturedProducts from "./(components)/featured-products/featured-products";
import HeroSection from "./(components)/heroSection/heroSection";

export default function Home() {
  return (
  
    <>
      <HeroSection/>
     <Container>
       <Description/>
       <Categories/>
       <FeaturedProducts/>
     </Container>
  
    </>
    
  );
}
