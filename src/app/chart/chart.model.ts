import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts/lib/color';

export class Chart {

  type: ChartType;
  colors: Color[];
  size: {
    width: number,
    height: number
  };
  options: any;

  data!: Array<number>;

  constructor(type: ChartType, colors: Array<any>, size: any, options: any, data: Array<number>) {
    this.type = type;
    this.colors = colors as Color[];
    this.size = size;
    this.options = options;
    this.data = data;
  }

}

