import ENDPOINTS from '@constants/endpoints';
import { OrganizationFoundQuery, OrganizationsData } from '../types/types';

import axiosInstance from './axiosInstance';

const { ORGANIZATION, ORGANIZATION_COMBO_SEARCH, ORGANIZATION_SEARCH_BY_INN } = ENDPOINTS;

const organizationsService = {
  async findOrganizations(params: OrganizationFoundQuery): Promise<OrganizationsData> {
    const { data } = await axiosInstance.post(
      `${ORGANIZATION_COMBO_SEARCH}${ORGANIZATION}`,
      params
    );

    return data;
  },

  async findOrganizationByINN(params: OrganizationFoundQuery): Promise<OrganizationsData> {
    const { data } = await axiosInstance.post(
      `${ORGANIZATION_SEARCH_BY_INN}${ORGANIZATION}`,
      params
    );

    return data;
  },
};

export default organizationsService;
