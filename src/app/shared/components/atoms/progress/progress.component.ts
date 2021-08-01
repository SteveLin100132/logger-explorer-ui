/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 進度條元件
 * @CREATE Saturday, 24th July 2021 12:24:14 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs';

/**
 * 進度條元件
 */
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less'],
})
export class ProgressComponent implements OnChanges, AfterViewChecked {
  /**
   * 查詢進度
   */
  @Input() public progress?: Observable<HttpEvent<string>>;
  /**
   * 進度完成事件
   */
  @Output() public completed = new EventEmitter<void>();
  /**
   * 進度長度
   */
  public length = 0;

  /**
   * @param elementRef 元素參照
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * 當輸入參數發生變化時
   *
   * @method public
   */
  public ngOnChanges(): void {
    if (this.progress) {
      this.progress.subscribe((event) => this.calcProgress(event));
    }
  }

  /**
   * 檢查畫面渲染後
   *
   * @method public
   */
  public ngAfterViewChecked(): void {
    const progressTotalWidth = $(this.elementRef.nativeElement).width() || 0;
    const progressFinalWidth = $(this.elementRef.nativeElement)
      .find('.progress')
      .width();
    if (progressTotalWidth - 2 === progressFinalWidth) {
      setTimeout(() => this.completed.emit(), 500);
    }
  }

  /**
   * 計算當前進度
   *
   * @method public
   * @param event HTTP 事件
   */
  public calcProgress(event: HttpEvent<string>): void {
    if (event.type === HttpEventType.DownloadProgress) {
      this.length = event.total ? (event.loaded / event.total) * 100 : 0;
    }
  }
}
