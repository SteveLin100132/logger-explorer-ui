/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 科技感元件面板模組
 * @CREATE Sunday, 18th July 2021 9:33:50 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TechPanelComponent } from './tech-panel.component';

/**
 * 科技感元件面板模組
 */
@NgModule({
  imports: [CommonModule],
  declarations: [TechPanelComponent],
  exports: [TechPanelComponent],
})
export class TechPanelModule {}
