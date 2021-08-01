/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 進度遮罩元件
 * @CREATE Saturday, 24th July 2021 2:34:05 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpEvent } from '@angular/common/http';
import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * 進度遮罩元件
 */
@Component({
  selector: 'app-progress-mask',
  templateUrl: './progress-mask.component.html',
  styleUrls: ['./progress-mask.component.less'],
})
export class ProgressMaskComponent implements OnChanges {
  /**
   * 顯示進度遮罩
   */
  public visible = false;

  /**
   * 查詢進度
   */
  @Input() public progress?: Observable<HttpEvent<string>>;

  /**
   * 當輸入參數發生變化時
   *
   * @method public
   */
  public ngOnChanges(): void {
    if (this.progress) {
      this.visible = true;
    }
  }
}
