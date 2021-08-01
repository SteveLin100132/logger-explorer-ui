/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌面板模組
 * @CREATE Saturday, 17th July 2021 11:36:09 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RowLoggerModule } from '../../molecules';
import { LoggerPanelComponent } from './logger-panel.component';
import { LOGGER_PATH_TOKEN, LogReaderService } from './service';

/**
 * 日誌面板模組
 */
@NgModule({
  imports: [CommonModule, HttpClientModule, RowLoggerModule],
  declarations: [LoggerPanelComponent],
  exports: [LoggerPanelComponent],
  providers: [
    {
      provide: LOGGER_PATH_TOKEN,
      useValue: 'assets/mock/',
    },
    {
      provide: LogReaderService,
      useClass: LogReaderService,
    },
  ],
})
export class LoggerPanelModule {
  /**
   * 客製模組服務
   *
   * @method public
   * @param path      日誌存放路徑
   * @param logReader 日誌讀取服務
   * @return 回傳客製後的模組
   */
  public static forRoot(
    path: string = 'assets/mocks/',
    logReader?: LogReaderService,
  ): ModuleWithProviders {
    return {
      ngModule: LoggerPanelModule,
      providers: [
        {
          provide: LOGGER_PATH_TOKEN,
          useValue: path,
        },
        {
          provide: LogReaderService,
          useClass: logReader || LogReaderService,
        },
      ],
    };
  }
}
