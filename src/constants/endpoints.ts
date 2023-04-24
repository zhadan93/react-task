const ENDPOINTS = {
  BASE_URL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/',
  GEOLOCATION: '/geolocate',
  GEOLOCATION_ADDRESS: '/address',
  ORGANIZATION: '/party',
  ORGANIZATION_SEARCH_BY_INN: '/findById',
  ORGANIZATION_COMBO_SEARCH: '/suggest',
} as const;

export default ENDPOINTS;
