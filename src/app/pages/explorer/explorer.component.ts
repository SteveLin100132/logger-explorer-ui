/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌探索頁面元件
 * @CREATE Saturday, 17th July 2021 11:16:32 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as $ from 'jquery';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { LoggerService } from './service';

/**
 * 日誌探索頁面元件
 */
@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.less'],
})
export class ExplorerComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * 訂閱項目
   */
  private subscription = new Subscription();
  /**
   * 日誌
   */
  public logger: string[] = [];
  /**
   * 過濾關鍵字後的日誌
   */
  public fileredLogger: string[] = [];
  /**
   * 關鍵字
   */
  public keyword = '';
  /**
   * 高亮字段
   */
  public highlight = '';
  /**
   * 日誌載入動畫
   */
  public loading = false;
  /**
   * 關鍵字輸入欄位
   */
  @ViewChild('keywordInput') public keywordInput?: ElementRef;

  /**
   * @param elementRef    元素參照
   * @param loggerService 日誌服務
   */
  constructor(
    private readonly elementRef: ElementRef,
    private readonly loggerService: LoggerService
  ) {}

  /**
   * 初始化
   *
   * @method public
   */
  public async ngOnInit(): Promise<void> {
    // 監聽載入訊號
    const loading$ = this.loggerService.onLoading
      .pipe(tap((loading) => console.log(loading)))
      .subscribe((loading) => (this.loading = loading));
    this.subscription.add(loading$);

    // 監聽日誌資料
    const logger$ = this.loggerService.onLoggerChanged
      .pipe(tap((log) => (this.fileredLogger = log)))
      .subscribe((log) => (this.logger = log));
    this.subscription.add(logger$);
  }

  /**
   * 當畫面渲染完畢時
   *
   * @method public
   */
  public ngAfterViewInit(): void {
    if (this.keywordInput) {
      const keydown$ = fromEvent(this.keywordInput.nativeElement, 'keydown')
        .pipe(debounceTime(500), distinctUntilChanged())
        .pipe(tap(() => (this.highlight = this.keyword)))
        .subscribe((event) => this.onKeywordKeydowned(event as KeyboardEvent));
      this.subscription.add(keydown$);
    }
  }

  /**
   * 當元件銷毀時
   *
   * @method public
   */
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * 畫面捲動至對應內容
   *
   * @method public
   * @param keyword 內容關鍵字
   */
  public scrollTo(keyword: string): void {
    const container = $(this.elementRef.nativeElement);
    container.find('.scroll-panel').scrollTop(0);
    const row = container
      .find(`.logger > *:contains('${keyword}'):last`)
      .parent();
    container
      .find('.scroll-panel')
      .animate({ scrollTop: row.position()?.top || 0 }, 500);
  }

  /**
   * 當關鍵字欄位按下時
   *
   * @method public
   * @param event 鍵盤事件
   */
  public onKeywordKeydowned(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      if (this.keyword !== '') {
        const regexp = new RegExp(this.keyword, 'g');
        this.fileredLogger = this.logger.filter((log) => log.match(regexp));
      } else {
        this.fileredLogger = this.logger;
      }
    }
  }
}
