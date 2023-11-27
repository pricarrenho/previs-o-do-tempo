import axios from "axios";
import { CitiesType, CountiesResponse, DistrictsResponse } from "./types";

export async function getCities(): Promise<CitiesType[] | undefined> {
  const countiesUrl =
    "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";

  const districtsUrl =
    "https://servicodados.ibge.gov.br/api/v1/localidades/distritos";

  const promiseCounties = axios.get(countiesUrl);
  const promiseDistricts = axios.get(districtsUrl);

  try {
    const [counties, districts] = await Promise.all([
      promiseCounties,
      promiseDistricts,
    ]);

    const countiesFormatted = counties.data.map((item: CountiesResponse) => ({
      name: item.nome,
      uf: item.microrregiao.mesorregiao.UF.sigla,
    }));

    const districtsFormatted = districts.data.map(
      (item: DistrictsResponse) => ({
        name: item.nome,
        uf: item.municipio.microrregiao.mesorregiao.UF.sigla,
      })
    );

    const result: CitiesType[] = [];

    [...countiesFormatted, ...districtsFormatted].forEach((item) => {
      if (result.filter((value) => value?.name === item.name).length) return;

      result.push(item);
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}
