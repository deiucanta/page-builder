import * as react_jsx_runtime from 'react/jsx-runtime';
import * as mobx_state_tree_dist_internal from 'mobx-state-tree/dist/internal';
import * as mobx from 'mobx';
import * as mobx_state_tree from 'mobx-state-tree';
import { IAnyModelType, Instance, SnapshotIn } from 'mobx-state-tree';
export { Instance } from 'mobx-state-tree';

declare const Node: mobx_state_tree.IModelType<{
    id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<string>;
    open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
    props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
    children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
}, {
    getPropValue(path: string[]): any;
    getOpenMap(): Record<string, boolean>;
} & {
    findNode(id: string): any;
    insertNodes(index: number, nodes: Instance<mobx_state_tree.ModelInstanceTypeProps<{
        id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<string>;
        open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
        children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
    }> & {
        getPropValue(path: string[]): any;
        getOpenMap(): Record<string, boolean>;
    } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
        id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<string>;
        open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
        children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
    }, {
        getPropValue(path: string[]): any;
        getOpenMap(): Record<string, boolean>;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>[]): void;
    setPropValue(path: string[], value: any): void;
    toggle(): void;
    getSnapshotWithoutId(): {
        id: undefined;
        children: any[] | undefined;
        name: string;
        type: string;
        open: boolean;
        props: mobx.IKeyValueMap<any>;
    };
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>;

declare const Block: mobx_state_tree.IModelType<{
    type: mobx_state_tree.ISimpleType<string>;
    fields: mobx_state_tree.IArrayType<mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IModelType<{
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<"text">;
        defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
    }, {
        getValue: (node: Instance<typeof Node>, path: string[]) => string;
    } & {
        setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<"number">;
        defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
    }, {
        getValue: (node: Instance<typeof Node>, path: string[]) => number;
    } & {
        setValue: (node: Instance<typeof Node>, path: string[], value: number) => void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<"checkbox">;
        defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
    }, {
        getValue: (node: Instance<typeof Node>, path: string[]) => boolean;
    } & {
        setValue: (node: Instance<typeof Node>, path: string[], value: boolean) => void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<"select">;
        defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        options: mobx_state_tree.IArrayType<mobx_state_tree.IModelType<{
            label: mobx_state_tree.ISimpleType<string>;
            value: mobx_state_tree.ISimpleType<string>;
        }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
    }, {
        getValue: (node: Instance<typeof Node>, path: string[]) => string;
    } & {
        setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<"array">;
        fields: mobx_state_tree.IArrayType<mobx_state_tree.IAnyType>;
        defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.IArrayType<mobx_state_tree.IType<any, any, any>>, [undefined]>;
    }, {
        getRows: (node: Instance<typeof Node>, path: string[]) => any[];
    } & {
        addRow: (node: Instance<typeof Node>, path: string[]) => void;
        removeRow: (node: Instance<typeof Node>, path: string[], index: number) => void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<"media">;
        defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
    }, {
        getValue: (node: Instance<typeof Node>, path: string[]) => string;
    } & {
        setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<"textarea">;
        defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
    }, {
        getValue: (node: Instance<typeof Node>, path: string[]) => string;
    } & {
        setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<"external">;
        defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        endpoint: mobx_state_tree.ISimpleType<string>;
    }, {
        getValue: (node: Instance<typeof Node>, path: string[]) => string;
    } & {
        setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>]>>;
}, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>;
type BlockType = Instance<typeof Block>;
type BlockSnapshotIn = SnapshotIn<typeof Block>;

interface PageBuilderProps {
    blocks: BlockSnapshotIn[];
    initialData?: any;
    onSave?: (data: any) => Promise<void>;
    onPublish?: (data: any) => Promise<void>;
    previewUrl?: string;
    className?: string;
    debounce?: number;
}
declare const PageBuilder: (({ blocks, initialData, onSave, onPublish, previewUrl, className, debounce, }: PageBuilderProps) => react_jsx_runtime.JSX.Element) & {
    displayName: string;
};

declare const Field: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IModelType<{
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<"text">;
    defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
}, {
    getValue: (node: Instance<typeof Node>, path: string[]) => string;
} & {
    setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<"number">;
    defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
}, {
    getValue: (node: Instance<typeof Node>, path: string[]) => number;
} & {
    setValue: (node: Instance<typeof Node>, path: string[], value: number) => void;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<"checkbox">;
    defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
}, {
    getValue: (node: Instance<typeof Node>, path: string[]) => boolean;
} & {
    setValue: (node: Instance<typeof Node>, path: string[], value: boolean) => void;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<"select">;
    defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
    options: mobx_state_tree.IArrayType<mobx_state_tree.IModelType<{
        label: mobx_state_tree.ISimpleType<string>;
        value: mobx_state_tree.ISimpleType<string>;
    }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
}, {
    getValue: (node: Instance<typeof Node>, path: string[]) => string;
} & {
    setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<"array">;
    fields: mobx_state_tree.IArrayType<mobx_state_tree.IAnyType>;
    defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.IArrayType<mobx_state_tree.IType<any, any, any>>, [undefined]>;
}, {
    getRows: (node: Instance<typeof Node>, path: string[]) => any[];
} & {
    addRow: (node: Instance<typeof Node>, path: string[]) => void;
    removeRow: (node: Instance<typeof Node>, path: string[], index: number) => void;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<"media">;
    defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
}, {
    getValue: (node: Instance<typeof Node>, path: string[]) => string;
} & {
    setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<"textarea">;
    defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
}, {
    getValue: (node: Instance<typeof Node>, path: string[]) => string;
} & {
    setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
    name: mobx_state_tree.ISimpleType<string>;
    type: mobx_state_tree.ISimpleType<"external">;
    defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
    endpoint: mobx_state_tree.ISimpleType<string>;
}, {
    getValue: (node: Instance<typeof Node>, path: string[]) => string;
} & {
    setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>]>;

declare const RootStore: mobx_state_tree.IModelType<{
    root: mobx_state_tree.IModelType<{
        id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<string>;
        open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
        children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<mobx_state_tree.IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
    }, {
        getPropValue(path: string[]): any;
        getOpenMap(): Record<string, boolean>;
    } & {
        findNode(id: string): any;
        insertNodes(index: number, nodes: Instance<mobx_state_tree.ModelInstanceTypeProps<{
            id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<string>;
            open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
            children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<mobx_state_tree.IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
        }> & {
            getPropValue(path: string[]): any;
            getOpenMap(): Record<string, boolean>;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<string>;
            open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
            children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<mobx_state_tree.IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
        }, {
            getPropValue(path: string[]): any;
            getOpenMap(): Record<string, boolean>;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>[]): void;
        setPropValue(path: string[], value: any): void;
        toggle(): void;
        getSnapshotWithoutId(): {
            id: undefined;
            children: any[] | undefined;
            name: string;
            type: string;
            open: boolean;
            props: mobx.IKeyValueMap<any>;
        };
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>;
    selectedNode: mobx_state_tree.IMaybeNull<mobx_state_tree.IReferenceType<mobx_state_tree.IModelType<{
        id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<string>;
        open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
        children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<mobx_state_tree.IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
    }, {
        getPropValue(path: string[]): any;
        getOpenMap(): Record<string, boolean>;
    } & {
        findNode(id: string): any;
        insertNodes(index: number, nodes: Instance<mobx_state_tree.ModelInstanceTypeProps<{
            id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<string>;
            open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
            children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<mobx_state_tree.IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
        }> & {
            getPropValue(path: string[]): any;
            getOpenMap(): Record<string, boolean>;
        } & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
            id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<string>;
            open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
            props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
            children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<mobx_state_tree.IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
        }, {
            getPropValue(path: string[]): any;
            getOpenMap(): Record<string, boolean>;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>[]): void;
        setPropValue(path: string[], value: any): void;
        toggle(): void;
        getSnapshotWithoutId(): {
            id: undefined;
            children: any[] | undefined;
            name: string;
            type: string;
            open: boolean;
            props: mobx.IKeyValueMap<any>;
        };
    }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>>;
    blocks: mobx_state_tree.IArrayType<mobx_state_tree.IModelType<{
        type: mobx_state_tree.ISimpleType<string>;
        fields: mobx_state_tree.IArrayType<mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"text">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"number">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => number;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: number) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"checkbox">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => boolean;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: boolean) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"select">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            options: mobx_state_tree.IArrayType<mobx_state_tree.IModelType<{
                label: mobx_state_tree.ISimpleType<string>;
                value: mobx_state_tree.ISimpleType<string>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"array">;
            fields: mobx_state_tree.IArrayType<mobx_state_tree.IAnyType>;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.IArrayType<mobx_state_tree.IType<any, any, any>>, [undefined]>;
        }, {
            getRows: (node: Instance<typeof Node>, path: string[]) => any[];
        } & {
            addRow: (node: Instance<typeof Node>, path: string[]) => void;
            removeRow: (node: Instance<typeof Node>, path: string[], index: number) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"media">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"textarea">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"external">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            endpoint: mobx_state_tree.ISimpleType<string>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>]>>;
    }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
}, {
    readonly data: any[] | undefined;
    readonly openMap: Record<string, boolean>;
} & {
    findNode: (id: string) => Instance<typeof Node> | null;
} & {
    deleteNodes: (ids: string[]) => void;
    renameNode: (id: string, name: string) => void;
    createNode: (parentId: string | null, _index: number, type: string) => mobx_state_tree.ModelSnapshotType<{
        id: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        name: mobx_state_tree.ISimpleType<string>;
        type: mobx_state_tree.ISimpleType<string>;
        open: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        props: mobx_state_tree.IMapType<mobx_state_tree.IType<any, any, any>>;
        children: mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IArrayType<mobx_state_tree.IAnyModelType>, mobx_state_tree.ISimpleType<undefined>]>;
    }> | null;
    moveNodes: (parentId: string | null, index: number, dragIds: string[]) => void;
    selectNode: (id: string) => void;
    setData: (data: any) => void;
    duplicateNode: (id: string) => void;
    copyNode: (id: string) => void;
    pasteNode: (parentId?: string | undefined) => Promise<void>;
} & {
    readonly selectedBlock: (mobx_state_tree.ModelInstanceTypeProps<{
        type: mobx_state_tree.ISimpleType<string>;
        fields: mobx_state_tree.IArrayType<mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"text">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"number">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => number;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: number) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"checkbox">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => boolean;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: boolean) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"select">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            options: mobx_state_tree.IArrayType<mobx_state_tree.IModelType<{
                label: mobx_state_tree.ISimpleType<string>;
                value: mobx_state_tree.ISimpleType<string>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"array">;
            fields: mobx_state_tree.IArrayType<mobx_state_tree.IAnyType>;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.IArrayType<mobx_state_tree.IType<any, any, any>>, [undefined]>;
        }, {
            getRows: (node: Instance<typeof Node>, path: string[]) => any[];
        } & {
            addRow: (node: Instance<typeof Node>, path: string[]) => void;
            removeRow: (node: Instance<typeof Node>, path: string[], index: number) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"media">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"textarea">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"external">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            endpoint: mobx_state_tree.ISimpleType<string>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>]>>;
    }> & mobx_state_tree.IStateTreeNode<mobx_state_tree.IModelType<{
        type: mobx_state_tree.ISimpleType<string>;
        fields: mobx_state_tree.IArrayType<mobx_state_tree_dist_internal.IUnionType<[mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"text">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"number">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<number>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => number;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: number) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"checkbox">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<boolean>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => boolean;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: boolean) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"select">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            options: mobx_state_tree.IArrayType<mobx_state_tree.IModelType<{
                label: mobx_state_tree.ISimpleType<string>;
                value: mobx_state_tree.ISimpleType<string>;
            }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"array">;
            fields: mobx_state_tree.IArrayType<mobx_state_tree.IAnyType>;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.IArrayType<mobx_state_tree.IType<any, any, any>>, [undefined]>;
        }, {
            getRows: (node: Instance<typeof Node>, path: string[]) => any[];
        } & {
            addRow: (node: Instance<typeof Node>, path: string[]) => void;
            removeRow: (node: Instance<typeof Node>, path: string[], index: number) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"media">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"textarea">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>, mobx_state_tree.IModelType<{
            name: mobx_state_tree.ISimpleType<string>;
            type: mobx_state_tree.ISimpleType<"external">;
            defaultValue: mobx_state_tree.IOptionalIType<mobx_state_tree.ISimpleType<string>, [undefined]>;
            endpoint: mobx_state_tree.ISimpleType<string>;
        }, {
            getValue: (node: Instance<typeof Node>, path: string[]) => string;
        } & {
            setValue: (node: Instance<typeof Node>, path: string[], value: string) => void;
        }, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>]>>;
    }, {}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>>) | null | undefined;
}, mobx_state_tree._NotCustomized, mobx_state_tree._NotCustomized>;

export { Block, type BlockType, Field, Node, PageBuilder, type PageBuilderProps, RootStore };
