export interface IPieChart {
  incoming: number;
  expense: number;
}

export interface IStackedChart {
  dates: Date[];
  incomings: number[];
  expenses: number[];
}

export interface IBarChart {
  dates: Date[];
  data: number[];
}
