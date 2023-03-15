import { ReactNode } from "react";
import { UseFormRegister, ValidationRule } from "react-hook-form";

export interface IChildren {
  children?: ReactNode;
}

export interface IClassName {
  className?: string;
}

export interface IValueText {
  value: string;
}

export interface ILink extends IValueText {
  href?: string;
}

export interface IColumnsFooter extends IChildren, IValueText {}

export interface ILinkContact extends IValueText, ILink {
  icon: ReactNode;
}

export interface IButton extends IValueText, IClassName {
  color?: string;
  hover?: string;
  type?: "button" | "submit" | "reset" | undefined;
  size?: string;
  isLoading?: boolean;
}

export type IToast = {
  message: string;
  variant: "success" | "error" | "warning" | "info";
};

export interface IValuesSend {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ISelect {
  name: string;
  className?: string;
  placeholder: string;
  isDisabled?: boolean;
  defaultValue?: string;
  children: ReactNode;
  register: UseFormRegister<any>;
  onChange?: (e: any) => void;
}

export interface ITextarea {
  className?: string;
  name: string;
  rules?:
    | Partial<{
        required: string | ValidationRule<boolean>;
        min: ValidationRule<string | number>;
        max: ValidationRule<string | number>;
        deps: string | string[];
      }>
    | undefined;
  placeholder: string;
  isDisabled?: boolean;
  onClick?: () => void;
  register: UseFormRegister<any>;
  id?: string;
  value?: string;
  maxLength?: number;
  errors: any;
  rows?: number;
}
