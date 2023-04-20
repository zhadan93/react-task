import ENDPOINTS from '@constants/endpoints';
import { CurrentCoords, GeolocationAddresses } from '../types/types';

import axiosInstance from './axiosInstance';

const { GEOLOCATION, GEOLOCATION_ADDRESS } = ENDPOINTS;

const geolocationService = {
  async getGeolocationAddress(params: CurrentCoords): Promise<GeolocationAddresses> {
    const { data } = await axiosInstance.post(`${GEOLOCATION}${GEOLOCATION_ADDRESS}`, params);

    return data;
  },
};

export default geolocationService;
