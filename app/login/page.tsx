"use client";
import {
  Center,
  Image,
  Paper,
  SegmentedControl,
  Stack,
  Title,
  Text,
  Input,
  PasswordInput,
  Button,
  Anchor,
  LoadingOverlay,
} from "@mantine/core";
import { useTimeout, useViewportSize } from "@mantine/hooks";
import { IconLogin, IconLogin2 } from "@tabler/icons-react";
import React, { useState } from "react";

function Login() {
  const { height, width } = useViewportSize();
  const [loading, setLoading] = useState(false);
  const { start, clear } = useTimeout(() => {
    setLoading(false);
    window.location.replace("/");
  }, 3000);
  return (
    <>
      <Center
        h={height}
        style={{
          background:
            "radial-gradient(circle, rgba(36,36,36,1) 10%, rgba(0,109,225,1) 100%)",
        }}
      >
        <Paper radius="lg">
          <Image
            src={"/vitLogo.svg"}
            radius={"lg"}
            w={580}
            bg={"white"}
            p={"lg"}
          />

          <Stack align="center" my={"lg"} gap={"xs"}>
            <Title>Welcome</Title>
            <Text>Sign in using your creadantials</Text>
          </Stack>
          <SegmentedControl
            fullWidth
            size="md"
            m={"xs"}
            data={["Student", "Faculty", "Parent"]}
          ></SegmentedControl>
          <Stack m={"md"}>
            <LoadingOverlay
              visible={loading}
              loaderProps={{ size: "xl", type: "bars" }}
            />
            <Input.Wrapper
              label="Username"
              description="Your username as registred"
            >
              <Input />
            </Input.Wrapper>
            <PasswordInput label="Password" />
            <Button
              size="md"
              fullWidth
              rightSection={<IconLogin2 />}
              variant="gradient"
              gradient={{ from: "violet", to: "cyan", deg: 90 }}
              onClick={() => {
                setLoading(true);
                start();
              }}
            >
              Login
            </Button>
          </Stack>
          <Stack my={"lg"} align="center">
            <Anchor>Contact Help Desk</Anchor>
          </Stack>
        </Paper>
      </Center>
    </>
  );
}

export default Login;
