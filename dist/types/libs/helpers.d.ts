export function mergeDeep(a?: {}, b?: {}): any;
export function getErrorMessage(error: any): any;
export function formatDate(value: any, format: any, from: any, utc?: boolean): any;
export function interpolate(string: any, scope: any, def: any): any;
export function queryString(params: any, join: any, data: any): string;
export function filterParams(api: any, queryInfo: any): any;
export function schemaColumns(properties: any): any;
export function can(schema: any, attr: any, def?: boolean): any;
export function isSelected(rows: any, row: any): boolean;
export function selectionChange(rows: any, row: any, index: any): any;
export function selectionAll(rows: any, data: any): any;
export function fetchQueryInfo(type: any, data: any): {
    type: any;
};
export function validateQueryInfo(queryInfo: any): boolean;
export function calcPages(totalRows: any, perPage: any): any;
export function normalizeInput(row: any, modifier: any): Promise<any>;
