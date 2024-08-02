import { useContext, useState } from "react";
import ContentBlock from "../../components/ContentBlock";
import { UserContext } from "../../contexts/UserContext";
import { Tab, Tabs } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { ShowForPermission } from "../../components/ShowForPermission";
import { USER } from "../../constants/roles";

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const user = useContext(UserContext);

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

            <Tabs
              value={tabValue}
              onChange={handleChange}
              orientation="vertical"
              sx={{ height: "100%" }}
            >
              <Tab label="Основное" component={Link} to={"general"} />

              <ShowForPermission roles={[USER]}>
                <Tab label="Достижения" component={Link} to={"achievements"} />
              </ShowForPermission>

              <ShowForPermission roles={[USER]}>
                <Tab label="Оплата и другое" component={Link} to={"payment"} />
              </ShowForPermission>
            </Tabs>
          </div>

          <Outlet />
        </div>
      </ContentBlock>
    </section>
  );
};

export default Profile;
