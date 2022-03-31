import { useMemo } from 'react';

export const useStatisticsData = (dataList, name, dataKey, labelKey) =>
  useMemo(
    () => ({
      data: dataList
        .filter((_v, index) => index % 5 === 0)
        .map(item => parseInt(item[dataKey] ?? 0)),
      labels: dataList
        .filter((_v, index) => index % 5 === 0)
        .map(item => item[labelKey] ?? ''),
      name
    }),
    [dataList, name, labelKey, dataKey]
  );
