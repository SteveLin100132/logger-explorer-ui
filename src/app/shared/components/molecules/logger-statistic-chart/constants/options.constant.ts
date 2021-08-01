/**
 * 專案名稱： logger-explorer
 * 部門代號： ML8100
 * 檔案說明： 圖表配置常數
 * @CREATE Saturday, 17th July 2021 10:56:05 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { EChartsOption } from 'echarts';

/**
 * 圖表配置常數
 */
export const CHART_OPTIONS: () => EChartsOption = () => ({
  grid: {
    left: '0.5%',
    bottom: '12.5%',
    width: '99%',
    height: '70%',
  },
  legend: {
    show: true,
    top: '2.5%',
    left: '0.5%',
    icon: 'circle',
    itemWidth: 10,
    itemHeight: 10,
    itemStyle: {
      borderColor: '#444',
      borderWidth: 1,
    },
    textStyle: {
      color: '#ccc',
      fontSize: '10px',
      fontFamily: 'Consolas',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    textStyle: {
      color: '#ccc',
      fontFamily: 'Consolas',
    },
    borderColor: '#ccc',
    borderRadius: 0,
    backgroundColor: '#000000aa',
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: true,
      interval: 1,
      lineStyle: {
        color: '#444',
      },
    },
    axisLabel: {
      align: 'left',
    },
    data: [],
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        color: '#444',
      },
    },
    axisLabel: {
      show: false,
    },
  },
  dataZoom: [
    {
      id: 'dataZoomX',
      type: 'slider',
      top: '85%',
      start: 0,
      end: 50,
      borderColor: 'transparent',
      fillerColor: 'transparent',
      handleStyle: {
        opacity: 0,
      },
      moveHandleStyle: {
        color: 'rgba(100, 100, 100, 1)',
      },
      emphasis: {
        moveHandleStyle: {
          color: 'rgba(150, 150, 150, 1)',
        },
      },
      dataBackground: {
        lineStyle: {
          color: 'transparent',
        },
        areaStyle: {
          color: 'transparent',
        },
      },
      selectedDataBackground: {
        lineStyle: {
          color: 'transparent',
        },
        areaStyle: {
          color: 'transparent',
        },
      },
      xAxisIndex: [0],
      filterMode: 'filter',
    },
  ],
  series: [
    {
      name: 'INFO',
      data: [],
      type: 'bar',
      stack: 'logger',
      barWidth: 10,
      zlevel: 3,
      itemStyle: {
        color: '#44444499',
        borderColor: '#444444',
      },
    },
    {
      name: 'WARN',
      data: [],
      type: 'bar',
      stack: 'logger',
      barWidth: 10,
      zlevel: 2,
      itemStyle: {
        color: '#FFB20099',
        borderColor: '#FFB200',
      },
    },
    {
      name: 'ERROR',
      data: [],
      type: 'bar',
      stack: 'logger',
      barWidth: 10,
      zlevel: 1,
      itemStyle: {
        color: '#F5212D99',
        borderColor: '#F5212D',
      },
    },
  ],
});
