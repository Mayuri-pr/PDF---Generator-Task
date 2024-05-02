// PdfTemplates.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontSize: "14px",
    padding: 20,
    margin: 20,
  },
  text: {
    padding: 2,
    marginTop: 10,
  },
  tableContainer: {
    margin: 20,
    borderTop: 1,
    borderLeft: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  tableRow: {
    borderBottomWidth: 1,
    flexDirection: "row",
    borderColor: "#000",
    width: "100%",
  },
  tableCell: {
    borderRight: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

export const BtechPdfTemplate = ({ name, course }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.text}>Ref- A101</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Course: {course}</Text>
      <Text style={styles.text}>
        Date of Offer (current date): {new Date().toLocaleDateString()}
      </Text>
      <Text style={styles.text}>Fee structure:</Text>

      {/* Table */}
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>Year</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>One Time Fee</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Tuition Fees</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>1</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>500</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>160</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>2</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>-</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>160</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export const MtechPdfTemplate = ({ name, course }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.text}>Ref- B101</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Course: {course}</Text>
      <Text style={styles.text}>
        Date of Offer (current date): {new Date().toLocaleDateString()}
      </Text>
      <Text style={styles.text}>Fee structure:</Text>

      {/* Table */}
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>Year</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>One Time Fee</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Tuition Fees</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>1</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>600</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>260</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text>2</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>-</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>260</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
