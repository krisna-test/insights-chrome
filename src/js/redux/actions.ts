import * as actionTypes from './action-types';
import { getAllTags, getAllSIDs, getAllWorkloads, TagFilterOptions, TagPagination } from '../App/GlobalFilter/tagsApi';
import { ChromeUser } from '@redhat-cloud-services/types';
import { NavItem } from '../types';
import { AccessRequest, ChromeModule, Navigation } from './store';
import { QuickStart } from '@patternfly/quickstarts';
import { NavDOMEvent } from '../App/Sidenav/Navigation/ChromeLink';

export function userLogIn(user: ChromeUser) {
  return {
    type: actionTypes.USER_LOGIN,
    payload: user,
  };
}

/*
 *TODO: The event type is deliberately nonse. It will start failing once we mirate rest of the app and we will figure out the correct type
 */
export function appNavClick(item: { id?: string }, event: NavDOMEvent) {
  return { type: actionTypes.APP_NAV_CLICK, payload: { ...(item || {}), id: item?.id, event } };
}

export function appAction(action: string) {
  return { type: actionTypes.CHROME_PAGE_ACTION, payload: action };
}

export function appObjectId(objectId: string) {
  return { type: actionTypes.CHROME_PAGE_OBJECT, payload: objectId };
}

export function fetchAllTags(filters?: TagFilterOptions, pagination?: TagPagination) {
  return {
    type: actionTypes.CHROME_GET_ALL_TAGS,
    payload: getAllTags(filters, pagination),
  };
}

export function fetchAllSIDs(filters?: TagFilterOptions, pagination?: TagPagination) {
  return {
    type: actionTypes.CHROME_GET_ALL_SIDS,
    payload: getAllSIDs(filters, pagination),
  };
}

export function fetchAllWorkloads(filters?: TagFilterOptions, pagination?: TagPagination) {
  return {
    type: actionTypes.CHROME_GET_ALL_WORKLOADS,
    payload: getAllWorkloads(filters, pagination),
  };
}

export function globalFilterScope(scope: string) {
  return {
    type: actionTypes.GLOBAL_FILTER_SCOPE,
    payload: scope,
  };
}

/*
 *TODO: SelectedTags type is deliberately nonse. It will start failing once we mirate rest of the app and we will figure out the correct type
 */
export function globalFilterChange(selectedTags: Record<string, Date>) {
  return {
    type: actionTypes.GLOBAL_FILTER_UPDATE,
    payload: selectedTags,
  };
}

export function toggleGlobalFilter(isHidden = true) {
  return {
    type: actionTypes.GLOBAL_FILTER_TOGGLE,
    payload: { isHidden },
  };
}

export function removeGlobalFilter(isHidden = true) {
  return {
    type: actionTypes.GLOBAL_FILTER_REMOVE,
    payload: { isHidden },
  };
}

export function registerModule(module?: string, manifest?: string) {
  if (!module) {
    throw new Error(`unknown module identifier: ${module}`);
  }
  return {
    type: actionTypes.REGISTER_MODULE,
    payload: {
      module,
      manifest,
    },
  };
}

export const onToggleContextSwitcher = () => ({
  type: actionTypes.TOGGLECONTEXTSWITCHER,
});

export const loadNavigationLandingPage = (schema: NavItem[]) => ({
  type: actionTypes.LOAD_NAVIGATION_LANDING_PAGE,
  payload: schema,
});

export const loadLeftNavSegment = (schema: Navigation, segment: string, pathName: string, shouldMerge?: boolean) => ({
  type: actionTypes.LOAD_LEFT_NAVIGATION_SEGMENT,
  payload: {
    segment,
    schema,
    pathName,
    shouldMerge,
  },
});

export const loadModuesSchema = (schema: { [key: string]: ChromeModule }) => ({
  type: actionTypes.LOAD_MODULES_SCHEMA,
  payload: {
    schema,
  },
});

export const changeActiveModule = (module: string) => ({
  type: actionTypes.CHANGE_ACTIVE_MODULE,
  payload: module,
});

/**
 * @deprecated
 */
export const onToggle = () => ({
  type: 'NAVIGATION_TOGGLE',
});

export const setPendoFeedbackFlag = (payload: boolean) => ({
  type: actionTypes.SET_PENDO_FEEDBACK_FLAG,
  payload,
});

export const toggleFeedbackModal = (payload: boolean) => ({
  type: actionTypes.TOGGLE_FEEDBACK_MODAL,
  payload,
});

export const updateAccessRequestsNotifications = (payload: { count: number; data: AccessRequest[] }) => ({
  type: actionTypes.UPDATE_ACCESS_REQUESTS_NOTIFICATIONS,
  payload,
});

export const markAccessRequestNotification = (payload: string) => ({
  type: actionTypes.MARK_REQUEST_NOTIFICATION_SEEN,
  payload,
});

export const storeInitialHash = (payload?: string) => ({
  type: actionTypes.STORE_INITIAL_HASH,
  payload,
});

export const populateQuickstartsCatalog = (app: string, quickstarts: QuickStart[]) => ({
  type: actionTypes.POPULATE_QUICKSTARTS_CATALOG,
  payload: {
    app,
    quickstarts,
  },
});

export const disableQuickstarts = () => ({
  type: actionTypes.DISABLE_QUICKSTARTS,
});

export const updateDocumentTitle = (title: string) => ({
  type: actionTypes.UPDATE_DOCUMENT_TITLE_REDUCER,
  payload: title,
});
