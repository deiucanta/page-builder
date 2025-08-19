import { observer } from 'mobx-react-lite'
import { Instance, types } from 'mobx-state-tree'
import { ArrayField, ArrayFieldComponent } from './ArrayField'
import { CheckboxField, CheckboxFieldComponent } from './CheckboxField'
import { Node } from './Node'
import { NumberField, NumberFieldComponent } from './NumberField'
import { SelectField, SelectFieldComponent } from './SelectField'
import { TextField, TextFieldComponent } from './TextField'
import { MediaField, MediaFieldComponent } from './MediaField'
import { TextareaField } from '@/store/TextareaField'
import { TextareaFieldComponent } from '@/store/TextareaField'
import { ExternalField, ExternalFieldComponent } from './ExternalField'

export const Field = types.union(
  TextField,
  NumberField,
  CheckboxField,
  SelectField,
  ArrayField,
  MediaField,
  TextareaField,
  ExternalField,
)

export const FieldComponent = observer(
  ({
    field,
    node,
    path,
  }: {
    field: Instance<typeof Field>
    node: Instance<typeof Node>
    path: string[]
  }) => {
    return (
      <>
        {field.type === 'text' && <TextFieldComponent field={field} node={node} path={path} />}
        {field.type === 'number' && <NumberFieldComponent field={field} node={node} path={path} />}
        {field.type === 'checkbox' && (
          <CheckboxFieldComponent field={field} node={node} path={path} />
        )}
        {field.type === 'select' && <SelectFieldComponent field={field} node={node} path={path} />}
        {field.type === 'array' && <ArrayFieldComponent field={field} node={node} path={path} />}
        {field.type === 'media' && <MediaFieldComponent field={field} node={node} path={path} />}
        {field.type === 'textarea' && (
          <TextareaFieldComponent field={field} node={node} path={path} />
        )}
        {field.type === 'external' && (
          <ExternalFieldComponent field={field} node={node} path={path} />
        )}
      </>
    )
  },
)
