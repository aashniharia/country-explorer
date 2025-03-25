type Currency = {
  name: string;
  symbol: string;
};
export interface Country {
  name: {
    common: string;
    official: string;
  };
  independent: boolean;
  currencies: { [key: string]: Currency };
  capital: string[];
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  region: string;
  flags: {
    [key: string]: string;
  };
  maps: {
    [key: string]: string;
  };
  population: number;
  car: {
    side: string;
  };
  continent: string;
}
