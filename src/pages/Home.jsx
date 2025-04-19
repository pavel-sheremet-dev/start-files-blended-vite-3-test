import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    asyncWrapper();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
export default Home;
