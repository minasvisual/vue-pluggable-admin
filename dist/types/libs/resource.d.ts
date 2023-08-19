declare function _default({ $axios, }: {
    $axios: any;
}): {
    loadModel: (url: any, options: any) => Promise<any>;
    loadModelByUrl: (path: string, file: any) => Promise<any>;
    setModel: (modelObj?: {}) => void;
    getModel: () => {};
    can: (perm: any) => any;
    isIt: (perm: any) => any;
    getData: (data?: {}, config?: {}) => Promise<any>;
    setData: (resource: any, filters: any) => any;
    getDataObject: (data?: {}, config?: {}) => Promise<any>;
    saveData: (data: any, config?: {}) => Promise<any>;
    deleteData: (data: any, config?: {}) => Promise<any>;
    paginate: ({ local, perPage, page }: {
        local?: boolean;
        perPage?: number;
        page?: number;
    }) => {};
    sorting: ({ local, col, order }: {
        local: any;
        col: any;
        order: any;
    }) => any;
    getSchemaSort: () => any;
};
export default _default;
