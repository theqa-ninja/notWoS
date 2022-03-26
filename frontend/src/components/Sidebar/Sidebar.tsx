import { ReactNode } from "react";

/* eslint-disable prettier/prettier */
const Sidebar = ({ children }: { children: ReactNode}) => {
  return (
    <aside className="sidebar"> {children} </aside>
  );
};

export default Sidebar;
