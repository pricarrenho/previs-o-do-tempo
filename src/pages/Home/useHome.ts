import { useCallback, useEffect, useState } from "react";
import { getCities } from "../../services/location/getCity";
import { getWeatherBySearch } from "../../services/weather/getWeatherBySearch";
import { CardData } from "../../services/weather/getWeatherBySearch/types";
import { CitiesType } from "../../services/location/getCity/types";

export const useHome = () => {
  const [city, setCity] = useState("");
  const [allCities, setAllCities] = useState<CitiesType[]>();
  const [isFetchingCities, setIsFetchingCities] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CardData>();

  const handleCloseCard = () => {
    setCity("");
    setSelectedCity(undefined);
  };

  const getAllCities = useCallback(async () => {
    if (allCities || isFetchingCities) return;

    setIsFetchingCities(true);
    const data = await getCities();
    setAllCities(data);
    setIsFetchingCities(false);
  }, [allCities, isFetchingCities]);

  useEffect(() => {
    getAllCities();
  }, [getAllCities]);

  useEffect(() => {
    setSelectedCity(undefined);

    if (city.length >= 3) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [city]);

  const handleSelectCity = async (value: CitiesType) => {
    setCity(value.name);

    const data = await getWeatherBySearch(value);
    setSelectedCity(data);
  };

  const handleInputFocus = () => {
    if (city.length >= 3) {
      setShowDropdown(true);
    }
  };

  const handleInputBlur = () => {
    setShowDropdown(false);
  };

  return {
    city,
    allCities,
    showDropdown,
    selectedCity,
    setCity,
    handleCloseCard,
    handleSelectCity,
    handleInputFocus,
    handleInputBlur,
  };
};
