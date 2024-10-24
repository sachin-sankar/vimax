"use client";
import { AppShell, Burger, Group, NavLink, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSchool,
  IconCalendarStats,
  IconTableFilled,
  IconBookDownload,
  IconStars,
  IconRefresh,
  IconCheckupList,
  IconFileUpload,
} from "@tabler/icons-react";
import Attendance from "../page/Attendance";

const NavLinks = [
  {
    section: "Academics",
    icon: <IconSchool />,
    items: [
      { label: "Attendance", icon: <IconCalendarStats /> },
      { label: "Assignments", icon: <IconFileUpload /> },
      { label: "Timetable", icon: <IconTableFilled /> },
      { label: "Course Page", icon: <IconBookDownload /> },
    ],
  },
  {
    section: "Examination",
    icon: <IconCheckupList />,
    items: [
      { label: "Exam Schedule", icon: <IconCalendarStats /> },
      { label: "Grades", icon: <IconStars /> },
      { label: "Reapply", icon: <IconRefresh /> },
    ],
  },
];

export default function CollapseDesktop() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {NavLinks.map((section, index) => (
          <NavLink
            label={section.section}
            key={index}
            leftSection={section.icon}
          >
            {section.items.map((item, indexItem) => (
              <NavLink
                label={item.label}
                key={indexItem}
                leftSection={item.icon}
              ></NavLink>
            ))}
          </NavLink>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Attendance />
      </AppShell.Main>
    </AppShell>
  );
}
