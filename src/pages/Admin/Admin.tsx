import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ContentBlock from "../../components/ContentBlock";

const Admin = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);

    setTabValue(newValue);
  };

  return (
    <div className="px-8 py-5 flex flex-1">
      <ContentBlock>
        <div className="flex flex-row justify-start px-1 py-6 gap-8 h-full">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            orientation="vertical"
            sx={{ borderRight: 1, borderColor: "divider", height: "100%" }}
          >
            <Tab
              label="Ученики"
              component={Link}
              to={"students"}
              icon={<SchoolIcon />}
              iconPosition="start"
            />
            <Tab
              label="Занятия"
              component={Link}
              to={"lessons"}
              icon={<PlayCircleFilledIcon />}
              iconPosition="start"
            />
            <Tab
              label="Задания"
              component={Link}
              to={"tasks"}
              icon={<FormatListBulletedIcon />}
              iconPosition="start"
            />
          </Tabs>

          <Outlet />
        </div>
      </ContentBlock>
    </div>
  );
};

export default Admin;
