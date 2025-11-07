import React from "react";
import { StyleSheet, View, Text, Platform, StatusBar } from "react-native";

// Box component
function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

// Column component
function Column({ children }) {
  return <View style={styles.column}>{children}</View>;
}

// chunk array helper
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function App() {
  const boxes = Array.from({ length: 12 }, (_, i) => i + 1);
  const rows = chunkArray(boxes, 4);

  return (
    <View style={styles.container}>
      {rows.map((rowBoxes, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          <Column>
            <Box>#{rowBoxes[0]}</Box>
            <Box>#{rowBoxes[1]}</Box>
          </Column>
          <Column>
            <Box>#{rowBoxes[2]}</Box>
            <Box>#{rowBoxes[3]}</Box>
          </Column>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
  },
  box: {
    flex: 1,
    margin: 5,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
  },
  boxText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkslategray",
  },
});
