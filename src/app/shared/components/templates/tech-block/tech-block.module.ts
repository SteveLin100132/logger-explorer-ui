/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 科技感區塊模組
 * @CREATE Friday, 23rd July 2021 10:47:29 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TechBlockComponent } from './tech-block.component';

/**
 * 科技感區塊模組
 */
@NgModule({
  imports: [CommonModule],
  declarations: [TechBlockComponent],
  exports: [TechBlockComponent],
})
export class TechBlockModule {}
