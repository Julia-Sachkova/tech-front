import { useContext, useState } from "react";
import ContentBlock from "../../components/ContentBlock";
import { UserContext } from "../../contexts/UserContext";
import { Tab, Tabs } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { ADMIN, USER } from "../../constants/roles";
import { ShowForPermission } from "../../components/ShowForPermission";
import { Icon } from "@iconify/react";

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const user = useContext(UserContext);

  const userTabs = [
    {
      label: "Основное",
      to: "general",
    },
    {
      label: "Занятия",
      to: "lessons",
    },
    {
      label: "Задания",
      to: "issues",
    },
    {
      label: "Достижения",
      to: "achievements",
    },
    {
      label: "Оплата и подписка",
      to: "payment",
    },
  ];

  const adminTabs = [
    {
      label: "Основное",
      to: "general",
    },
    {
      label: "Проверка заданий",
      to: "review",
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);

    setTabValue(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <section>
      <ContentBlock>
        <div className="px-4 py-6 flex flex-row gap-10">
          <div className="flex flex-col items-center border-r border-neutral-500">
            <div className="flex flex-row justify-between items-center w-full px-3">
              <Link to="settings">
                <Icon
                  icon="tabler:settings"
                  width="24"
                  height="24"
                  className="transition ease-in-out duration-300 hover:scale-110"
                />
              </Link>

              <Link to="/login" onClick={handleLogout}>
                <Icon
                  icon="tabler:logout"
                  width="24"
                  height="24"
                  className="transition ease-in-out duration-300 hover:scale-110"
                />
              </Link>
            </div>

            <div className="mb-6">
              {user?.photo ? (
                <img src={user.photo} className="w-12 h-12 rounded-full" />
              ) : (
                <div className="bg-primary w-24 h-24 rounded-full" />
              )}
            </div>

            <ShowForPermission roles={[USER]}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                orientation="vertical"
                sx={{ height: "100%" }}
              >
                {userTabs.map((tab) => (
                  <Tab
                    label={tab.label}
                    component={Link}
                    to={tab.to}
                    key={tab.label}
                  />
                ))}
              </Tabs>
            </ShowForPermission>

            <ShowForPermission roles={[ADMIN]}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                orientation="vertical"
                sx={{ height: "100%" }}
              >
                {adminTabs.map((tab) => (
                  <Tab
                    label={tab.label}
                    component={Link}
                    to={tab.to}
                    key={tab.label}
                  />
                ))}
              </Tabs>
            </ShowForPermission>
          </div>

          <Outlet />
        </div>
      </ContentBlock>
    </section>
  );
};

export default Profile;
