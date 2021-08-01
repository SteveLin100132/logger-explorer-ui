/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌讀取服務
 * @CREATE Saturday, 17th July 2021 4:58:56 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LOGGER_PATH_TOKEN } from './log-path.token';
import { LogReader } from './log-reader';

/**
 * 日誌讀取服務
 */
@Injectable({
  providedIn: 'root',
})
export class LogReaderService implements LogReader {
  /**
   * @param http HTTP 請求
   * @param path 日誌存放路徑
   */
  constructor(
    private readonly http: HttpClient,
    @Inject(LOGGER_PATH_TOKEN) private readonly path: string
  ) {
    this.path = this.path.replace(/\/$/g, '');
  }

  /**
   * 解析日誌
   *
   * @method public
   * @param logger 日誌
   * @return 回傳解析後的日誌
   */
  public resolve(logger: string): string[] {
    let cloned = logger;
    const regexp =
      /\[([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3})\]/g;
    const group = logger.match(regexp);
    const rows: string[] = [];
    if (group) {
      group.reduce((curr, next) => {
        const placeholder = curr
          .split('')
          .map(() => '*')
          .join('');
        const start = cloned.trim().indexOf(curr);
        cloned = cloned.replace(curr, placeholder);
        const end = cloned.trim().indexOf(next);
        rows.push(logger.slice(start, end));
        return next;
      });
    }
    return rows;
  }

  /**
   * 抓取日誌
   *
   * @method public
   * @param filename 日誌檔案名稱
   * @return 回傳日誌
   */
  public fetch(filename: string): Observable<string[]> {
    const path = `${this.path}/logs/content/?filename=${filename}`;
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http
      .get(path, { headers, responseType: 'text' })
      .pipe(map((res) => this.resolve(res)));
  }
}
