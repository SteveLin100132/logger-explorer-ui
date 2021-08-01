/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌服務
 * @CREATE Saturday, 24th July 2021 3:10:09 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

/**
 * 日誌服務
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   * 載入訂閱主題
   */
  public onLoading = new ReplaySubject<boolean>(1);
  /**
   * 日誌變化訂閱主題
   */
  public onLoggerChanged = new ReplaySubject<string[]>(1);
}
