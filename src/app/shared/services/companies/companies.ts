export interface ICompany {
    id: number;
    name: string;
    city: string;
    address: string;
    latitude: string;
    longitude: string;
    img: string;
  }
  export interface ICompanies {
    companies: ICompany[];
  }
  export interface IShortCompanyDescr {
    name: string;
    city:string;
    address: string
  };
  