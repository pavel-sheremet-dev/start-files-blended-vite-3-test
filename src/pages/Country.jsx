import { Link, Outlet, useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null); // null | { id: "1", ...}

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    asyncWrapper();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Heading title="Country" bottom />
        {JSON.stringify(country)}
        <GoBackBtn />
        <Link to="test">Go to TEST</Link>
        <Outlet />
      </Container>
    </Section>
  );
};

export default Country;
