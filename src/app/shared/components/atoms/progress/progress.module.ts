/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 進度條模組
 * @CREATE Saturday, 24th July 2021 12:24:14 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress.component';

/**
 * 進度條模組
 */
@NgModule({
  imports: [CommonModule],
  declarations: [ProgressComponent],
  exports: [ProgressComponent],
})
export class ProgressModule {}
