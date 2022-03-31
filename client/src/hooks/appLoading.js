import { useAppSelector } from './reduxHooks';

export function useAppLoading(apiName) {
  const { loadingList } = useAppSelector(state => state.globalLoading);

  return loadingList.includes(apiName);
}
