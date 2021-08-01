/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 載入動畫遮罩模組
 * @CREATE Sunday, 25th July 2021 9:28:59 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingMaskComponent } from './loading-mask.component';

/**
 * 載入動畫遮罩模組
 */
@NgModule({
  imports: [CommonModule],
  declarations: [LoadingMaskComponent],
  exports: [LoadingMaskComponent],
})
export class LoadingMaskModule {}
