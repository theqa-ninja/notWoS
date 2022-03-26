import { ReactNode } from 'react';

const SidebarHeader = ({ children }: { children: ReactNode }) => {
  return <header className="sidebar-header">{children}</header>;
};

export default SidebarHeader;
