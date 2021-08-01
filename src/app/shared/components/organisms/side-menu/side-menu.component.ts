/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 側邊選單元件
 * @CREATE Sunday, 18th July 2021 11:34:37 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemReaderService } from './service';

/**
 * 側邊選單元件
 */
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less'],
})
export class SideMenuComponent implements OnChanges {
  /**
   * 側邊選單清單項目
   */
  @Input() public menu: string[] = [];

  @Output() public resolved = new EventEmitter<boolean>();
  /**
   * 點擊顯示日誌事件
   */
  @Output() public display = new EventEmitter<string[]>();
  /**
   * 項目載入進度
   */
  public progress: (Observable<HttpEvent<string>> | undefined)[] = [];
  /**
   * 日誌檔案
   */
  public files: string[] = [];

  /**
   * @param menuItemReader 側邊選單項目讀取服務
   */
  constructor(private readonly menuItemReader: MenuItemReaderService) {}

  /**
   * 當輸入參數發生變化時
   *
   * @method public
   * @param changes 輸入參數
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('menu')) {
      this.progress = this.menu.map(() => undefined);
      this.files = this.menu.map(() => '');
    }
  }

  /**
   * 當下載時
   *
   * @method public
   * @param filename 檔案名稱
   * @param index    檔案索引值
   */
  public async onDownloaded(filename: string, index: number): Promise<void> {
    const progress$ = this.menuItemReader.fetchWithProgress(filename);
    this.progress[index] = progress$;
    progress$.subscribe((event) => {
      if (event.type === HttpEventType.Response) {
        this.files[index] = event.body || '';
      }
    });
  }

  /**
   * 當點擊顯示日誌時
   *
   * @method public
   * @param index 檔案索引值
   */
  public onExported(index: number): void {
    this.resolved.emit(true);
    setTimeout(() => {
      const logger = this.menuItemReader.resolve(this.files[index]);
      this.resolved.emit(false);
      this.display.emit(logger);
    }, 800);
  }
}
