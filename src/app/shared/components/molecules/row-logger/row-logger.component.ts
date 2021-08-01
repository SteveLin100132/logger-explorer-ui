/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 單條日誌元件
 * @CREATE Saturday, 17th July 2021 11:40:14 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, Inject, Input, OnChanges } from '@angular/core';
import { DEFAULT_SYNTAX, TAG_MAPPING_TOKEN } from './constants';
import { LoggerSyntax, LoggerSyntaxEntity, LoggerTag } from './models';

/**
 * 單條日誌元件
 */
@Component({
  selector: 'app-row-logger',
  templateUrl: './row-logger.component.html',
  styleUrls: ['./row-logger.component.less'],
})
export class RowLoggerComponent implements OnChanges {
  /**
   * 日誌內容
   */
  @Input() public logger = '';
  /**
   * 日誌句法設定
   */
  @Input() public syntax: LoggerSyntax[] = DEFAULT_SYNTAX;
  /**
   * 高亮字段
   */
  @Input() public highlight = '';
  /**
   * 顯示
   */
  @Input() public visible = true;
  /**
   * 日誌類型
   */
  public loggerType = 'INFO';
  /**
   * 顯示用的日誌內容
   */
  public viewedLogger = '';

  /**
   * @param tagMap 標籤 Mapping 常數
   */
  constructor(
    @Inject(TAG_MAPPING_TOKEN) public readonly tagMap: Map<string, LoggerTag>
  ) {}

  /**
   * 當輸入參數發生變化時
   *
   * @method public
   */
  public ngOnChanges(): void {
    // 取得當前日誌類型
    this.pickLoggerType();
    // 渲染日誌句法
    this.renderSyntax();
  }

  /**
   * 取得當前日誌類型
   *
   * @method public
   */
  public pickLoggerType(): void {
    const logTypeRegExp = /(LOG|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)/g;
    const matchedType = this.logger.match(logTypeRegExp);
    this.loggerType =
      matchedType && matchedType.length > 0 ? matchedType[0] : 'INFO';
  }

  /**
   * 渲染日誌句法
   *
   * @method public
   */
  public renderSyntax(): void {
    // 特殊字段顏色處理
    this.syntax = this.syntax.map((syntax) => new LoggerSyntaxEntity(syntax));
    let logger = this.logger;
    this.syntax.forEach((syntax, index) => {
      const span = `<span class="${syntax.color}">$1</span>`;
      logger = logger.replace(syntax.regexp, span);
    });

    // 高亮字段顏色處理
    if (this.highlight !== '') {
      const highlight = `<span class="highlight">$1</span>`;
      const highlightRegExp = new RegExp(`(${this.highlight})`, 'g');
      logger = logger.replace(highlightRegExp, highlight);
    }

    this.viewedLogger = logger;
  }
}
