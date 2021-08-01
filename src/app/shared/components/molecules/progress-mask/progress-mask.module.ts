/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 進度遮罩模組
 * @CREATE Saturday, 24th July 2021 2:34:05 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressModule } from '../../atoms';
import { ProgressMaskComponent } from './progress-mask.component';

/**
 * 進度遮罩模組
 */
@NgModule({
  imports: [CommonModule, ProgressModule],
  declarations: [ProgressMaskComponent],
  exports: [ProgressMaskComponent],
})
export class ProgressMaskModule {}
