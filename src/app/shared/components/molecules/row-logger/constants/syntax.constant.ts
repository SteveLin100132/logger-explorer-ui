/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 句法設定常數
 * @CREATE Saturday, 17th July 2021 3:46:31 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { LoggerSyntax } from '../models';

/**
 * 句法設定常數
 */
export const DEFAULT_SYNTAX: LoggerSyntax[] = [
  {
    regexp: `/([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3})/g`,
    color: 'cyan',
  },
  {
    regexp: `/([[A-Z]{1,}])/g`,
    color: 'dark',
  },
  {
    regexp: `/(LOG)/g`,
    color: 'dark',
  },
  {
    regexp: `/(TRACE)/g`,
    color: 'dark',
  },
  {
    regexp: `/(DEBUG)/g`,
    color: 'yellow',
  },
  {
    regexp: `/(INFO)/g`,
    color: 'dark',
  },
  {
    regexp: `/(WARN)/g`,
    color: 'yellow',
  },
  {
    regexp: `/(ERROR)/g`,
    color: 'red',
  },
  {
    regexp: `/(FATAL)/g`,
    color: 'red',
  },
];
