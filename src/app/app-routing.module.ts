/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： APP 路由模組
 * @CREATE Saturday, 17th July 2021 10:59:24 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * 路由設定
 */
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/explorer' },
  {
    path: 'explorer',
    loadChildren: () =>
      import('./pages/explorer/explorer.module').then(m => m.ExplorerModule),
  },
  {
    path: 'explorer/:filename',
    loadChildren: () =>
      import('./pages/explorer/explorer.module').then(m => m.ExplorerModule),
  },
];

/**
 * APP 路由模組
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
