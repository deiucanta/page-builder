// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/input.tsx
import { jsx } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
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
import { observer as observer10 } from "mobx-react-lite";

// src/store/Field.tsx
import { observer as observer9 } from "mobx-react-lite";
import { types as types10 } from "mobx-state-tree";

// src/store/JsonValue.ts
import { types } from "mobx-state-tree";
var JsonValue = types.custom({
  name: "JSON",
  fromSnapshot: (value) => value,
  toSnapshot: (value) => value,
  isTargetType: () => true,
  getValidationMessage: () => ""
});

// src/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx2(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/store/ArrayField.tsx
import { observer } from "mobx-react-lite";
import { types as types2 } from "mobx-state-tree";
import { startCase } from "lodash";

// src/components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx3 } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
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
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function Accordion({
  ...props
}) {
  return /* @__PURE__ */ jsx4(AccordionPrimitive.Root, { "data-slot": "accordion", ...props });
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsx4(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx4(ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...props,
      children: /* @__PURE__ */ jsx4("div", { className: cn("pt-0 pb-4", className), children })
    }
  );
}

// src/store/ArrayField.tsx
import React from "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var ArrayField = types2.model("ArrayField", {
  name: types2.identifier,
  type: types2.literal("array"),
  fields: types2.array(types2.late(() => Field)),
  defaultValue: types2.optional(types2.array(JsonValue), [])
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
var ArrayFieldComponent = observer(
  ({
    field,
    node,
    path
  }) => {
    const rows = field.getRows(node, [...path, field.name]);
    const [openRow, setOpenRow] = React.useState(void 0);
    return /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx5(Label, { children: startCase(field.name) }),
        /* @__PURE__ */ jsx5(
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
      /* @__PURE__ */ jsx5(Accordion, { type: "single", collapsible: true, value: openRow, onValueChange: setOpenRow, children: rows.map((row, index) => {
        const rowKey = index.toString();
        return /* @__PURE__ */ jsxs2(AccordionItem, { value: rowKey, children: [
          /* @__PURE__ */ jsxs2(AccordionTrigger, { className: "text-sm", children: [
            "Item ",
            index + 1
          ] }),
          /* @__PURE__ */ jsx5(AccordionContent, { children: /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-2", children: [
            field.fields.map((nestedField) => /* @__PURE__ */ jsx5(
              FieldComponent,
              {
                field: nestedField,
                node,
                path: [...path, field.name, index.toString()]
              },
              nestedField.name
            )),
            /* @__PURE__ */ jsx5(
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
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { jsx as jsx6 } from "react/jsx-runtime";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx6(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsx6(CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/store/CheckboxField.tsx
import { observer as observer2 } from "mobx-react-lite";
import { types as types3 } from "mobx-state-tree";
import { startCase as startCase2 } from "lodash";
import { useId } from "react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var CheckboxField = types3.model("CheckboxField", {
  name: types3.identifier,
  type: types3.literal("checkbox"),
  defaultValue: types3.optional(types3.boolean, false)
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var CheckboxFieldComponent = observer2(
  ({
    field,
    node,
    path
  }) => {
    const id = useId();
    return /* @__PURE__ */ jsxs3("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx7(
        Checkbox,
        {
          id,
          checked: field.getValue(node, [...path, field.name]),
          onCheckedChange: (checked) => field.setValue(node, [...path, field.name], Boolean(checked))
        }
      ),
      /* @__PURE__ */ jsx7(Label, { htmlFor: id, children: startCase2(field.name) })
    ] });
  }
);

// src/store/NumberField.tsx
import { observer as observer3 } from "mobx-react-lite";
import { types as types4 } from "mobx-state-tree";
import { startCase as startCase3 } from "lodash";
import { useId as useId2 } from "react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var NumberField = types4.model("NumberField", {
  name: types4.identifier,
  type: types4.literal("number"),
  defaultValue: types4.optional(types4.number, 0)
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var NumberFieldComponent = observer3(
  ({
    field,
    node,
    path
  }) => {
    const id = useId2();
    const history = useStoreHistory();
    return /* @__PURE__ */ jsxs4("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ jsx8(Label, { htmlFor: id, children: startCase3(field.name) }),
      /* @__PURE__ */ jsx8(
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
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon as CheckIcon2, ChevronDownIcon as ChevronDownIcon2, ChevronUpIcon } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx9(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx9(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs5(
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
        /* @__PURE__ */ jsx9(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx9(ChevronDownIcon2, { className: "size-4 opacity-50" }) })
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
  return /* @__PURE__ */ jsx9(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs5(
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
        /* @__PURE__ */ jsx9(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx9(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx9(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs5(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx9("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx9(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx9(CheckIcon2, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx9(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx9(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx9(ChevronDownIcon2, { className: "size-4" })
    }
  );
}

// src/store/SelectField.tsx
import { observer as observer4 } from "mobx-react-lite";
import { types as types5 } from "mobx-state-tree";
import { startCase as startCase4 } from "lodash";
import { useId as useId3 } from "react";
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var SelectField = types5.model("SelectField", {
  name: types5.identifier,
  type: types5.literal("select"),
  defaultValue: types5.optional(types5.string, ""),
  options: types5.array(types5.model({ label: types5.string, value: types5.string }))
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var SelectFieldComponent = observer4(
  ({
    field,
    node,
    path
  }) => {
    const id = useId3();
    const value = field.getValue(node, [...path, field.name]);
    const label = field.options.find((option) => option.value === value)?.label;
    return /* @__PURE__ */ jsxs6("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ jsx10(Label, { htmlFor: id, children: startCase4(field.name) }),
      /* @__PURE__ */ jsxs6(
        Select,
        {
          value,
          onValueChange: (value2) => field.setValue(node, [...path, field.name], value2),
          children: [
            /* @__PURE__ */ jsx10(SelectTrigger, { id, children: label }),
            /* @__PURE__ */ jsx10(SelectContent, { children: field.options.map((option) => /* @__PURE__ */ jsx10(SelectItem, { value: option.value, children: option.label }, option.value)) })
          ]
        }
      )
    ] });
  }
);

// src/store/TextField.tsx
import { observer as observer5 } from "mobx-react-lite";
import { types as types6 } from "mobx-state-tree";
import { startCase as startCase5 } from "lodash";
import { useId as useId4 } from "react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var TextField = types6.model("TextField", {
  name: types6.identifier,
  type: types6.literal("text"),
  defaultValue: types6.optional(types6.string, "")
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var TextFieldComponent = observer5(
  ({
    field,
    node,
    path
  }) => {
    const id = useId4();
    const history = useStoreHistory();
    return /* @__PURE__ */ jsxs7("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ jsx11(Label, { htmlFor: id, children: startCase5(field.name) }),
      /* @__PURE__ */ jsx11(
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
import { observer as observer6 } from "mobx-react-lite";
import { types as types7 } from "mobx-state-tree";

// src/components/ui/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx12(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx12(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx12(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
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
  return /* @__PURE__ */ jsxs8(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx12(DialogOverlay, {}),
    /* @__PURE__ */ jsxs8(
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
          showCloseButton && /* @__PURE__ */ jsxs8(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx12(XIcon, {}),
                /* @__PURE__ */ jsx12("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
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
  return /* @__PURE__ */ jsx12(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}

// src/store/MediaField.tsx
import { useState, useId as useId5 } from "react";
import { startCase as startCase6 } from "lodash";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var MediaField = types7.model("MediaField", {
  name: types7.identifier,
  type: types7.literal("media"),
  defaultValue: types7.optional(types7.string, "")
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var MediaFieldComponent = observer6(
  ({
    field,
    node,
    path
  }) => {
    const history = useStoreHistory();
    const fullPath = [...path, field.name];
    const value = field.getValue(node, fullPath);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value || "");
    const id = useId5();
    const handleUrlSubmit = () => {
      history.withoutUndo(() => {
        field.setValue(node, fullPath, inputValue);
      });
      setDialogOpen(false);
    };
    return /* @__PURE__ */ jsxs9("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ jsx13(Label, { htmlFor: id, children: startCase6(field.name) }),
      /* @__PURE__ */ jsxs9(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: [
        /* @__PURE__ */ jsx13(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx13(Button, { variant: "outline", className: "w-full", children: value ? "Change Media" : "Select Media" }) }),
        /* @__PURE__ */ jsxs9(DialogContent, { className: "max-w-4xl h-[80vh]", children: [
          /* @__PURE__ */ jsx13(DialogHeader, { children: /* @__PURE__ */ jsx13(DialogTitle, { children: "Enter Media URL" }) }),
          /* @__PURE__ */ jsxs9("div", { className: "flex gap-2 p-4", children: [
            /* @__PURE__ */ jsx13(
              Input,
              {
                type: "url",
                value: inputValue,
                onChange: (e) => setInputValue(e.target.value),
                placeholder: "Enter image or media URL",
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx13(Button, { onClick: handleUrlSubmit, children: "Set Media" })
          ] }),
          inputValue && /* @__PURE__ */ jsx13("div", { className: "p-4", children: /* @__PURE__ */ jsx13(
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
      value && /* @__PURE__ */ jsx13("div", { className: "mt-2", children: /* @__PURE__ */ jsx13(
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
import { observer as observer7 } from "mobx-react-lite";
import { types as types8 } from "mobx-state-tree";

// src/components/ui/textarea.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx14(
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
import { startCase as startCase7 } from "lodash";
import { useId as useId6, useState as useState2 } from "react";
import { ExpandIcon } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
var TextareaField = types8.model("TextareaField", {
  name: types8.identifier,
  type: types8.literal("textarea"),
  defaultValue: types8.optional(types8.string, "")
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var TextareaFieldComponent = observer7(
  ({
    field,
    node,
    path
  }) => {
    const history = useStoreHistory();
    const fullPath = [...path, field.name];
    const value = field.getValue(node, fullPath);
    const id = useId6();
    const [dialogOpen, setDialogOpen] = useState2(false);
    const [dialogValue, setDialogValue] = useState2(value);
    const handleChange = (newValue) => {
      history.withoutUndo(() => {
        field.setValue(node, fullPath, newValue);
      });
    };
    const handleDialogSave = () => {
      handleChange(dialogValue);
      setDialogOpen(false);
    };
    return /* @__PURE__ */ jsxs10("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx15(Label, { htmlFor: id, children: startCase7(field.name) }),
        /* @__PURE__ */ jsxs10(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: [
          /* @__PURE__ */ jsx15(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx15(Button, { size: "icon", variant: "ghost", className: "h-6 w-6", children: /* @__PURE__ */ jsx15(ExpandIcon, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsxs10(DialogContent, { className: "max-w-4xl", children: [
            /* @__PURE__ */ jsx15(DialogHeader, { children: /* @__PURE__ */ jsx15(DialogTitle, { children: startCase7(field.name) }) }),
            /* @__PURE__ */ jsxs10("div", { className: "grid gap-4", children: [
              /* @__PURE__ */ jsx15(
                Textarea,
                {
                  value: dialogValue,
                  onChange: (e) => setDialogValue(e.target.value),
                  className: "min-h-[400px] font-mono"
                }
              ),
              /* @__PURE__ */ jsxs10("div", { className: "flex justify-end gap-2", children: [
                /* @__PURE__ */ jsx15(Button, { variant: "outline", onClick: () => setDialogOpen(false), children: "Cancel" }),
                /* @__PURE__ */ jsx15(Button, { onClick: handleDialogSave, children: "Save" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx15(
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
import { observer as observer8 } from "mobx-react-lite";
import { types as types9 } from "mobx-state-tree";
import { useState as useState3, useEffect, useId as useId7, useRef } from "react";
import { startCase as startCase8 } from "lodash";
import { Fragment, jsx as jsx16, jsxs as jsxs11 } from "react/jsx-runtime";
var ExternalField = types9.model("ExternalField", {
  name: types9.identifier,
  type: types9.literal("external"),
  defaultValue: types9.optional(types9.string, ""),
  endpoint: types9.string
}).views((self) => ({
  getValue: (node, path) => {
    return node.getPropValue(path) ?? self.defaultValue;
  }
})).actions((self) => ({
  setValue: (node, path, value) => {
    node.setPropValue(path, value);
  }
}));
var ExternalFieldComponent = observer8(
  ({
    field,
    node,
    path
  }) => {
    const history = useStoreHistory();
    const id = useId7();
    const buttonRef = useRef(null);
    const value = field.getValue(node, [...path, field.name]);
    const [open, setOpen] = useState3(false);
    const [isLoading, setIsLoading] = useState3(false);
    const [isLoadingSelected, setIsLoadingSelected] = useState3(false);
    const [selectedItem, setSelectedItem] = useState3(null);
    const [searchQuery, setSearchQuery] = useState3("");
    const [debouncedSearch, setDebouncedSearch] = useState3("");
    const [page, setPage] = useState3(1);
    const pageSize = 10;
    const [response, setResponse] = useState3({
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
    useEffect(() => {
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
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedSearch(searchQuery);
        setPage(1);
      }, 300);
      return () => clearTimeout(timer);
    }, [searchQuery]);
    useEffect(() => {
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
    return /* @__PURE__ */ jsxs11("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ jsx16(Label, { htmlFor: id, onClick: () => buttonRef.current?.click(), className: "cursor-pointer", children: startCase8(field.name) }),
      /* @__PURE__ */ jsxs11("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx16(
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
        /* @__PURE__ */ jsxs11(Dialog, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx16(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx16(Button, { ref: buttonRef, type: "button", variant: "outline", size: "sm", children: "Select" }) }),
          /* @__PURE__ */ jsxs11(DialogContent, { className: "sm:max-w-[680px] h-[80vh] flex flex-col", children: [
            /* @__PURE__ */ jsx16(DialogHeader, { className: "shrink-0", children: /* @__PURE__ */ jsx16(DialogTitle, { children: "Select Item" }) }),
            /* @__PURE__ */ jsx16("div", { className: "shrink-0 mb-4", children: /* @__PURE__ */ jsx16(
              Input,
              {
                placeholder: "Search items...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full"
              }
            ) }),
            isLoading ? /* @__PURE__ */ jsx16("div", { className: "flex-1 flex items-center justify-center", children: "Loading items..." }) : /* @__PURE__ */ jsxs11(Fragment, { children: [
              /* @__PURE__ */ jsx16("div", { className: "flex-1 space-y-2 overflow-y-auto min-h-0", children: items.length > 0 ? items.map((item) => /* @__PURE__ */ jsxs11(
                "div",
                {
                  className: `border rounded-md p-3 cursor-pointer hover:border-primary transition-colors ${value === item.id ? "border-primary ring-1 ring-primary bg-primary/5" : ""}`,
                  onClick: () => handleSelectItem(item),
                  children: [
                    /* @__PURE__ */ jsx16("div", { className: "font-medium", children: item.label }),
                    /* @__PURE__ */ jsx16("div", { className: "text-xs text-muted-foreground", children: item.id })
                  ]
                },
                item.id
              )) : /* @__PURE__ */ jsx16("div", { className: "flex items-center justify-center h-full text-muted-foreground", children: "No items found" }) }),
              (hasNextPage || hasPrevPage) && /* @__PURE__ */ jsxs11("div", { className: "shrink-0 flex items-center justify-between mt-4 pt-4 border-t", children: [
                /* @__PURE__ */ jsx16(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: goToPrevPage,
                    disabled: !hasPrevPage,
                    children: "Previous"
                  }
                ),
                /* @__PURE__ */ jsxs11("span", { className: "text-sm text-muted-foreground", children: [
                  "Page ",
                  page,
                  " of ",
                  totalPages,
                  " (",
                  totalCount,
                  " items)"
                ] }),
                /* @__PURE__ */ jsx16(
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
      value && /* @__PURE__ */ jsx16("div", { className: "mt-1 border rounded p-2 bg-muted/50", children: isLoadingSelected ? /* @__PURE__ */ jsx16("div", { className: "text-sm text-muted-foreground", children: "Loading item..." }) : selectedItem ? /* @__PURE__ */ jsxs11("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsx16("div", { className: "font-medium", children: selectedItem.label }),
        /* @__PURE__ */ jsx16("div", { className: "text-xs text-muted-foreground", children: selectedItem.id })
      ] }) : /* @__PURE__ */ jsx16("div", { className: "text-sm text-muted-foreground", children: "Item not found" }) })
    ] });
  }
);

// src/store/Field.tsx
import { Fragment as Fragment2, jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
var Field = types10.union(
  TextField,
  NumberField,
  CheckboxField,
  SelectField,
  ArrayField,
  MediaField,
  TextareaField,
  ExternalField
);
var FieldComponent = observer9(
  ({
    field,
    node,
    path
  }) => {
    return /* @__PURE__ */ jsxs12(Fragment2, { children: [
      field.type === "text" && /* @__PURE__ */ jsx17(TextFieldComponent, { field, node, path }),
      field.type === "number" && /* @__PURE__ */ jsx17(NumberFieldComponent, { field, node, path }),
      field.type === "checkbox" && /* @__PURE__ */ jsx17(CheckboxFieldComponent, { field, node, path }),
      field.type === "select" && /* @__PURE__ */ jsx17(SelectFieldComponent, { field, node, path }),
      field.type === "array" && /* @__PURE__ */ jsx17(ArrayFieldComponent, { field, node, path }),
      field.type === "media" && /* @__PURE__ */ jsx17(MediaFieldComponent, { field, node, path }),
      field.type === "textarea" && /* @__PURE__ */ jsx17(TextareaFieldComponent, { field, node, path }),
      field.type === "external" && /* @__PURE__ */ jsx17(ExternalFieldComponent, { field, node, path })
    ] });
  }
);

// src/store/Block.ts
import { types as types11 } from "mobx-state-tree";
var Block = types11.model("Block", {
  type: types11.identifier,
  fields: types11.array(Field)
});

// src/store/Node.ts
import { get as getPath, set as setPath } from "lodash";
import { cast, getSnapshot, types as types12 } from "mobx-state-tree";
var Node = types12.model("Node", {
  id: types12.optional(types12.identifier, () => Math.random().toString(36).substring(2, 15)),
  name: types12.string,
  type: types12.string,
  open: types12.optional(types12.boolean, true),
  props: types12.map(JsonValue),
  children: types12.union(types12.array(types12.late(() => Node)), types12.undefined)
}).views((self) => ({
  getPropValue(path) {
    return getPath(getSnapshot(self.props), path.join("."));
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
    const snapshot = structuredClone(getSnapshot(self.props));
    self.props = cast(setPath(snapshot, path.join("."), value));
  },
  toggle() {
    self.open = !self.open;
  },
  getSnapshotWithoutId() {
    return {
      ...getSnapshot(self),
      id: void 0,
      children: self.children?.map((child) => child.getSnapshotWithoutId())
    };
  }
}));

// src/store/RootStore.ts
import {
  destroy,
  detach,
  flow,
  getParentOfType,
  getSnapshot as getSnapshot2,
  types as types13
} from "mobx-state-tree";
var APP_CLIPBOARD_MIME = "application/x-page-editor-node";
var RootStore = types13.model("RootStore", {
  root: Node,
  selectedNode: types13.maybeNull(types13.reference(Node)),
  blocks: types13.array(Block)
}).views((self) => ({
  get data() {
    return self.root.children ? getSnapshot2(self.root.children, false) : [];
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
        const parent = getParentOfType(node, Node);
        console.log("parent", parent && getSnapshot2(parent));
        self.selectedNode = parent;
      }
      destroy(node);
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
    console.log("before", self.selectedNode && getSnapshot2(self.selectedNode));
    self.selectedNode = node;
    console.log("after", getSnapshot2(self.selectedNode));
    return getSnapshot2(node);
  },
  moveNodes: (parentId, index, dragIds) => {
    const parent = self.findNode(parentId ?? "root");
    if (!parent) return;
    const nodes = [];
    for (const dragId of dragIds) {
      const node = self.findNode(dragId);
      if (!node) continue;
      nodes.push(node);
      detach(node);
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
    const parent = getParentOfType(node, Node);
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
  pasteNode: flow(function* (parentId = "root") {
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
import { UndoManager } from "mst-middlewares";
import { createContext, useContext } from "react";
function createStoreAndHistory(blocks) {
  const store = RootStore.create({
    root: {
      id: "root",
      name: "Root",
      type: "root"
    },
    blocks
  });
  const history = UndoManager.create({}, { targetStore: store });
  return { store, history };
}
var StoreContext = createContext(null);
var StoreProvider = StoreContext.Provider;
var StoreHistoryContext = createContext(null);
var StoreHistoryProvider = StoreHistoryContext.Provider;
var useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return store;
};
var useStoreHistory = () => {
  const history = useContext(StoreHistoryContext);
  if (!history) {
    throw new Error("useStoreHistory must be used within a StoreHistoryProvider");
  }
  return history;
};

// src/components/BlockEditor.tsx
import { startCase as startCase9 } from "lodash";
import { jsx as jsx18, jsxs as jsxs13 } from "react/jsx-runtime";
var BlockEditor = observer10(() => {
  const store = useStore();
  const node = store.selectedNode;
  const component = store.selectedBlock;
  if (!node || !component) return null;
  return /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx18("h2", { className: "text-lg font-bold", children: startCase9(component.type) }),
    /* @__PURE__ */ jsxs13("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [
      /* @__PURE__ */ jsx18(Label, { htmlFor: "block-name", children: "Block Name" }),
      /* @__PURE__ */ jsx18(
        Input,
        {
          id: "block-name",
          value: node.name,
          onChange: (e) => store.renameNode(node.id, e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsx18("hr", {}),
    component.fields.map((field) => /* @__PURE__ */ jsx18(FieldComponent, { field, node, path: [] }, field.name))
  ] }, node.id);
});

// src/components/Canvas.tsx
import { Minus, MousePointer, Plus } from "lucide-react";
import { useCallback, useEffect as useEffect2, useRef as useRef2, useState as useState4 } from "react";
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
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
  const [selectedViewport, setSelectedViewport] = useState4(
    DEFAULT_VIEWPORT
  );
  const [zoomLevel, setZoomLevel] = useState4(1);
  const [maxZoom, setMaxZoom] = useState4(MAX_ZOOM);
  const [containerSize, setContainerSize] = useState4({ width: 0, height: 0 });
  const [inspectMode, setInspectMode] = useState4(false);
  const containerRef = useRef2(null);
  const overlayId = "selected-block-overlay";
  const hoverOverlayId = "hover-block-overlay";
  const updateContainerSize = useCallback(() => {
    if (!containerRef.current) return;
    const { offsetWidth, offsetHeight } = containerRef.current;
    setContainerSize({ width: offsetWidth, height: offsetHeight });
  }, []);
  const calculateMaxZoom = useCallback(() => {
    if (!containerRef.current || !selectedViewport) return;
    const containerWidth = containerRef.current.offsetWidth;
    const viewportWidth = selectedViewport.width;
    const calculatedMaxZoom = containerWidth / viewportWidth;
    const newMaxZoom = Math.min(calculatedMaxZoom, MAX_ZOOM);
    setMaxZoom(newMaxZoom);
    return newMaxZoom;
  }, [selectedViewport]);
  const updateZoomLevel = useCallback(() => {
    updateContainerSize();
    const newMaxZoom = calculateMaxZoom();
    if (!newMaxZoom) return;
    if (newMaxZoom >= 1) {
      setZoomLevel(1);
    } else {
      setZoomLevel(newMaxZoom);
    }
  }, [calculateMaxZoom, updateContainerSize]);
  useEffect2(() => {
    if (selectedViewport) {
      setTimeout(updateZoomLevel, 0);
    }
  }, [selectedViewport, updateZoomLevel]);
  useEffect2(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      updateZoomLevel();
    });
    resizeObserver.observe(containerRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [updateZoomLevel]);
  useEffect2(() => {
    window.addEventListener("resize", updateZoomLevel);
    return () => {
      window.removeEventListener("resize", updateZoomLevel);
    };
  }, [updateZoomLevel]);
  useEffect2(() => {
    updateContainerSize();
  }, [updateContainerSize]);
  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + ZOOM_STEP, maxZoom));
  }, [maxZoom]);
  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
  }, []);
  const handleViewportChange = useCallback((value) => {
    const viewport = VIEWPORTS.find((v) => v.name === value);
    if (viewport) {
      setSelectedViewport(viewport);
    }
  }, []);
  useEffect2(() => {
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
  useEffect2(() => {
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
  const toggleInspectMode = useCallback(() => {
    setInspectMode((prev) => !prev);
  }, []);
  if (!selectedViewport) return null;
  return /* @__PURE__ */ jsxs14("div", { className: cn("border flex flex-col h-full", className), children: [
    /* @__PURE__ */ jsxs14("div", { className: "flex justify-between items-center p-2", children: [
      /* @__PURE__ */ jsx19("div", { children: /* @__PURE__ */ jsxs14(Select, { value: selectedViewport.name, onValueChange: handleViewportChange, children: [
        /* @__PURE__ */ jsx19(SelectTrigger, { className: "w-[220px]", children: /* @__PURE__ */ jsx19(SelectValue, { placeholder: "Select viewport" }) }),
        /* @__PURE__ */ jsx19(SelectContent, { children: VIEWPORTS.map((viewport) => /* @__PURE__ */ jsx19(SelectItem, { value: viewport.name, children: viewport.name }, viewport.name)) })
      ] }) }),
      /* @__PURE__ */ jsxs14("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx19(
          Button,
          {
            variant: inspectMode ? "default" : "outline",
            size: "icon",
            onClick: toggleInspectMode,
            title: "Select to inspect",
            className: inspectMode ? "bg-blue-500 text-white" : "",
            children: /* @__PURE__ */ jsx19(MousePointer, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx19(
          Button,
          {
            variant: "outline",
            size: "icon",
            onClick: handleZoomOut,
            disabled: zoomLevel <= MIN_ZOOM,
            children: /* @__PURE__ */ jsx19(Minus, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxs14("span", { className: "w-12 text-center", children: [
          Math.round(zoomLevel * 100),
          "%"
        ] }),
        /* @__PURE__ */ jsx19(
          Button,
          {
            variant: "outline",
            size: "icon",
            onClick: handleZoomIn,
            disabled: zoomLevel >= maxZoom,
            children: /* @__PURE__ */ jsx19(Plus, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx19("div", { ref: containerRef, className: "relative border overflow-hidden flex-1", children: /* @__PURE__ */ jsx19(
      "div",
      {
        style: {
          width: selectedViewport.width,
          height: containerSize.height / zoomLevel,
          transform: `scale(${zoomLevel})`,
          transformOrigin: "top left"
        },
        className: "mx-auto",
        children: /* @__PURE__ */ jsx19("iframe", { ref: iframeRef, src: url, className: "border-0 w-full h-full", title: "Preview" })
      }
    ) })
  ] });
}

// src/components/ui/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon as CheckIcon3, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx20, jsxs as jsxs15 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx20(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsx20(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsx20(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}

// src/PageBuilder.tsx
import {
  ChevronDownIcon as ChevronDownIcon3,
  ChevronUpIcon as ChevronUpIcon2,
  EllipsisVerticalIcon,
  MinusIcon
} from "lucide-react";
import { observer as observer11 } from "mobx-react-lite";
import { useEffect as useEffect3, useRef as useRef3, useState as useState5 } from "react";
import { Tree } from "react-arborist";
import useResizeObserver from "use-resize-observer";
import { startCase as startCase10 } from "lodash";
import { Fragment as Fragment3, jsx as jsx21, jsxs as jsxs16 } from "react/jsx-runtime";
var PageBuilder = observer11(
  ({
    blocks,
    initialData,
    onSave,
    onPublish,
    previewUrl,
    className,
    debounce = 1e3
  }) => {
    const [{ store, history }] = useState5(() => createStoreAndHistory(blocks));
    const [saving, setSaving] = useState5(false);
    const saveTimeoutRef = useRef3(void 0);
    const treeRef = useRef3(null);
    const iframeRef = useRef3(null);
    const treeContainer = useResizeObserver();
    useEffect3(() => {
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
    useEffect3(() => {
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
    useEffect3(() => {
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
    return /* @__PURE__ */ jsx21(StoreProvider, { value: store, children: /* @__PURE__ */ jsx21(StoreHistoryProvider, { value: history, children: /* @__PURE__ */ jsxs16("div", { className: cn("h-screen flex", className), children: [
      /* @__PURE__ */ jsxs16("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs16("div", { className: "flex justify-between items-center p-2 border-b", children: [
          /* @__PURE__ */ jsx21(History, {}),
          saving && /* @__PURE__ */ jsx21("div", { children: "saving" }),
          /* @__PURE__ */ jsxs16(DropdownMenu, { children: [
            /* @__PURE__ */ jsx21(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx21(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx21(EllipsisVerticalIcon, { className: "w-4 h-4" }) }) }),
            /* @__PURE__ */ jsxs16(DropdownMenuContent, { onCloseAutoFocus: (e) => e.preventDefault(), children: [
              onSave && /* @__PURE__ */ jsx21(DropdownMenuItem, { onClick: () => saveData(), children: "Save" }),
              onPublish && /* @__PURE__ */ jsx21(DropdownMenuItem, { onClick: handlePublish, children: "Publish" }),
              /* @__PURE__ */ jsx21(
                DropdownMenuItem,
                {
                  onClick: async (e) => {
                    e.stopPropagation();
                    store.pasteNode();
                  },
                  children: "Paste"
                }
              ),
              /* @__PURE__ */ jsx21(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsx21(DropdownMenuLabel, { children: "Add Block" }),
              store.blocks.map((block) => /* @__PURE__ */ jsx21(
                DropdownMenuItem,
                {
                  onClick: (e) => {
                    e.stopPropagation();
                    store.createNode("root", 0, block.type);
                  },
                  children: startCase10(block.type)
                },
                block.type
              ))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx21("div", { ref: treeContainer.ref, className: "flex-1 min-h-0", children: /* @__PURE__ */ jsx21(
          Tree,
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
      /* @__PURE__ */ jsx21("div", { className: "flex-1 min-w-0", children: previewUrl && /* @__PURE__ */ jsx21(
        Canvas,
        {
          iframeRef,
          url: previewUrl,
          selectedNodeId,
          onSelect: (id) => store.selectNode(id)
        }
      ) }),
      /* @__PURE__ */ jsx21("div", { className: "w-[300px] p-4 overflow-auto", children: /* @__PURE__ */ jsx21(BlockEditor, {}) })
    ] }) }) });
  }
);
var History = observer11(() => {
  const history = useStoreHistory();
  return /* @__PURE__ */ jsxs16("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsx21(Button, { onClick: () => history.undo(), disabled: !history.canUndo, children: "Undo" }),
    /* @__PURE__ */ jsx21(Button, { onClick: () => history.redo(), disabled: !history.canRedo, children: "Redo" })
  ] });
});
var NodeRenderer = ({ node, style, dragHandle }) => {
  const store = useStore();
  const [open, setOpen] = useState5(false);
  return /* @__PURE__ */ jsxs16(
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
        /* @__PURE__ */ jsx21(
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
            children: /* @__PURE__ */ jsx21(Fragment3, { children: node.children?.length === 0 ? /* @__PURE__ */ jsx21(MinusIcon, { className: "w-4 h-4" }) : node.isClosed ? /* @__PURE__ */ jsx21(ChevronDownIcon3, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx21(ChevronUpIcon2, { className: "w-4 h-4" }) })
          }
        ),
        /* @__PURE__ */ jsx21("div", { className: "flex-1", children: node.data.name }),
        /* @__PURE__ */ jsxs16(DropdownMenu, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx21(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx21(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: cn(
                "opacity-0 group-hover:opacity-100 transition",
                open && "opacity-100"
              ),
              children: /* @__PURE__ */ jsx21(EllipsisVerticalIcon, { className: "w-4 h-4" })
            }
          ) }),
          /* @__PURE__ */ jsxs16(DropdownMenuContent, { onCloseAutoFocus: (e) => e.preventDefault(), children: [
            /* @__PURE__ */ jsx21(
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
            /* @__PURE__ */ jsx21(
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
            /* @__PURE__ */ jsx21(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  store.duplicateNode(node.id);
                },
                children: "Duplicate"
              }
            ),
            /* @__PURE__ */ jsx21(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  store.deleteNodes([node.id]);
                },
                children: "Delete"
              }
            ),
            /* @__PURE__ */ jsx21(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx21(DropdownMenuLabel, { children: "Add Block" }),
            store.blocks.map((block) => /* @__PURE__ */ jsx21(
              DropdownMenuItem,
              {
                onClick: (e) => {
                  e.stopPropagation();
                  store.createNode(node.id, 0, block.type);
                },
                children: startCase10(block.type)
              },
              block.type
            ))
          ] })
        ] })
      ]
    }
  );
};
export {
  Block,
  Field,
  Node,
  PageBuilder,
  RootStore
};
//# sourceMappingURL=index.mjs.map