/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 圖表日誌時間間距建構者
 * @CREATE Sunday, 18th July 2021 9:38:56 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import dayjs from 'dayjs';
import { ChartTimeIntervalBuilder } from 'src/app/core';
import { ChartLog } from '../models';

/**
 * 圖表日誌時間間距建構者
 */
export class ChartLogTimeIntervalBuilder
  implements ChartLog, ChartTimeIntervalBuilder
{
  /**
   * 日誌時間戳
   */
  public timestamp = new Date().getTime();
  /**
   * 日誌時間
   */
  public time?: string;
  /**
   * 普通日誌數量
   */
  public normal = 0;
  /**
   * 警告日誌數量
   */
  public warn = 0;
  /**
   * 錯誤日誌數量
   */
  public error = 0;

  /**
   * 建構圖表時間間距
   *
   * @method public
   * @param timestamp 時間戳
   * @return 回傳物件本身
   */
  public build(timestamp: number): this {
    this.timestamp = timestamp;
    this.time = dayjs(timestamp).format('HH:mm:ss');
    return this;
  }
}
