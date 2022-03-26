import { ReactNode } from 'react';

const SidebarFooter = ({ children }: { children: ReactNode }) => {
  return <footer className="sidebar-footer"> {children} </footer>;
};

export default SidebarFooter;
