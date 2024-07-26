import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Admin = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);

    setTabValue(newValue);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabValue} onChange={handleChange}>
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
      </Box>

      <Outlet />
    </div>
  );
};

export default Admin;
