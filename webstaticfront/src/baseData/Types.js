import { number } from "prop-types";

//@flow
export type lineOption = {
  chart: chart,
  title: string,
  xAxis: xAxis,
  yAxis: any,
  legend: legend,
  tooltip: tooltip,
  rangeSelector: rangeSelector,
  credits: credits,
  exporting: exporting,
  series: any
};

type credits = {
  enabled: boolean
};

type exporting = {
  enabled: boolean
};

type xAxis = {
  type: string,
  dateTimeLabelFormats: dateTimeLabelFormats
};

type dateTimeLabelFormats = {
  day: string,
  millisecond: string,
  second: string,
  minute: string,
  hour: string,
  month: string,
  year: string,
  week: string
};

type tooltip = {
  dateTimeLabelFormats: dateTimeLabelFormats,
  xDateFormat: string,
  valueDecimals: number,
  changeDecimals: number
};

type legend = {
  enabled: boolean,
  verticalAlign: string,
  align: string
};
type rangeSelector = {
  enabled: boolean
};
type chart = {
  type: string,
  zoomType: string,
  marginTop: number
};

export type tab = {
  name: string,
  objectId: number
};

export type aggrid = {
  rowSelection: string,
  editType: string,
  defaultColDef: agDefaultColDef,
  localeText: agLanguage,
  headerHeight: number,
  rowHeight: number,
  paginationPageSize: number,
  pagination: boolean,
  rowModelType: string,  
  groupDefaultExpanded: number,
  autoGroupColumnDef: any,
  treeData: boolean,
  getDataPath: data => {},
};

type agDefaultColDef = {
  filter: boolean,
  sortable: boolean,
  editable: boolean,
  resizable: boolean,
  masterDetail: boolean,
  filterParams: agFilterParams
};

type agFilterParams = {
  applyButton: boolean, // 确认按钮
  clearButton: boolean, // 清空按钮
  suppressAndOrCondition: boolean, // 是否显示and
  filterOptions: Array<string> // 自定义都有哪些搜索条件
};

type agLanguage = {
  page: string,
  more: string,
  to: string,
  of: string,
  next: string,
  last: string,
  first: string,
  previous: string,
  loadingOoo: string,
  selectAll: string,
  searchOoo: string,
  blanks: string,
  filterOoo: string,
  applyFilter: string,
  equals: string,
  notEqual: string,
  lessThan: string,
  greaterThan: string,
  lessThanOrEqual: string,
  greaterThanOrEqual: string,
  inRange: string,
  contains: string,
  notContains: string,
  startsWith: string,
  endsWith: string,
  group: string,
  columns: string,
  filters: string,
  rowGroupColumns: string,
  rowGroupColumnsEmptyMessage: string,
  valueColumns: string,
  pivotMode: string,
  groups: string,
  values: string,
  pivots: string,
  valueColumnsEmptyMessage: string,
  pivotColumnsEmptyMessage: string,
  toolPanelButton: string,
  noRowsToShow: string,
  pinColumn: string,
  valueAggregation: string,
  autosizeThiscolumn: string,
  autosizeAllColumns: string,
  groupBy: string,
  ungroupBy: string,
  resetColumns: string,
  expandAll: string,
  collapseAll: string,
  toolPanel: string,
  export: string,
  csvExport: string,
  excelExport: string,
  pinLeft: string,
  pinRight: string,
  noPin: string,
  sum: string,
  min: string,
  max: string,
  none: string,
  count: string,
  average: string,
  copy: string,
  copyWithHeaders: string,
  ctrlC: string,
  paste: string,
  ctrlV: string,
  clearFilter: string
};
