import { ReactNode } from 'react';

const SidebarBody = ({ children }: { children: ReactNode }) => {
  return (
    <main className="sidebar-body">
      <div className="flex flex-col justify-end h-fit min-h-full">
        {children}
      </div>
    </main>
  );
};

export default SidebarBody;
