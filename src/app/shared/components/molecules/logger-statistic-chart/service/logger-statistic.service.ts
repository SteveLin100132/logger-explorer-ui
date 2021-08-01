/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌統計服務
 * @CREATE Sunday, 18th July 2021 12:07:28 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';
import { Time } from 'src/app/shared/classes';
import { LoggerProcessorService } from 'src/app/shared/service';
import { ChartLogTimeIntervalBuilder } from '../classes';
import { ChartLog } from '../models';

/**
 * 日誌統計服務
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerStatisticService {
  /**
   * @param logProcessor 日誌處理服務
   */
  constructor(private readonly logProcessor: LoggerProcessorService) {}

  /**
   * 取得日誌起訖時間中的每個時間間距
   *
   * @method public
   * @param logger   日誌
   * @param interval 時間間距(單位: 毫秒)
   * @return 回傳日誌起訖時間中的每個時間間距
   */
  public getChartFullInterval(logger: string[], interval = 1000): number[] {
    // 取得日誌的開始與結束時間
    let [start, end] = this.logProcessor.getStatAndEndTime(logger);
    start = Time.clearByInterval(start, interval);
    end = Time.clearByInterval(end, interval);

    // 插入起訖時間間的時間間距
    const group = [start];
    let index = start;
    while (index < end) {
      index += interval;
      group.push(index);
    }
    return group;
  }

  /**
   * 取得日誌起訖時間中的每個時間間距的圖表資料實體
   *
   * @method public
   * @param logger   日誌
   * @param interval 時間間距(單位: 毫秒)
   * @return 回傳日誌起訖時間中的每個時間間距的圖表資料實體
   */
  public getChartFullIntervalEntity(
    logger: string[],
    interval = 1000,
  ): ChartLog[] {
    // 建立時間間距初始資料實體
    const group = this.getChartFullInterval(logger, interval);
    let entities = group.map(i => new ChartLogTimeIntervalBuilder().build(i));

    // 根據日誌等級更新數量
    logger.forEach(row => {
      const timestamp = this.logProcessor.getTimestamp(row) as number;
      const time = Time.clearByInterval(timestamp, interval);
      const logLevel = this.logProcessor.getLogLevel(row);
      entities = entities.map(entity => {
        // 不符時間則不處理
        if (time !== entity.timestamp) {
          return entity;
        }

        if (logLevel === 'normal') {
          entity.normal++;
        } else if (logLevel === 'warn') {
          entity.warn++;
        } else if (logLevel === 'error') {
          entity.error++;
        }

        return entity;
      });
    });
    return entities;
  }
}
