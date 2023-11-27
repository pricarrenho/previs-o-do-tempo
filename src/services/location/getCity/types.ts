export type CitiesType = {
  name: string;
  uf: string;
};

export type CountiesResponse = {
  nome: string;
  microrregiao: {
    mesorregiao: {
      UF: {
        sigla: string;
      };
    };
  };
};

export type DistrictsResponse = {
  nome: string;
  municipio: {
    microrregiao: {
      mesorregiao: {
        UF: {
          sigla: string;
        };
      };
    };
  };
};
