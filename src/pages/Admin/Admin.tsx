import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ContentBlock from "../../components/ContentBlock";

const Admin = () => {
  const currentTab = () => {
    const pathArr = window.location.pathname.split("/");
    let curPath;

    if (pathArr[pathArr.length - 1].includes(":")) {
      const newArr = pathArr.slice(0, -1);

      curPath = newArr[newArr.length - 1];
    } else {
      curPath = pathArr?.[pathArr.length - 1];
    }

    switch (curPath) {
      case "students":
        return 0;
      case "lessons":
        return 1;
      case "issues":
        return 2;
      default:
        return 0;
    }
  };

  const [tabValue, setTabValue] = useState(currentTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);

    setTabValue(newValue);
  };

  useEffect(() => {
    currentTab();
  }, []);

  return (
    <div className="flex flex-1">
      <ContentBlock>
        <div className="flex flex-row justify-start gap-8 px-2 py-6">
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
              to={"issues"}
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
