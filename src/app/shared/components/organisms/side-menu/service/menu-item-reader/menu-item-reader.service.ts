/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 側邊選單項目讀取服務
 * @CREATE Saturday, 24th July 2021 12:54:23 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpClient, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { LoggerResolverProxy, TimestampLoggerResolver } from './classes';
import { MENU_ITEM_PATH_TOKEN } from './menu-item-path.token';

/**
 * 側邊選單項目讀取服務
 */
@Injectable({
  providedIn: 'root',
})
export class MenuItemReaderService {
  /**
   * API 路徑
   */
  private path = 'http://localhost:3001';

  /**
   * @param http HTTP 請求
   * @param host 側邊選單項目查詢 API 路徑
   */
  constructor(
    private readonly http: HttpClient,
    @Inject(MENU_ITEM_PATH_TOKEN) private readonly host: Promise<string>
  ) {
    this.host.then((path) => (this.path = path.replace(/\/$/g, '')));
  }

  /**
   * 抓取項目內容並帶有抓取進度
   *
   * @method public
   * @param filename 檔案名稱
   * @return 回傳項目內容並帶上抓取進度
   */
  public fetchWithProgress(filename: string): Observable<HttpEvent<string>> {
    const path = `${this.path}/logs/content?filename=${filename}`;
    const reportProgress = true;
    const responseType = 'text';
    return this.http
      .get(path, { observe: 'events', reportProgress, responseType })
      .pipe(shareReplay(1));
  }

  /**
   * 解析日誌
   *
   * @method public
   * @param logger 日誌
   * @return 回傳解析後的日誌
   */
  public resolve(logger: string): string[] {
    return new TimestampLoggerResolver(logger).resolve(0, null);
  }

  /**
   * 捲動解析日誌(用於日誌內容過多)
   *
   * @method public
   * @param logger 日誌
   * @return 回傳解析後的日誌
   */
  public scroll(logger: string): Observable<string[]> {
    const loggerResolver = new TimestampLoggerResolver(logger);
    const proxy = new LoggerResolverProxy(loggerResolver, 0, 100);
    let current: string[] = proxy.resolve();
    return new Observable<string[]>((subject) => {
      while (current.length > 0) {
        current = proxy.resolve();
        subject.next(current);
      }
      subject.complete();
    });
  }
}
