export type IconProps = {
  className?: string;
};

export interface TopicData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  tasks: {
    total: number;
    complete: number;
  };
}

export interface GeolocationAddress {
  data: {
    city: string;
  };
}

export interface GeolocationAddresses {
  suggestions: GeolocationAddress[];
}

export interface CurrentCoords {
  lat: number;
  lon: number;
}

export interface OrganizationData {
  data: {
    founders:
      | {
          name: string;
        }[]
      | null;
    state: {
      status: string;
      registration_date: number;
      liquidation_date: number | null;
    };
    branch_type: 'MAIN' | 'BRANCH';
    name: {
      full_with_opf: string;
      short_with_opf: string;
    };
    inn: string;
    address: {
      unrestricted_value: string;
    };
  };
}

export interface OrganizationsData {
  suggestions: OrganizationData[];
}

export interface OrganizationFoundQuery {
  query: string;
}

export type LoadingStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';
