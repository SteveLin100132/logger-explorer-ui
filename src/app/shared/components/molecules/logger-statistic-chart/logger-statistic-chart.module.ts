/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌統計圖表模組
 * @CREATE Saturday, 17th July 2021 7:33:00 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { LoggerProcessorModule } from 'src/app/shared/service';
import { LoggerStatisticChartComponent } from './logger-statistic-chart.component';
import { LoggerStatisticService } from './service';

/**
 * 日誌統計圖表模組
 */
@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    LoggerProcessorModule.forRoot(
      /([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3})/g,
    ),
  ],
  declarations: [LoggerStatisticChartComponent],
  exports: [LoggerStatisticChartComponent],
  providers: [LoggerStatisticService],
})
export class LoggerStatisticChartModule {}
