import axios from "axios";

export async function getCities(value: string) {
  const newValue = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ /g, "-");

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${newValue}`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
