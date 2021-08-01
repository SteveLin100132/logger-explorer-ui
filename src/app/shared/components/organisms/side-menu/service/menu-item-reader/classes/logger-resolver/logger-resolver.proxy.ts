/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌解析器代理者
 * @CREATE Sunday, 25th July 2021 1:21:33 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { LoggerResolver } from './logger-resolver';

/**
 * 日誌解析器代理者
 */
export class LoggerResolverProxy extends LoggerResolver {
  /**
   * 日誌滾動解析前進筆數
   */
  private step = 100;
  /**
   * 日誌標頭表示式
   */
  public header = new RegExp('');

  /**
   * @param resolver 日誌解析器
   * @param start    日誌要解析的起始索引值
   * @param end      日誌要解析的結束索引值
   */
  constructor(
    protected resolver: LoggerResolver,
    protected start: number = 0,
    protected end: number = 100
  ) {
    super(resolver.log);
    this.step = this.end - this.start;
  }

  /**
   * 執行日誌解析
   *
   * @method public
   * @return 回傳解析後的日誌
   */
  public resolve(): string[] {
    const rows = this.resolver.resolve(this.start, this.end);
    this.start = this.end;
    this.end += this.step;
    return rows;
  }
}
