/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 單調日誌元件模組
 * @CREATE Saturday, 17th July 2021 11:40:14 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TAG_MAPPING, TAG_MAPPING_TOKEN } from './constants';
import { RowLoggerComponent } from './row-logger.component';

/**
 * 單調日誌元件模組
 */
@NgModule({
  imports: [CommonModule, NzTagModule, NzIconModule],
  declarations: [RowLoggerComponent],
  exports: [RowLoggerComponent],
  providers: [
    {
      provide: TAG_MAPPING_TOKEN,
      useValue: TAG_MAPPING,
    },
  ],
})
export class RowLoggerModule {}
