import {
  Divider,
  Flex,
  Paper,
  SemiCircleProgress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { DonutChart } from "@mantine/charts";
import React from "react";

function AttendanceCard() {
  return (
    <Paper withBorder shadow="md">
      <Flex justify={"space-between"} align={"center"} p={"md"} gap={"sm"}>
        <SemiCircleProgress
          fillDirection="left-to-right"
          orientation="up"
          filledSegmentColor="blue"
          size={170}
          thickness={20}
          value={47}
          label="47%"
        />
        <Stack gap={"sm"}>
          <Title order={3}>Formal Languages and Automata Theroy</Title>
          <Flex gap={"xs"}>
            <Text size="sm">G343</Text>
            <Divider size={"md"} orientation="vertical" />{" "}
            <Text size="sm">Dr. R. Chandramuki</Text>
          </Flex>
          <Flex gap={"xs"}>
            <Title order={5}>Total: 20</Title>
            <Title order={5}>Attended: 20</Title>
          </Flex>
        </Stack>
      </Flex>
    </Paper>
  );
}

export default AttendanceCard;
