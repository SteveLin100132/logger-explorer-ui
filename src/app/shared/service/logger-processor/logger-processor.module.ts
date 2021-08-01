/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌處理模組
 * @CREATE Saturday, 17th July 2021 11:08:01 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { LoggerProcessorService } from './logger-processor.service';
import { LOG_TIMESTAMP_REGEXP_TOKEN } from './logger-timestamp-regexp.token';

/**
 * 日誌處理模組
 */
@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [LoggerProcessorService],
})
export class LoggerProcessorModule {
  /**
   * 載入服務
   *
   * @method public
   * @param regexp 日誌時間戳正規表示式
   * @return 回傳模組
   */
  public static forRoot(
    regexp: RegExp = /([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3})/g,
  ): ModuleWithProviders {
    return {
      ngModule: LoggerProcessorModule,
      providers: [
        LoggerProcessorService,
        {
          provide: LOG_TIMESTAMP_REGEXP_TOKEN,
          useValue: regexp,
        },
      ],
    };
  }
}
