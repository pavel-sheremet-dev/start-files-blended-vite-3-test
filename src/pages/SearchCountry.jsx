import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const SearchCountry = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const region = queryParams.get('region');

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!region) return;

    const asyncWrapper = async () => {
      try {
        //  loading true
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        //  loading false
      }
    };
    asyncWrapper();
  }, [region]);

  const getRegion = region => {
    // queryParams.set('region', region);
    // setQueryParams(queryParams);

    setQueryParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={getRegion} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
