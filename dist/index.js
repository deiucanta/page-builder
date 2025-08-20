"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Block: () => Block,
  Field: () => Field,
  Node: () => Node,
  PageBuilder: () => PageBuilder,
  RootStore: () => RootStore
});
module.exports = __toCommonJS(index_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/input.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/BlockEditor.tsx
var import_mobx_react_lite10 = require("mobx-react-lite");

// src/store/Field.tsx
var import_mobx_react_lite9 = require("mobx-react-lite");
var import_mobx_state_tree10 = require("mobx-state-tree");

// src/store/JsonValue.ts
var import_mobx_state_tree = require("mobx-state-tree");
var JsonValue = import_mobx_state_tree.types.custom({
  name: "JSON",
  fromSnapshot: (value) => value,
  toSnapshot: (value) => value,
  isTargetType: () => true,
  getValidationMessage: () => ""
});

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/store/ArrayField.tsx
var import_mobx_react_lite = require("mobx-react-lite");
var import_mobx_state_tree2 = require("mobx-state-tree");
var import_lodash = require("lodash");

// src/components/ui/label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/accordion.tsx
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}

// src/store/ArrayField.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var ArrayField = import_mobx_state_tree2.types.model("ArrayField", {
  name: import_mobx_state_tree2.types.identifier,
  type: import_mobx_state_tree2.types.literal("array"),
  fields: import_mobx_state_tree2.types.array(import_mobx_state_tree2.types.late(() => Field)),
  defaultValue: import_mobx_state_tree2.types.optional(import_mobx_state_tree2.types.array(JsonValue), [])
}).views((self) => ({
  getRows: (node, path) => {
    return node.getPropValue(path) ?? [];
  }
})).actions((self) => ({
  addRow: (node, path) => {
    const rows = self.getRows(node, path);
    if (!rows) return;
    node.setPropValue(path, [...rows, {}]);
  },
  removeRow: (node, path, index) => {
    const rows = self.getRows(node, path);
    if (!rows) return;
    node.setPropValue(
      path,
      rows.filter((_, i) => i !== index)
    );
  }
}));
var ArrayFieldComponent = (0, import_mobx_react_lite.observer)(
  ({
    field,
    node,
    path
  }) => {
    const rows = field.getRows(node, [...path, field.name]);
    const [openRow, setOpenRow] = import_react.default.useState(void 0);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Label, { children: (0, import_lodash.startCase)(field.name) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Button,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => {
              field.addRow(node, [...path, field.name]);
            },
            children: "Add"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Accordion, { type: "single", collapsible: true, value: openRow, onValueChange: setOpenRow, children: rows.map((row, index) => {
        const rowKey = index.toString();
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(AccordionItem, { value: rowKey, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(AccordionTrigger, { className: "text-sm", children: [
            "Item ",
            index + 1
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col gap-2", children: [
            field.fields.map((nestedField) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              FieldComponent,
              {
                field: nestedField,
                node,
                path: [...path, field.name, index.toString()]
              },
              nestedField.name
            )),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              Button,
              {
                size: "sm",
                variant: "secondary",
                onClick: () => field.removeRow(node, [...path, field.name], index),
                children: "Remove"
              }
            )
          ] }) })
        ] }, rowKey);
      }) })
    ] });
  }
);

// src/components/ui/checkbox.tsx
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/store/CheckboxField.tsx
var import_mobx_react_lite2 = require("mobx-react-lite");
var import_mobx_state_tree3 = require("mobx-state-tree");
var import_lodash2 = require("lodash");
var import_react2 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var CheckboxField = import_mobx_state_tree3.types.model("CheckboxField", {
  name: import_mobx_state_tree3.types.identifier,
  type: import_mobx_state_tree3.types.literal("checkbox"),
  defaultValue: import_mobx_state_tree3.types.optional(import_mobx_state_tree3.types.boolean, false)
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var CheckboxFieldComponent = (0, import_mobx_react_lite2.observer)(
  ({
    field,
    node,
    path
  }) => {
    const id = (0, import_react2.useId)();
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Checkbox,
        {
          id,
          checked: field.getValue(node, [...path, field.name]),
          onCheckedChange: (checked) => field.setValue(node, [...path, field.name], Boolean(checked))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Label, { htmlFor: id, children: (0, import_lodash2.startCase)(field.name) })
    ] });
  }
);

// src/store/NumberField.tsx
var import_mobx_react_lite3 = require("mobx-react-lite");
var import_mobx_state_tree4 = require("mobx-state-tree");
var import_lodash3 = require("lodash");
var import_react3 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var NumberField = import_mobx_state_tree4.types.model("NumberField", {
  name: import_mobx_state_tree4.types.identifier,
  type: import_mobx_state_tree4.types.literal("number"),
  defaultValue: import_mobx_state_tree4.types.optional(import_mobx_state_tree4.types.number, 0)
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var NumberFieldComponent = (0, import_mobx_react_lite3.observer)(
  ({
    field,
    node,
    path
  }) => {
    const id = (0, import_react3.useId)();
    const history = useStoreHistory();
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Label, { htmlFor: id, children: (0, import_lodash3.startCase)(field.name) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Input,
        {
          id,
          type: "number",
          value: field.getValue(node, [...path, field.name]),
          onChange: (e) => field.setValue(node, [...path, field.name], e.target.valueAsNumber),
          onFocus: () => history.startGroup(() => {
          }),
          onBlur: () => history.stopGroup()
        }
      )
    ] });
  }
);

// src/components/ui/select.tsx
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function Select({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronDownIcon, { className: "size-4" })
    }
  );
}

// src/store/SelectField.tsx
var import_mobx_react_lite4 = require("mobx-react-lite");
var import_mobx_state_tree5 = require("mobx-state-tree");
var import_lodash4 = require("lodash");
var import_react4 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var SelectField = import_mobx_state_tree5.types.model("SelectField", {
  name: import_mobx_state_tree5.types.identifier,
  type: import_mobx_state_tree5.types.literal("select"),
  defaultValue: import_mobx_state_tree5.types.optional(import_mobx_state_tree5.types.string, ""),
  options: import_mobx_state_tree5.types.array(import_mobx_state_tree5.types.model({ label: import_mobx_state_tree5.types.string, value: import_mobx_state_tree5.types.string }))
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var SelectFieldComponent = (0, import_mobx_react_lite4.observer)(
  ({
    field,
    node,
    path
  }) => {
    const id = (0, import_react4.useId)();
    const value = field.getValue(node, [...path, field.name]);
    const label = field.options.find((option) => option.value === value)?.label;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Label, { htmlFor: id, children: (0, import_lodash4.startCase)(field.name) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        Select,
        {
          value,
          onValueChange: (value2) => field.setValue(node, [...path, field.name], value2),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectTrigger, { id, children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectContent, { children: field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectItem, { value: option.value, children: option.label }, option.value)) })
          ]
        }
      )
    ] });
  }
);

// src/store/TextField.tsx
var import_mobx_react_lite5 = require("mobx-react-lite");
var import_mobx_state_tree6 = require("mobx-state-tree");
var import_lodash5 = require("lodash");
var import_react5 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var TextField = import_mobx_state_tree6.types.model("TextField", {
  name: import_mobx_state_tree6.types.identifier,
  type: import_mobx_state_tree6.types.literal("text"),
  defaultValue: import_mobx_state_tree6.types.optional(import_mobx_state_tree6.types.string, "")
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var TextFieldComponent = (0, import_mobx_react_lite5.observer)(
  ({
    field,
    node,
    path
  }) => {
    const id = (0, import_react5.useId)();
    const history = useStoreHistory();
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Label, { htmlFor: id, children: (0, import_lodash5.startCase)(field.name) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        Input,
        {
          id,
          value: field.getValue(node, [...path, field.name]),
          onChange: (e) => field.setValue(node, [...path, field.name], e.target.value),
          onFocus: () => history.startGroup(() => {
          }),
          onBlur: () => history.stopGroup()
        }
      )
    ] });
  }
);

// src/store/MediaField.tsx
var import_mobx_react_lite6 = require("mobx-react-lite");
var import_mobx_state_tree7 = require("mobx-state-tree");

// src/components/ui/dialog.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react4.XIcon, {}),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}

// src/store/MediaField.tsx
var import_react6 = require("react");
var import_lodash6 = require("lodash");
var import_jsx_runtime13 = require("react/jsx-runtime");
var MediaField = import_mobx_state_tree7.types.model("MediaField", {
  name: import_mobx_state_tree7.types.identifier,
  type: import_mobx_state_tree7.types.literal("media"),
  defaultValue: import_mobx_state_tree7.types.optional(import_mobx_state_tree7.types.string, "")
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var MediaFieldComponent = (0, import_mobx_react_lite6.observer)(
  ({
    field,
    node,
    path
  }) => {
    const history = useStoreHistory();
    const fullPath = [...path, field.name];
    const value = field.getValue(node, fullPath);
    const [dialogOpen, setDialogOpen] = (0, import_react6.useState)(false);
    const [inputValue, setInputValue] = (0, import_react6.useState)(value || "");
    const id = (0, import_react6.useId)();
    const handleUrlSubmit = () => {
      history.withoutUndo(() => {
        field.setValue(node, fullPath, inputValue);
      });
      setDialogOpen(false);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Label, { htmlFor: id, children: (0, import_lodash6.startCase)(field.name) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Button, { variant: "outline", className: "w-full", children: value ? "Change Media" : "Select Media" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(DialogContent, { className: "max-w-4xl h-[80vh]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogTitle, { children: "Enter Media URL" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex gap-2 p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              Input,
              {
                type: "url",
                value: inputValue,
                onChange: (e) => setInputValue(e.target.value),
                placeholder: "Enter image or media URL",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Button, { onClick: handleUrlSubmit, children: "Set Media" })
          ] }),
          inputValue && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "img",
            {
              src: inputValue,
              alt: "Preview",
              className: "max-w-full h-auto",
              onError: (e) => {
                const target = e.target;
                target.style.display = "none";
              }
            }
          ) })
        ] })
      ] }),
      value && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "img",
        {
          src: value,
          alt: "Selected media",
          className: "max-w-full h-auto max-h-32 object-contain"
        }
      ) })
    ] });
  }
);

// src/store/TextareaField.tsx
var import_mobx_react_lite7 = require("mobx-react-lite");
var import_mobx_state_tree8 = require("mobx-state-tree");

// src/components/ui/textarea.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

// src/store/TextareaField.tsx
var import_lodash7 = require("lodash");
var import_react7 = require("react");
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var TextareaField = import_mobx_state_tree8.types.model("TextareaField", {
  name: import_mobx_state_tree8.types.identifier,
  type: import_mobx_state_tree8.types.literal("textarea"),
  defaultValue: import_mobx_state_tree8.types.optional(import_mobx_state_tree8.types.string, "")
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var TextareaFieldComponent = (0, import_mobx_react_lite7.observer)(
  ({
    field,
    node,
    path
  }) => {
    const history = useStoreHistory();
    const fullPath = [...path, field.name];
    const value = field.getValue(node, fullPath);
    const id = (0, import_react7.useId)();
    const [dialogOpen, setDialogOpen] = (0, import_react7.useState)(false);
    const [dialogValue, setDialogValue] = (0, import_react7.useState)(value);
    const handleChange = (newValue) => {
      history.withoutUndo(() => {
        field.setValue(node, fullPath, newValue);
      });
    };
    const handleDialogSave = () => {
      handleChange(dialogValue);
      setDialogOpen(false);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Label, { htmlFor: id, children: (0, import_lodash7.startCase)(field.name) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { size: "icon", variant: "ghost", className: "h-6 w-6", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react5.ExpandIcon, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(DialogContent, { className: "max-w-4xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DialogTitle, { children: (0, import_lodash7.startCase)(field.name) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "grid gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                Textarea,
                {
                  value: dialogValue,
                  onChange: (e) => setDialogValue(e.target.value),
                  className: "min-h-[400px] font-mono"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-end gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { variant: "outline", onClick: () => setDialogOpen(false), children: "Cancel" }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { onClick: handleDialogSave, children: "Save" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Textarea,
        {
          id,
          value,
          onChange: (e) => handleChange(e.target.value),
          className: "min-h-[100px]"
        }
      )
    ] });
  }
);

// src/store/ExternalField.tsx
var import_mobx_react_lite8 = require("mobx-react-lite");
var import_mobx_state_tree9 = require("mobx-state-tree");
var import_react8 = require("react");
var import_lodash8 = require("lodash");
var import_jsx_runtime16 = require("react/jsx-runtime");
var ExternalField = import_mobx_state_tree9.types.model("ExternalField", {
  name: import_mobx_state_tree9.types.identifier,
  type: import_mobx_state_tree9.types.literal("external"),
  defaultValue: import_mobx_state_tree9.types.optional(import_mobx_state_tree9.types.string, ""),
  endpoint: import_mobx_state_tree9.types.string
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var ExternalFieldComponent = (0, import_mobx_react_lite8.observer)(
  ({
    field,
    node,
    path
  }) => {
    const history = useStoreHistory();
    const id = (0, import_react8.useId)();
    const buttonRef = (0, import_react8.useRef)(null);
    const value = field.getValue(node, [...path, field.name]);
    const [open, setOpen] = (0, import_react8.useState)(false);
    const [isLoading, setIsLoading] = (0, import_react8.useState)(false);
    const [isLoadingSelected, setIsLoadingSelected] = (0, import_react8.useState)(false);
    const [selectedItem, setSelectedItem] = (0, import_react8.useState)(null);
    const [searchQuery, setSearchQuery] = (0, import_react8.useState)("");
    const [debouncedSearch, setDebouncedSearch] = (0, import_react8.useState)("");
    const [page, setPage] = (0, import_react8.useState)(1);
    const pageSize = 10;
    const [response, setResponse] = (0, import_react8.useState)({
      results: [],
      pagination: {
        page: 1,
        pageSize,
        totalCount: 0,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false
      }
    });
    const items = response.results || [];
    const pagination = response.pagination;
    const hasNextPage = pagination.hasNextPage;
    const hasPrevPage = pagination.hasPreviousPage;
    const totalPages = pagination.totalPages;
    const totalCount = pagination.totalCount;
    const fetchSelectedItem = async (itemId) => {
      if (!itemId) {
        setSelectedItem(null);
        return;
      }
      try {
        setIsLoadingSelected(true);
        const url = new URL(field.endpoint, window.location.origin);
        url.searchParams.set("id", itemId);
        const response2 = await fetch(url.toString());
        if (!response2.ok) {
          console.error("Failed to fetch selected item");
          setSelectedItem(null);
          return;
        }
        const data = await response2.json();
        if (data.results && data.results.length > 0) {
          setSelectedItem(data.results[0] || null);
        } else {
          setSelectedItem(null);
        }
      } catch (error) {
        console.error("Error fetching selected item:", error);
        setSelectedItem(null);
      } finally {
        setIsLoadingSelected(false);
      }
    };
    (0, import_react8.useEffect)(() => {
      if (value) {
        fetchSelectedItem(value);
      } else {
        setSelectedItem(null);
      }
    }, [value, field.endpoint]);
    const fetchItems = async (searchTerm, pageNum = 1) => {
      try {
        setIsLoading(true);
        const url = new URL(field.endpoint, window.location.origin);
        url.searchParams.set("page", pageNum.toString());
        url.searchParams.set("pageSize", pageSize.toString());
        if (searchTerm) {
          url.searchParams.set("search", searchTerm);
        }
        const response2 = await fetch(url.toString());
        if (!response2.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response2.json();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setResponse({
          results: [],
          pagination: {
            page: 1,
            pageSize: 50,
            totalCount: 0,
            totalPages: 1,
            hasNextPage: false,
            hasPreviousPage: false
          }
        });
      } finally {
        setIsLoading(false);
      }
    };
    (0, import_react8.useEffect)(() => {
      const timer = setTimeout(() => {
        setDebouncedSearch(searchQuery);
        setPage(1);
      }, 300);
      return () => clearTimeout(timer);
    }, [searchQuery]);
    (0, import_react8.useEffect)(() => {
      if (open) {
        fetchItems(debouncedSearch, page);
      }
    }, [open, debouncedSearch, page, field.endpoint]);
    const handleSelectItem = (item) => {
      field.setValue(node, [...path, field.name], item.id);
      setSelectedItem(item);
      setOpen(false);
    };
    const goToNextPage = () => {
      if (hasNextPage) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    const goToPrevPage = () => {
      if (hasPrevPage) {
        setPage((prevPage) => prevPage - 1);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Label, { htmlFor: id, onClick: () => buttonRef.current?.click(), className: "cursor-pointer", children: (0, import_lodash8.startCase)(field.name) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          Input,
          {
            id,
            value,
            onChange: (e) => field.setValue(node, [...path, field.name], e.target.value),
            onFocus: () => history.startGroup(() => {
            }),
            onBlur: () => history.stopGroup(),
            className: "flex-1",
            placeholder: "Item ID"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Dialog, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Button, { ref: buttonRef, type: "button", variant: "outline", size: "sm", children: "Select" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DialogContent, { className: "sm:max-w-[680px] h-[80vh] flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogHeader, { className: "shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTitle, { children: "Select Item" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "shrink-0 mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              Input,
              {
                placeholder: "Search items...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full"
              }
            ) }),
            isLoading ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex-1 flex items-center justify-center", children: "Loading items..." }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex-1 space-y-2 overflow-y-auto min-h-0", children: items.length > 0 ? items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                "div",
                {
                  className: `border rounded-md p-3 cursor-pointer hover:border-primary transition-colors ${value === item.id ? "border-primary ring-1 ring-primary bg-primary/5" : ""}`,
                  onClick: () => handleSelectItem(item),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "font-medium", children: item.label }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "text-xs text-muted-foreground", children: item.id })
                  ]
                },
                item.id
              )) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: "No items found" }) }),
              (hasNextPage || hasPrevPage) && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "shrink-0 flex items-center justify-between mt-4 pt-4 border-t", children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: goToPrevPage,
                    disabled: !hasPrevPage,
                    children: "Previous"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "text-sm text-muted-foreground", children: [
                  "Page ",
                  page,
                  " of ",
                  totalPages,
                  " (",
                  totalCount,
                  " items)"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: goToNextPage,
                    disabled: !hasNextPage,
                    children: "Next"
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] }),
      value && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mt-1 border rounded p-2 bg-muted/50", children: isLoadingSelected ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "text-sm text-muted-foreground", children: "Loading item..." }) : selectedItem ? /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "font-medium", children: selectedItem.label }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "text-xs text-muted-foreground", children: selectedItem.id })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "text-sm text-muted-foreground", children: "Item not found" }) })
    ] });
  }
);

// src/store/Field.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var Field = import_mobx_state_tree10.types.union(
  TextField,
  NumberField,
  CheckboxField,
  SelectField,
  ArrayField,
  MediaField,
  TextareaField,
  ExternalField
);
var FieldComponent = (0, import_mobx_react_lite9.observer)(
  ({
    field,
    node,
    path
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
      field.type === "text" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TextFieldComponent, { field, node, path }),
      field.type === "number" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(NumberFieldComponent, { field, node, path }),
      field.type === "checkbox" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CheckboxFieldComponent, { field, node, path }),
      field.type === "select" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SelectFieldComponent, { field, node, path }),
      field.type === "array" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ArrayFieldComponent, { field, node, path }),
      field.type === "media" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(MediaFieldComponent, { field, node, path }),
      field.type === "textarea" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TextareaFieldComponent, { field, node, path }),
      field.type === "external" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ExternalFieldComponent, { field, node, path })
    ] });
  }
);

// src/store/Block.ts
var import_mobx_state_tree11 = require("mobx-state-tree");
var Block = import_mobx_state_tree11.types.model("Block", {
  type: import_mobx_state_tree11.types.identifier,
  fields: import_mobx_state_tree11.types.array(Field)
});

// src/store/Node.ts
var import_lodash9 = require("lodash");
var import_mobx_state_tree12 = require("mobx-state-tree");
var Node = import_mobx_state_tree12.types.model("Node", {
  id: import_mobx_state_tree12.types.optional(import_mobx_state_tree12.types.identifier, () => Math.random().toString(36).substring(2, 15)),
  name: import_mobx_state_tree12.types.string,
  type: import_mobx_state_tree12.types.string,
  open: import_mobx_state_tree12.types.optional(import_mobx_state_tree12.types.boolean, true),
  props: import_mobx_state_tree12.types.map(JsonValue),
  children: import_mobx_state_tree12.types.union(import_mobx_state_tree12.types.array(import_mobx_state_tree12.types.late(() => Node)), import_mobx_state_tree12.types.undefined)
}).views((self) => ({
  getPropValue(path) {
    return (0, import_lodash9.get)((0, import_mobx_state_tree12.getSnapshot)(self.props), path.join("."));
  },
  getOpenMap() {
    const result = {};
    result[self.id] = self.open;
    for (const child of self.children ?? []) {
      Object.assign(result, child.getOpenMap());
    }
    return result;
  }
})).actions((self) => ({
  findNode(id) {
    if (self.id === id) return self;
    if (!self.children) return null;
    for (const child of self.children) {
      const node = child.findNode(id);
      if (node) return node;
    }
    return null;
  },
  insertNodes(index, nodes) {
    self.children?.splice(index, 0, ...nodes);
  },
  setPropValue(path, value) {
    const snapshot = structuredClone((0, import_mobx_state_tree12.getSnapshot)(self.props));
    self.props = (0, import_mobx_state_tree12.cast)((0, import_lodash9.set)(snapshot, path.join("."), value));
  },
  toggle() {
    self.open = !self.open;
  },
  getSnapshotWithoutId() {
    return {
      ...(0, import_mobx_state_tree12.getSnapshot)(self),
      id: void 0,
      children: self.children?.map((child) => child.getSnapshotWithoutId())
    };
  }
}));

// src/store/RootStore.ts
var import_mobx_state_tree13 = require("mobx-state-tree");
var APP_CLIPBOARD_MIME = "application/x-page-editor-node";
var RootStore = import_mobx_state_tree13.types.model("RootStore", {
  root: Node,
  selectedNode: import_mobx_state_tree13.types.maybeNull(import_mobx_state_tree13.types.reference(Node)),
  blocks: import_mobx_state_tree13.types.array(Block)
}).views((self) => ({
  get data() {
    return self.root.children ? (0, import_mobx_state_tree13.getSnapshot)(self.root.children, false) : [];
  },
  get openMap() {
    return self.root.getOpenMap();
  }
})).actions((self) => ({
  findNode: (id) => {
    return self.root.findNode(id);
  }
})).actions((self) => ({
  deleteNodes: (ids) => {
    for (const id of ids) {
      const node = self.findNode(id);
      if (!node) continue;
      if (node.id === self.selectedNode?.id) {
        const parent = (0, import_mobx_state_tree13.getParentOfType)(node, Node);
        console.log("parent", parent && (0, import_mobx_state_tree13.getSnapshot)(parent));
        self.selectedNode = parent;
      }
      (0, import_mobx_state_tree13.destroy)(node);
    }
  },
  renameNode: (id, name) => {
    const node = self.findNode(id);
    if (node) {
      node.name = name;
    }
  },
  createNode: (parentId, _index, type) => {
    const parent = self.findNode(parentId ?? "root");
    if (!parent) return null;
    const node = Node.create({
      name: type,
      type,
      children: []
    });
    parent.insertNodes(parent.children?.length ?? 0, [node]);
    console.log("before", self.selectedNode && (0, import_mobx_state_tree13.getSnapshot)(self.selectedNode));
    self.selectedNode = node;
    console.log("after", (0, import_mobx_state_tree13.getSnapshot)(self.selectedNode));
    return (0, import_mobx_state_tree13.getSnapshot)(node);
  },
  moveNodes: (parentId, index, dragIds) => {
    const parent = self.findNode(parentId ?? "root");
    if (!parent) return;
    const nodes = [];
    for (const dragId of dragIds) {
      const node = self.findNode(dragId);
      if (!node) continue;
      nodes.push(node);
      (0, import_mobx_state_tree13.detach)(node);
    }
    parent.insertNodes(index, nodes);
  },
  selectNode: (id) => {
    self.selectedNode = self.findNode(id);
  },
  setData: (data) => {
    self.root.children = data;
  },
  duplicateNode: (id) => {
    const node = self.findNode(id);
    if (!node) return;
    const parent = (0, import_mobx_state_tree13.getParentOfType)(node, Node);
    if (!parent) return;
    const newNode = Node.create({
      ...node.getSnapshotWithoutId(),
      name: `${node.name} (copy)`
    });
    parent.insertNodes(parent.children?.length ?? 0, [newNode]);
    self.selectedNode = newNode;
  },
  copyNode: (id) => {
    const node = self.findNode(id);
    if (!node) return;
    navigator.clipboard.writeText(
      JSON.stringify({
        type: APP_CLIPBOARD_MIME,
        node: node.getSnapshotWithoutId()
      })
    );
  },
  pasteNode: (0, import_mobx_state_tree13.flow)(function* (parentId = "root") {
    const parent = self.findNode(parentId);
    if (!parent) return;
    const data = yield getClipboardData();
    if (!data || data.type !== APP_CLIPBOARD_MIME || !data.node) return;
    const newNode = Node.create({ ...data.node, name: `${data.node.name} (pasted)` });
    parent.insertNodes(0, [newNode]);
    self.selectedNode = newNode;
  })
})).views((self) => ({
  get selectedBlock() {
    const node = self.selectedNode;
    if (!node) return null;
    return self.blocks.find((block) => block.type === node.type);
  }
}));
async function getClipboardData() {
  let clipboardText;
  try {
    clipboardText = await navigator.clipboard.readText();
  } catch {
    return;
  }
  let data;
  try {
    data = JSON.parse(clipboardText);
  } catch {
    return;
  }
  return data;
}

// src/store/index.ts
var import_mst_middlewares = require("mst-middlewares");
var import_react9 = require("react");
function createStoreAndHistory(blocks) {
  const store = RootStore.create({
    root: {
      id: "root",
      name: "Root",
      type: "root"
    },
    blocks
  });
  const history = import_mst_middlewares.UndoManager.create({}, { targetStore: store });
  return { store, history };
}
var StoreContext = (0, import_react9.createContext)(null);
var StoreProvider = StoreContext.Provider;
var StoreHistoryContext = (0, import_react9.createContext)(null);
var StoreHistoryProvider = StoreHistoryContext.Provider;
var useStore = () => {
  const store = (0, import_react9.useContext)(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return store;
};
var useStoreHistory = () => {
  const history = (0, import_react9.useContext)(StoreHistoryContext);
  if (!history) {
    throw new Error("useStoreHistory must be used within a StoreHistoryProvider");
  }
  return history;
};

// src/components/BlockEditor.tsx
var import_lodash10 = require("lodash");
var import_jsx_runtime18 = require("react/jsx-runtime");
var BlockEditor = (0, import_mobx_react_lite10.observer)(() => {
  const store = useStore();
  const node = store.selectedNode;
  const component = store.selectedBlock;
  if (!node || !component) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-lg font-bold", children: (0, import_lodash10.startCase)(component.type) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Label, { htmlFor: "block-name", children: "Block Name" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        Input,
        {
          id: "block-name",
          value: node.name,
          onChange: (e) => store.renameNode(node.id, e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("hr", {}),
    component.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(FieldComponent, { field, node, path: [] }, field.name))
  ] }, node.id);
});

// src/components/Canvas.tsx
var import_lucide_react6 = require("lucide-react");
var import_react10 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var VIEWPORTS = [
  { name: "Mobile (375px)", width: 375 },
  { name: "Tablet (768px)", width: 768 },
  { name: "Desktop (1280px)", width: 1280 },
  { name: "Large Desktop (1920px)", width: 1920 }
];
var DEFAULT_VIEWPORT = VIEWPORTS[2];
var MIN_ZOOM = 0.1;
var MAX_ZOOM = 1;
var ZOOM_STEP = 0.1;
function Canvas({
  url,
  className,
  iframeRef,
  selectedNodeId,
  onSelect
}) {
  const [selectedViewport, setSelectedViewport] = (0, import_react10.useState)(
    DEFAULT_VIEWPORT
  );
  const [zoomLevel, setZoomLevel] = (0, import_react10.useState)(1);
  const [maxZoom, setMaxZoom] = (0, import_react10.useState)(MAX_ZOOM);
  const [containerSize, setContainerSize] = (0, import_react10.useState)({ width: 0, height: 0 });
  const [inspectMode, setInspectMode] = (0, import_react10.useState)(false);
  const containerRef = (0, import_react10.useRef)(null);
  const overlayId = "selected-block-overlay";
  const hoverOverlayId = "hover-block-overlay";
  const updateContainerSize = (0, import_react10.useCallback)(() => {
    if (!containerRef.current) return;
    const { offsetWidth, offsetHeight } = containerRef.current;
    setContainerSize({ width: offsetWidth, height: offsetHeight });
  }, []);
  const calculateMaxZoom = (0, import_react10.useCallback)(() => {
    if (!containerRef.current || !selectedViewport) return;
    const containerWidth = containerRef.current.offsetWidth;
    const viewportWidth = selectedViewport.width;
    const calculatedMaxZoom = containerWidth / viewportWidth;
    const newMaxZoom = Math.min(calculatedMaxZoom, MAX_ZOOM);
    setMaxZoom(newMaxZoom);
    return newMaxZoom;
  }, [selectedViewport]);
  const updateZoomLevel = (0, import_react10.useCallback)(() => {
    updateContainerSize();
    const newMaxZoom = calculateMaxZoom();
    if (!newMaxZoom) return;
    if (newMaxZoom >= 1) {
      setZoomLevel(1);
    } else {
      setZoomLevel(newMaxZoom);
    }
  }, [calculateMaxZoom, updateContainerSize]);
  (0, import_react10.useEffect)(() => {
    if (selectedViewport) {
      setTimeout(updateZoomLevel, 0);
    }
  }, [selectedViewport, updateZoomLevel]);
  (0, import_react10.useEffect)(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      updateZoomLevel();
    });
    resizeObserver.observe(containerRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [updateZoomLevel]);
  (0, import_react10.useEffect)(() => {
    window.addEventListener("resize", updateZoomLevel);
    return () => {
      window.removeEventListener("resize", updateZoomLevel);
    };
  }, [updateZoomLevel]);
  (0, import_react10.useEffect)(() => {
    updateContainerSize();
  }, [updateContainerSize]);
  const handleZoomIn = (0, import_react10.useCallback)(() => {
    setZoomLevel((prev) => Math.min(prev + ZOOM_STEP, maxZoom));
  }, [maxZoom]);
  const handleZoomOut = (0, import_react10.useCallback)(() => {
    setZoomLevel((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  }, []);
  const handleViewportChange = (0, import_react10.useCallback)((value) => {
    const viewport = VIEWPORTS.find((v) => v.name === value);
    if (viewport) {
      setSelectedViewport(viewport);
    }
  }, []);
  (0, import_react10.useEffect)(() => {
    if (!iframeRef.current) return;
    const showOverlayAndScroll = () => {
      const iframeDocument = iframeRef.current?.contentDocument;
      if (!iframeDocument) return;
      const existingOverlay = iframeDocument.getElementById(overlayId);
      if (existingOverlay) {
        existingOverlay.remove();
      }
      if (!selectedNodeId) return;
      const selectedElement = iframeDocument.querySelector(`[data-block-id="${selectedNodeId}"]`);
      if (!selectedElement) return;
      selectedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
      setTimeout(() => {
        const scrollTop = iframeDocument.documentElement.scrollTop || iframeDocument.body.scrollTop;
        const scrollLeft = iframeDocument.documentElement.scrollLeft || iframeDocument.body.scrollLeft;
        const overlay = iframeDocument.createElement("div");
        overlay.id = overlayId;
        const rect = selectedElement.getBoundingClientRect();
        Object.assign(overlay.style, {
          position: "absolute",
          top: `${rect.top + scrollTop}px`,
          left: `${rect.left + scrollLeft}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          backgroundColor: "rgba(59, 130, 246, 0.4)",
          pointerEvents: "none",
          zIndex: "9999",
          transition: "opacity 0.3s ease-out",
          border: "2px solid rgba(59, 130, 246, 0.7)"
        });
        iframeDocument.body.appendChild(overlay);
        setTimeout(() => {
          overlay.style.opacity = "0";
          setTimeout(() => {
            overlay?.remove();
          }, 300);
        }, 700);
      }, 100);
    };
    if (iframeRef.current.contentDocument?.readyState === "complete") {
      showOverlayAndScroll();
    }
    const handleIframeLoad = () => {
      showOverlayAndScroll();
    };
    iframeRef.current.addEventListener("load", handleIframeLoad);
    return () => {
      iframeRef.current?.removeEventListener("load", handleIframeLoad);
    };
  }, [selectedNodeId, iframeRef]);
  (0, import_react10.useEffect)(() => {
    if (!iframeRef.current || !inspectMode) return;
    const iframeDocument = iframeRef.current.contentDocument;
    if (!iframeDocument) return;
    const createHoverOverlay = (targetElement) => {
      const existingHoverOverlay = iframeDocument.getElementById(hoverOverlayId);
      if (existingHoverOverlay) {
        existingHoverOverlay.remove();
      }
      const scrollTop = iframeDocument.documentElement.scrollTop || iframeDocument.body.scrollTop;
      const scrollLeft = iframeDocument.documentElement.scrollLeft || iframeDocument.body.scrollLeft;
      const rect = targetElement.getBoundingClientRect();
      const hoverOverlay = iframeDocument.createElement("div");
      hoverOverlay.id = hoverOverlayId;
      Object.assign(hoverOverlay.style, {
        position: "absolute",
        top: `${rect.top + scrollTop}px`,
        left: `${rect.left + scrollLeft}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        pointerEvents: "none",
        zIndex: "9998",
        border: "2px solid rgba(59, 130, 246, 0.6)"
      });
      iframeDocument.body.appendChild(hoverOverlay);
    };
    const removeHoverOverlay = () => {
      const existingHoverOverlay = iframeDocument.getElementById(hoverOverlayId);
      if (existingHoverOverlay) {
        existingHoverOverlay.remove();
      }
    };
    const handleMouseMove = (e) => {
      if (!inspectMode) return;
      const element = iframeDocument.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;
      const targetElement = element.closest("[data-block-id]");
      if (!targetElement) {
        removeHoverOverlay();
        return;
      }
      createHoverOverlay(targetElement);
    };
    const handleClick = (e) => {
      if (!inspectMode) return;
      e.preventDefault();
      const element = iframeDocument.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;
      const targetElement = element.closest("[data-block-id]");
      if (!targetElement) return;
      const blockId = targetElement.getAttribute("data-block-id");
      if (blockId && onSelect) {
        onSelect(blockId);
        setInspectMode(false);
      }
    };
    iframeDocument.addEventListener("mousemove", handleMouseMove);
    iframeDocument.addEventListener("click", handleClick);
    return () => {
      iframeDocument.removeEventListener("mousemove", handleMouseMove);
      iframeDocument.removeEventListener("click", handleClick);
      removeHoverOverlay();
    };
  }, [inspectMode, iframeRef, onSelect]);
  const toggleInspectMode = (0, import_react10.useCallback)(() => {
    setInspectMode((prev) => !prev);
  }, []);
  if (!selectedViewport) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: cn("border flex flex-col h-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Select, { value: selectedViewport.name, onValueChange: handleViewportChange, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SelectTrigger, { className: "w-[220px]", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SelectValue, { placeholder: "Select viewport" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SelectContent, { children: VIEWPORTS.map((viewport) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SelectItem, { value: viewport.name, children: viewport.name }, viewport.name)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            variant: inspectMode ? "default" : "outline",
            size: "icon",
            onClick: toggleInspectMode,
            title: "Select to inspect",
            className: inspectMode ? "bg-blue-500 text-white" : "",
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.MousePointer, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            variant: "outline",
            size: "icon",
            onClick: handleZoomOut,
            disabled: zoomLevel <= MIN_ZOOM,
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.Minus, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "w-12 text-center", children: [
          Math.round(zoomLevel * 100),
          "%"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          Button,
          {
            variant: "outline",
            size: "icon",
            onClick: handleZoomIn,
            disabled: zoomLevel >= maxZoom,
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react6.Plus, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { ref: containerRef, className: "relative border overflow-hidden flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "div",
      {
        style: {
          width: selectedViewport.width,
          height: containerSize.height / zoomLevel,
          transform: `scale(${zoomLevel})`,
          transformOrigin: "top left"
        },
        className: "mx-auto",
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("iframe", { ref: iframeRef, src: url, className: "border-0 w-full h-full", title: "Preview" })
      }
    ) })
  ] });
}

// src/components/ui/dropdown-menu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}

// src/PageBuilder.tsx
var import_lucide_react8 = require("lucide-react");
var import_mobx_react_lite11 = require("mobx-react-lite");
var import_react11 = require("react");
var import_react_arborist = require("react-arborist");
var import_use_resize_observer = __toESM(require("use-resize-observer"));
var import_lodash11 = require("lodash");
var import_jsx_runtime21 = require("react/jsx-runtime");
var PageBuilder = (0, import_mobx_react_lite11.observer)(
  ({
    blocks,
    initialData,
    onSave,
    onPublish,
    previewUrl,
    className,
    debounce = 1e3
  }) => {
    const [{ store, history }] = (0, import_react11.useState)(() => createStoreAndHistory(blocks));
    const [saving, setSaving] = (0, import_react11.useState)(false);
    const saveTimeoutRef = (0, import_react11.useRef)(void 0);
    const treeRef = (0, import_react11.useRef)(null);
    const iframeRef = (0, import_react11.useRef)(null);
    const treeContainer = (0, import_use_resize_observer.default)();
    (0, import_react11.useEffect)(() => {
      if (initialData) {
        store.setData(initialData);
      }
    }, [initialData, store]);
    const saveData = async () => {
      if (onSave) {
        setSaving(true);
        try {
          await onSave(store.data);
          iframeRef.current?.contentWindow?.postMessage("router-refresh", "*");
        } finally {
          setSaving(false);
        }
      }
    };
    (0, import_react11.useEffect)(() => {
      if (!onSave) return;
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      saveTimeoutRef.current = setTimeout(() => {
        saveData();
      }, debounce);
      return () => {
        if (saveTimeoutRef.current) {
          clearTimeout(saveTimeoutRef.current);
        }
      };
    }, [store.data, debounce]);
    (0, import_react11.useEffect)(() => {
      if (!treeRef.current) return;
      if (!store.selectedNode) return;
      treeRef.current.select(store.selectedNode.id);
    }, [store.selectedNode]);
    const selectedNodeId = store.selectedNode?.id;
    const handlePublish = async () => {
      if (onPublish) {
        await onPublish(store.data);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(StoreProvider, { value: store, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(StoreHistoryProvider, { value: history, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: cn("h-screen flex", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex justify-between items-center p-2 border-b", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(History, {}),
          saving && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: "saving" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenu, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.EllipsisVerticalIcon, { className: "w-4 h-4" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenuContent, { onCloseAutoFocus: (e) => e.preventDefault(), children: [
              onSave && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuItem, { onClick: () => saveData(), children: "Save" }),
              onPublish && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuItem, { onClick: handlePublish, children: "Publish" }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                DropdownMenuItem,
                {
                  onClick: async (e) => {
                    e.stopPropagation();
                    store.pasteNode();
                  },
                  children: "Paste"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuSeparator, {}),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuLabel, { children: "Add Block" }),
              store.blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                DropdownMenuItem,
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    store.createNode("root", 0, block.type);
                  },
                  children: (0, import_lodash11.startCase)(block.type)
                },
                block.type
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { ref: treeContainer.ref, className: "flex-1 min-h-0", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          import_react_arborist.Tree,
          {
            rowHeight: 40,
            width: treeContainer.width,
            height: treeContainer.height,
            ref: treeRef,
            data: store.data,
            initialOpenState: store.openMap,
            onMove: ({ dragIds, parentId, index }) => {
              store.moveNodes(parentId, index, dragIds);
            },
            onDelete: ({ ids }) => {
              store.deleteNodes(ids);
            },
            onSelect: (nodes) => {
              const ids = nodes.map((node) => node.id);
              if (ids.length === 1 && ids[0]) {
                store.selectNode(ids[0]);
              }
            },
            onToggle: (id) => {
              const node = store.findNode(id);
              if (!node) return;
              node.toggle();
            },
            selectionFollowsFocus: true,
            children: NodeRenderer
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex-1 min-w-0", children: previewUrl && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        Canvas,
        {
          iframeRef,
          url: previewUrl,
          selectedNodeId,
          onSelect: (id) => store.selectNode(id)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "w-[300px] p-4 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BlockEditor, {}) })
    ] }) }) });
  }
);
var History = (0, import_mobx_react_lite11.observer)(() => {
  const history = useStoreHistory();
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Button, { onClick: () => history.undo(), disabled: !history.canUndo, children: "Undo" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Button, { onClick: () => history.redo(), disabled: !history.canRedo, children: "Redo" })
  ] });
});
var NodeRenderer = ({ node, style, dragHandle }) => {
  const store = useStore();
  const [open, setOpen] = (0, import_react11.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "div",
    {
      style,
      ref: dragHandle,
      className: cn(
        "h-full flex items-center group",
        node.isSelected && "bg-blue-500 hover:bg-blue-400",
        !node.isSelected && "bg-gray-50 hover:bg-gray-100"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Button,
          {
            disabled: node.children?.length === 0,
            variant: "ghost",
            size: "icon",
            className: "bg-transparent hover:bg-transparent",
            onClick: (e) => {
              e.stopPropagation();
              node.toggle();
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: node.children?.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.MinusIcon, { className: "w-4 h-4" }) : node.isClosed ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.ChevronDownIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.ChevronUpIcon, { className: "w-4 h-4" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex-1", children: node.data.name }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenu, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: cn(
                "opacity-0 group-hover:opacity-100 transition",
                open && "opacity-100"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.EllipsisVerticalIcon, { className: "w-4 h-4" })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenuContent, { onCloseAutoFocus: (e) => e.preventDefault(), children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  store.copyNode(node.id);
                  setOpen(false);
                },
                children: "Copy"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              DropdownMenuItem,
              {
                onClick: async (e) => {
                  e.stopPropagation();
                  store.pasteNode(node.id);
                  setOpen(false);
                },
                children: "Paste"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  store.duplicateNode(node.id);
                },
                children: "Duplicate"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  store.deleteNodes([node.id]);
                },
                children: "Delete"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuSeparator, {}),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuLabel, { children: "Add Block" }),
            store.blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  store.createNode(node.id, 0, block.type);
                },
                children: (0, import_lodash11.startCase)(block.type)
              },
              block.type
            ))
          ] })
        ] })
      ]
    }
  );
};
//# sourceMappingURL=index.js.map