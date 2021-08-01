/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 時間戳日誌解析器
 * @CREATE Sunday, 25th July 2021 1:00:39 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { LoggerResolver } from './logger-resolver';

/**
 * 時間戳日誌解析器
 */
export class TimestampLoggerResolver extends LoggerResolver {
  /**
   * 日誌標頭表示式
   */
  public header =
    /\[([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3})\]/g;

  /**
   * @param logger 日誌
   */
  constructor(protected logger: string) {
    super(logger);
  }

  /**
   * 執行日誌解析
   *
   * @method public
   * @param start 日誌要解析的起始索引值
   * @param end   日誌要解析的結束索引值
   * @return 回傳解析後的日誌
   */
  public resolve(start: number = 0, end: number | null = 150): string[] {
    const group = this.group(this.logger);
    end = end === null ? group.length : end;
    end++;
    return this.split(this.logger, group.slice(start, end));
  }
}
