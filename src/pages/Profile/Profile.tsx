import { useContext, useState } from "react";
import ContentBlock from "../../components/ContentBlock";
import { UserContext } from "../../contexts/UserContext";
import { Tab, Tabs } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { ADMIN, USER } from "../../constants/roles";
import { ShowForPermission } from "../../components/ShowForPermission";

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

  return (
    <section>
      <ContentBlock>
        <div className="px-4 py-6 flex flex-row gap-10">
          <div className="flex flex-col items-center border-r border-neutral-500 gap-6">
            <div>
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
