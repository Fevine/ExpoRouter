import { Tabs } from "expo-router";
import React from "react";

type Props = {};

export default function TabsLayout({}: Props) {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="navhere/[id]" />
    </Tabs>
  );
}
