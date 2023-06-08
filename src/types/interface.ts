export interface interfaceSidebar {
  title?: string;
  icon?: string;
  allow?: string;
  child?: interfaceSidebar[];
  to?: string;
}

export interface interfaceProduct {
  name: string;
  images: string[];
  category: string;
  cogs: number;
  salePrice: number;
  sales?: number;
  stock: number;
  status?: string;
}

export interface interfacePagination {
  perPage?: number | string;
  page: number;
  size: number;
}

export interface interfaceTransaction {
  date: string;
}
