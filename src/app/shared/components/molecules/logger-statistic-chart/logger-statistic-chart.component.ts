/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌統計圖表元件
 * @CREATE Saturday, 17th July 2021 7:33:00 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { EChartsOption } from 'echarts';
import { CHART_OPTIONS } from './constants';
import { ChartLog } from './models';
import { LoggerStatisticService } from './service';

/**
 * 日誌統計圖表元件
 */
@Component({
  selector: 'app-logger-statistic-chart',
  templateUrl: './logger-statistic-chart.component.html',
  styleUrls: ['./logger-statistic-chart.component.less'],
})
export class LoggerStatisticChartComponent implements OnChanges {
  /**
   * 日誌
   */
  @Input() public logger: string[] = [];
  /**
   * 圖表點擊事件
   */
  @Output() public clicked = new EventEmitter<any>();
  /**
   * 圖表配置
   */
  public options: EChartsOption = CHART_OPTIONS();

  /**
   * @param statistic 日誌統計服務
   */
  constructor(private readonly statistic: LoggerStatisticService) {}

  /**
   * 當輸入參數發生變化時
   *
   * @method public
   */
  public ngOnChanges(): void {
    if (this.logger) {
      const logger = this.logger;
      const interval = 1000;
      const group = this.statistic.getChartFullIntervalEntity(logger, interval);
      this.options = CHART_OPTIONS();
      this.setXAxis(group);
      this.setDataZoom(group);
      this.setNormalSeries(group);
      this.setWarnSeries(group);
      this.setErrorSeries(group);
    }
  }

  /**
   * 設定 X 軸
   *
   * @method public
   * @param group 圖表資料
   */
  public setXAxis(group: ChartLog[]): void {
    (this.options as any).xAxis.data = group.map((item) => {
      return {
        value: item.time,
        textStyle: {
          color: '#ccc',
          fontFamily: 'Consolas',
        },
      };
    });
  }

  /**
   * 設定圖表縮放比例
   *
   * @method public
   * @param group 圖表資料
   */
  public setDataZoom(group: ChartLog[]): void {
    const total = group.length;
    const end = total > 100 ? Math.floor((100 / total) * 100) : 100;
    (this.options as any).dataZoom[0].end = end;
  }

  /**
   * 設定普通等級圖表數量
   *
   * @method public
   * @param group 圖表資料
   */
  public setNormalSeries(group: ChartLog[]): void {
    (this.options as any).series[0].data = group.map((item) => item.normal);
  }

  /**
   * 設定警告等級圖表數量
   *
   * @method public
   * @param group 圖表資料
   */
  public setWarnSeries(group: ChartLog[]): void {
    (this.options as any).series[1].data = group.map((item) => item.warn);
  }

  /**
   * 設定錯誤等級圖表數量
   *
   * @method public
   * @param group 圖表資料
   */
  public setErrorSeries(group: ChartLog[]): void {
    (this.options as any).series[2].data = group.map((item) => item.error);
  }

  /**
   * 當點擊圖表時
   *
   * @method public
   * @param param 點擊事件參數
   */
  public onChartClicked(param: any): void {
    this.clicked.emit(param);
  }
}
