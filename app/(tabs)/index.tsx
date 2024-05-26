import { Link, router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {};

export default function Home({}: Props) {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href={"/navhere/2"}>
        <Text>Go To 2</Text>
      </Link>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/navhere/[id]",
            params: { id: 5 },
          })
        }
      >
        <Text>Go To 5</Text>
      </Pressable>
    </View>
  );
}
