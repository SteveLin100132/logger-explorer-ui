/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 圖表日誌資料實體
 * @CREATE Sunday, 18th July 2021 9:32:17 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { ChartLog } from './chart-log.model';

/**
 * 圖表日誌資料實體
 */
export class ChartLogEntity implements ChartLog {
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
   * @param log 圖表日誌資料
   */
  constructor(log?: Partial<ChartLog>) {
    Object.assign(this, log);
  }
}
