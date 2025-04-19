import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';

import { fetchByRegion } from '../service/countryApi';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [params, setParams] = useSearchParams();
  // const [region, setRegion] = useState('');

  const region = params.get('region') ?? '';

  useEffect(() => {
    if (!region) return;
    const asyncWrapper = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    asyncWrapper();
  }, [region]);

  const getRegion = region => {
    params.set('region', region);
    setParams(params);
    // setRegion(region);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={getRegion} />
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
