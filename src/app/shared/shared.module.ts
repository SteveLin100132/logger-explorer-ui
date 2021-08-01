/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 共享功能模組
 * @CREATE Saturday, 17th July 2021 11:06:08 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  LoggerPanelModule,
  LoggerStatisticChartModule,
  RowLoggerModule,
} from './components';
import { LoggerProcessorModule } from './service';

/**
 * 共享功能模組
 */
@NgModule({
  imports: [
    CommonModule,
    LoggerStatisticChartModule,
    RowLoggerModule,
    LoggerPanelModule,
    LoggerProcessorModule,
  ],
  declarations: [],
  exports: [
    LoggerStatisticChartModule,
    RowLoggerModule,
    LoggerPanelModule,
    LoggerProcessorModule,
  ],
})
export class SharedModule {}
