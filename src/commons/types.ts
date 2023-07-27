export type InputInfo = {
  inputName: string;
  label?: string;
  options?: object;
  errorsMessage?: string;
};

export type TripType = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
};
