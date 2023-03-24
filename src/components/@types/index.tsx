import { ReactNode } from "react";

export interface IClassName {
  className?: string;
}

export interface IProductPageStructure {
  bgProduct: string;
  icon: ReactNode;
  title: string;
  info: string;
}
