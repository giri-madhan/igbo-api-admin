import * as ReactAdmin from '../node_modules/react-admin';

// Fake, mocked features
export const useListContext = jest.fn(() => ({
  basePath: '/',
  filterValues: {},
  setFilters: jest.fn(() => ({})),
}));
export const fetchUtils = {
  fetchJson: jest.fn(async () => ({})),
};

// Real, non-mocked features
export const {
  AdminUI,
  Resource,
  sanitizeListRestProps,
  TopToolbar,
  DataProviderContext,
  Title,
  useNotify,
  useListFilterContext,
  useRedirect,
  useRefresh,
  useShowController,
  useGetOne,
  usePermissions,
} = ReactAdmin;

export default ReactAdmin;