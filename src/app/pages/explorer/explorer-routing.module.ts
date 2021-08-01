/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 日誌探索頁面路由模組
 * @CREATE Saturday, 17th July 2021 11:21:11 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorerComponent } from './explorer.component';

/**
 * 路由設定
 */
const routes: Routes = [{ path: '', component: ExplorerComponent }];

/**
 * 日誌探索頁面路由模組
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorerRoutingModule {}
