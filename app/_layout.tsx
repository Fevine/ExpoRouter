import { Stack } from "expo-router";
import React from "react";

type Props = {};

export default function RootLayout({}: Props) {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
