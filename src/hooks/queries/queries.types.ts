export interface IListingsResult {
  message: string;
  success: boolean;
  payload: IListing[];
}

export interface ISingleListingResult {
  message: string;
  success: boolean;
  payload: IListing;
}

export interface IListing {
  id: number;
  external_id: string;
  review_widget_id: string;
  name: string;
  city: string;
  street: string;
  location: ILocation;
  distance: number;
  images: IImage[];
  lowest_price_per_night: null;
  lowest_price_per_month: null;
}

export interface IListingDetails extends IListing {
  description: string;
  additional_services: null;
  parking: string;
  thing_to_know: string;
  house_rules: string;
  default_check_in_time: string;
  default_check_out_time: string;
}

interface ILocation {
  lat: number;
  lng: number;
  city: string;
  postalCode: string;
  countryCode: string;
  addressLine1: string;
  countryName: string;
}

interface IImage {
  url: string;
  is_portrait: boolean;
  position: number;
  unit_group_ids: number[];
  tags: string[];
}
