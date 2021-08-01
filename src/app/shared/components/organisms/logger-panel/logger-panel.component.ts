/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌面板元件
 * @CREATE Saturday, 17th July 2021 11:36:09 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, Input } from '@angular/core';

/**
 * 日誌面板元件
 */
@Component({
  selector: 'app-logger-panel',
  templateUrl: './logger-panel.component.html',
  styleUrls: ['./logger-panel.component.less'],
})
export class LoggerPanelComponent {
  /**
   * 日誌
   */
  @Input() public logger: string[] = [];
  /**
   * 高亮字段
   */
  @Input() public highlight = '';
}
