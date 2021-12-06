export interface IndicatorsData {
  autor: string;
  bitcoin: IndicatorInterface;
  dolar: IndicatorInterface;
  dolar_intercambio: IndicatorInterface;
  euro: IndicatorInterface;
  imacec: IndicatorInterface;
  ipc: IndicatorInterface;
  ivp: IndicatorInterface;
  libra_cobre: IndicatorInterface;
  tpm: IndicatorInterface;
  utm: IndicatorInterface;
  version: string;
}
export interface IndicatorInterface {
  codigo: string;
  fecha: string;
  nomber: string;
  unidad_medida: string;
  valor: number;
}
