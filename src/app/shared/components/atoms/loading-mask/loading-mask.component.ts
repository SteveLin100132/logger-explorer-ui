/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 載入動畫遮罩元件
 * @CREATE Sunday, 25th July 2021 9:28:59 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, Input, OnInit } from '@angular/core';

/**
 * 載入動畫遮罩元件
 */
@Component({
  selector: 'app-loading-mask',
  templateUrl: './loading-mask.component.html',
  styleUrls: ['./loading-mask.component.less'],
})
export class LoadingMaskComponent implements OnInit {
  /**
   * 顯示
   */
  @Input() public visible = false;
  /**
   * 載入文字
   */
  public loadingText = 'Loading(|)...';
  /**
   * 載入提示索引值
   */
  public loadingHintIndex = 0;
  /**
   * 載入提示
   */
  public loadingHint: string[] = [
    'Loading(|)...',
    'Loading(/)..',
    'Loading(—).',
    'Loading(\\)',
    'Loading(|).',
    'Loading(/)..',
    'Loading(—)...',
    'Loading(\\)..',
    'Loading(|).',
    'Loading(/)',
    'Loading(—).',
    'Loading(\\)..',
  ];

  /**
   * 初始化
   *
   * @method public
   */
  public ngOnInit(): void {
    setInterval(() => {
      this.loadingHintIndex =
        (this.loadingHintIndex + 1) % this.loadingHint.length;
      this.loadingText = this.loadingHint[this.loadingHintIndex];
    }, 300);
  }
}
