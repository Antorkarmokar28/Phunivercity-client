import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarGenerator";
import { adminPaths } from "../../routes/AdminRoutes";
import { facultyPaths } from "../../routes/FacultyRoutes";
import { studentPaths } from "../../routes/StudentRoutes";
import { useAppSelector } from "../../redux/Hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const user = useAppSelector(useCurrentUser);
  let sidebarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "4rem",
        }}
      >
        <h1 style={{ color: "White" }}>PH UNIVERCITY</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
