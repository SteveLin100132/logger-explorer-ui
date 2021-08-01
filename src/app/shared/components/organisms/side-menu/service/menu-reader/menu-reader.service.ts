/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 側邊選單內容讀取服務
 * @CREATE Saturday, 24th July 2021 12:20:25 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuReader } from './menu-reader';

/**
 * 側邊選單內容讀取服務
 */
@Injectable({
  providedIn: 'root',
})
export class MenuReaderService implements MenuReader {
  /**
   * @param http HTTP 請求
   */
  constructor(private readonly http: HttpClient) {}

  /**
   * 抓取側邊選單內容
   *
   * @method public
   * @param path 查詢路徑
   * @return 回傳側邊選單內容
   */
  public fetch(path: string): Observable<string[]> {
    return this.http.get<string[]>(path);
  }
}
