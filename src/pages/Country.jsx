import { Link, Outlet, useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useEffect } from 'react';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const { countryId } = useParams();

  useEffect(() => {
    console.log(countryId);
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Heading title="Country" bottom />
        <GoBackBtn />
        <hr />
        <Link to="test">go to test</Link>

        <hr />
        <Outlet />
      </Container>
    </Section>
  );
};

export default Country;
