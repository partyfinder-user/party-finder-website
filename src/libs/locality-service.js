export const loadLocalities = async () => {
  try {
    const response = await fetch('/mocks/localities.json');
    if (!response.ok) {
      throw new Error('Errore nel caricamento delle località');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Errore durante il caricamento delle località:', error);
    return [];
  }
};

export const searchCity = async (query) => {
  const allCities = await loadLocalities();
  const lowerQuery = query.toLowerCase();
  const cities = allCities.filter((c) => c.sigla !== 'EE');
  const startsWithMatches = cities.filter((city) => city.nome.toLowerCase().startsWith(lowerQuery));
  const filteredCities = startsWithMatches.sort((a, b) => a.nome.localeCompare(b.nome)).slice(0, 20);
  return filteredCities;
};
