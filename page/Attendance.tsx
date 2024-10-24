import React from "react";
import AttendanceCard from "../components/AttendanceCard";
import { Flex, Grid, NativeSelect, SimpleGrid, Title } from "@mantine/core";

function Attendance() {
  return (
    <>
      <Title>Attendance</Title>
      <Flex my={"md"}>
        <NativeSelect
          variant="filled"
          label="Select Semester"
          data={["Fall Semester 2024", "Winter semesetr 2025"]}
        />
      </Flex>
      <Grid mt={"md"} grow={false}>
        <Grid.Col span={4}>
          <AttendanceCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <AttendanceCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <AttendanceCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <AttendanceCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <AttendanceCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <AttendanceCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <AttendanceCard />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Attendance;
