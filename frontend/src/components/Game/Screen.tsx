import { FunctionComponent } from 'react';

function Screen({
  component
}: {
  component: FunctionComponent | null;
}): JSX.Element | null {
  const Component = component;
  return Component ? <Component /> : null;
}

export default Screen;
