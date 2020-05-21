/// <reference types="react-scripts" />

declare module "react-admin" {
  import { ComponentType, ComponentPropsWithRef, ReactNode } from "react";
  import {
    AdminProps,
    ResourceProps,
    ReactAdminComponentProps,
    ReactAdminComponentPropsWithId,
  } from "ra-core";

  export interface DatagridProps {
    rowClick?: "edit";
  }

  export interface FieldProps {
    source: string;
  }

  export interface InputProps extends ComponentPropsWithRef<"input"> {
    source: string;
  }

  export interface EditProps extends ReactAdminComponentPropsWithId {
    title?: ReactNode;
  }

  export interface EmailFieldProps extends FieldProps {}

  export interface ListProps extends ReactAdminComponentProps {
    filters?: ReactNode;
  }

  export interface ReferenceFieldProps extends FieldProps {
    reference: string;
  }

  export interface ReferenceInputProps extends InputProps {
    allowEmpty?: boolean;
    label?: string;
    reference: string;
  }

  export interface SelectInputProps {
    optionText: string;
  }

  export interface SimpleListProps {
    primaryText?: (record: Record<string, any>) => string;
    secondaryText?: (record: Record<string, any>) => string;
    tertiaryText?: (record: Record<string, any>) => string;
  }

  export interface TextFieldProps extends FieldProps {}

  export interface TextInputProps extends InputProps {
    alwaysOn?: boolean;
    label?: string;
    multiline?: boolean;
  }

  export interface UrlFieldProps extends FieldProps {}

  export const Admin: ComponentType<AdminProps>;
  export const Create: ComponentType<ReactAdminComponentProps>;
  export const Datagrid: ComponentType<DatagridProps>;
  export const Edit: ComponentType<EditProps>;
  export const EditButton: ComponentType;
  export const EditGuesser: ComponentType<ReactAdminComponentPropsWithId>;
  export const EmailField: ComponentType<EmailFieldProps>;
  export const Filter: ComponentType;
  export const List: ComponentType<ListProps>;
  export const ListGuesser: ComponentType<ReactAdminComponentProps>;
  export const ReferenceField: ComponentType<ReferenceFieldProps>;
  export const ReferenceInput: ComponentType<ReferenceInputProps>;
  export const Resource: ComponentType<ResourceProps>;
  export const SelectInput: ComponentType<SelectInputProps>;
  export const SimpleForm: ComponentType;
  export const SimpleList: ComponentType<SimpleListProps>;
  export const TextField: ComponentType<TextFieldProps>;
  export const TextInput: ComponentType<TextInputProps>;
  export const UrlField: ComponentType<UrlFieldProps>;

  export * from "ra-core";
}
