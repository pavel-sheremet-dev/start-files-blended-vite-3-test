import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';
import { getCountries } from '../service/countryApi';
import { useEffect, useState } from 'react';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        //  loading true
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        //  loading false
      }
    };
    asyncWrapper();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
export default Home;
