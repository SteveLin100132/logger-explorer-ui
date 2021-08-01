/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌處理服務
 * @CREATE Saturday, 17th July 2021 11:09:41 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Inject, Injectable } from '@angular/core';
import { LoggerProcessor } from './logger-processor';
import { LOG_TIMESTAMP_REGEXP_TOKEN } from './logger-timestamp-regexp.token';

/**
 * 日誌等級
 */
export type LogLevel = 'normal' | 'warn' | 'error';

/**
 * 日誌處理服務
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerProcessorService implements LoggerProcessor {
  /**
   * @param timeRegexp 時間戳正規表達式
   */
  constructor(
    @Inject(LOG_TIMESTAMP_REGEXP_TOKEN) public readonly timeRegexp: RegExp,
  ) {}

  /**
   * 取得日誌時間戳
   *
   * @method public
   * @param logger 日誌
   * @return 回傳日誌時間戳
   */
  public getTimestamp(logger: string | string[]): number | number[] {
    if (typeof logger === 'string') {
      const timestamp = logger.match(this.timeRegexp);
      if (timestamp) {
        return new Date(timestamp[0]).getTime();
      } else {
        throw new Error('Missing timestamp');
      }
    } else {
      return logger
        .map(row => row.match(this.timeRegexp))
        .filter(timestamp => timestamp !== null && timestamp.length > 0)
        .map(timestamp => new Date((timestamp as string[])[0]).getTime());
    }
  }

  /**
   * 取得日誌的開始與結束時間
   *
   * @method public
   * @param logger 日誌
   * @return 回傳日誌的開始與結束時間
   */
  public getStatAndEndTime(logger: string[]): [number, number] {
    const timestamp = this.getTimestamp(logger) as number[];
    const start = timestamp.sort((a, b) => a - b)[0];
    const end = timestamp.sort((a, b) => b - a)[0];
    return [start, end];
  }

  /**
   * 取得當前日誌等級
   *
   * @method public
   * @param logger 日誌
   * @return 回傳當前日誌等級
   */
  public getLogLevel(logger: string): LogLevel {
    if (logger.match(/(INFO|TRACE|INFO)/g)) {
      return 'normal';
    } else if (logger.match(/(DEBUG|WARN)/g)) {
      return 'warn';
    } else if (logger.match(/(ERROR|FATAL)/g)) {
      return 'error';
    } else {
      return 'normal';
    }
  }
}
