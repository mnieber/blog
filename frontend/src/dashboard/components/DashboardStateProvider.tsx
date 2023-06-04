import { observer } from 'mobx-react-lite';
import React from 'react';
import { DefaultPropsProvider } from 'react-default-props-context';
import { aphorisms } from '/src/api/data/aphorisms';
import { withDefaultProps } from '/src/app/defaultProps';
import { useDashboardState } from '/src/dashboard/hooks/useDashboardState';

export type PropsT = React.PropsWithChildren<{
  appRef: React.RefObject<HTMLDivElement>;
}>;

const DefaultProps = {};

export const DashboardStateProvider = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const { dashboardState } = useDashboardState({});

    const getDefaultPropsContext = () => {
      const result: any = {
        defaultProps: {
          dashboardState: () => dashboardState,
          appRef: () => props.appRef,
          aphorisms: () => aphorisms,
        },
      };

      return result;
    };

    return (
      <DefaultPropsProvider extend value={getDefaultPropsContext()}>
        {props.children}
      </DefaultPropsProvider>
    );
  }, DefaultProps)
);
