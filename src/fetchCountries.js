const BASE_URL = 'https://restcountries.com/v3.1/name';

const fetchCountries = name => {
  const queryParams = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });

  return fetch(`${BASE_URL}/${name}?${queryParams}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Smth went wrong... ERROR!'));
  });
};

export default fetchCountries;