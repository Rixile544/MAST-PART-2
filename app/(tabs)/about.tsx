import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function AboutChefScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Hero Image Section */}
      <Image
        source={require("../EmpoweringTheNationMobile/assets/images/about.jpg")} // 👈 Make sure to put your image in `assets/about.jpg`
        style={styles.heroImage}
        resizeMode="cover"
      />

      {/* Overlay Title */}
      <View style={styles.overlay}>
        <Text style={styles.overlaySubtitle}>Special Moments</Text>
        <Text style={styles.overlayTitle}>ABOUT US</Text>
      </View>

      {/* Section: Tradition & Modern */}
      <View style={styles.section}>
        <Text style={styles.sectionSubtitle}>Taste Perception</Text>
        <Text style={styles.sectionTitle}>TRADITIONAL & MODERN</Text>
        <Text style={styles.sectionText}>
          Our culinary philosophy embraces the essence of both tradition and
          innovation. Every dish is crafted with precision, blending timeless
          flavors and modern creativity. We aim to create experiences that
          connect heart, culture, and craftsmanship through every plate.
        </Text>
      </View>

      {/* Section: Our Special */}
      <View style={styles.specialSection}>
        <Text style={styles.sectionSubtitle}>Our Healthy Food</Text>
        <Text style={styles.sectionTitle}>OUR SPECIAL</Text>

        <View style={styles.menuItem}>
          <Text style={styles.menuName}>Fines Tartare Steak</Text>
          <Text style={styles.menuPrice}>R50</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuName}>Creamy Chicken Soup</Text>
          <Text style={styles.menuPrice}>R60</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuName}>Boiled Eggs on Toast</Text>
          <Text style={styles.menuPrice}>R120</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuName}>Best Roasted Rumsteak</Text>
          <Text style={styles.menuPrice}>R150</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuName}>Risotto & Mushrooms</Text>
          <Text style={styles.menuPrice}>R90</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f", // dark elegant background
  },
  contentContainer: {
    paddingBottom: 60,
  },
  heroImage: {
    width: "100%",
    height: 220,
  },
  overlay: {
    position: "absolute",
    top: 120,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  overlaySubtitle: {
    fontSize: 14,
    color: "#d1b97c",
    fontStyle: "italic",
  },
  overlayTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginTop: 4,
  },
  section: {
    padding: 24,
    alignItems: "center",
  },
  sectionSubtitle: {
    color: "#d1b97c",
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 4,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  sectionText: {
    color: "#bfbfbf",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    maxWidth: 350,
  },
  specialSection: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 30,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: "#2e2e2e",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  menuName: {
    color: "#f5f5f5",
    fontSize: 15,
  },
  menuPrice: {
    color: "#d1b97c",
    fontWeight: "700",
    fontSize: 15,
  },
});
