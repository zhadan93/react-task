const ROUTES = {
  BASE: import.meta.env.BASE_URL,
  LEARNING: '/',
  TASKS: 'tasks',
  NOT_FOUND: '404',
  BRUNCH_INFO: ':brunchId',
} as const;

export default ROUTES;
