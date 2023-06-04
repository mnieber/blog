import { observer } from 'mobx-react-lite';
import React from 'react';
import { dps, withDefaultProps } from '/src/app/defaultProps';
import { MainMenuItemT } from '/src/dashboard/DashboardState/DashboardState';

type PropsT = {
  menuItem: MainMenuItemT;
};

const DefaultProps = {
  ...dps.dashboardState,
};

export const SelectMainMenuItemEffect = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    React.useEffect(() => {
      props.dashboardState.selectMainMenuItem(props.menuItem);
    }, [props.menuItem]);

    return null;
  }, DefaultProps)
);
