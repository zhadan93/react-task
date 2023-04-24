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

export type LoadingStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';
