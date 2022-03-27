import SidebarHeader from 'components/Sidebar/SidebarHeader';
import Chat from 'components/Chat/Chat';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarHeader>
        <h3 className="heading-03">guess</h3>
      </SidebarHeader>
      <Chat />
    </aside>
  );
};

export default Sidebar;
