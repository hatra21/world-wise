import styles from "./styles/CountryList.module.css";
import { Spinner } from "./Spinner";
import { CountryItem } from "./CountryItem";
import { Message } from "./Message";
import { useCities } from "../contexts/CityContext";

export function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = cities.reduce((arr, curCity) => {
    if (!arr.map((el) => el.country).includes(curCity.country))
      return [...arr, { country: curCity.country, emoji: curCity.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
