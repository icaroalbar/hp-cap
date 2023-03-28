import { ReactNode } from "react";

export interface IClassName {
  className?: string;
}

export interface ICardPillars {
  icon?: ReactNode;
  title?: string;
  info: string;
}

export interface IProductPageStructure extends ICardPillars {
  bgProduct: string;
}

export interface ICompanyCard extends ICardPillars {
  site?: string;
  src: string;
  alt: string;
}

export interface IFoundersCard extends ICompanyCard {
  name: string;
  office: string;
}
