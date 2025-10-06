import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DishDetailsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={22} color="#f5d26b" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dish Details</Text>
      </View>

      {/* Dish Image */}
      <Image
        source={require("EmpoweringTheNationMobile/assets/images/dish details.jpg")} // 👈 make sure your image is in assets folder
        style={styles.dishImage}
        resizeMode="cover"
      />

      {/* Dish Info */}
      <View style={styles.content}>
        <Text style={styles.dishName}>Beef Wellington</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>R125</Text>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Main Course</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.sectionHeader}>Description</Text>
        <Text style={styles.description}>
          Our signature Beef Wellington features prime beef tenderloin, perfectly
          seasoned and seared to lock in the juices. The tender beef is wrapped in
          a rich mushroom duxelles made from finely chopped mushrooms, shallots,
          and herbs, then encased in a flaky puff pastry and baked to golden
          perfection.
        </Text>

        {/* Order Button */}
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f", // deep dark background
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f5d26b", // gold text
  },
  dishImage: {
    width: "100%",
    height: 260,
  },
  content: {
    padding: 20,
  },
  dishName: {
    fontSize: 26,
    fontWeight: "700",
    color: "#f5d26b",
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  price: {
    fontSize: 22,
    fontWeight: "700",
    color: "#caa94d", // warm gold
    marginRight: 10,
  },
  tag: {
    backgroundColor: "#292929",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  tagText: {
    fontSize: 12,
    color: "#f5d26b",
    fontWeight: "600",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#f5d26b",
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: "#d6c38a",
    lineHeight: 22,
  },
  orderButton: {
    backgroundColor: "#caa94d",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 24,
  },
  orderButtonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
  },
});
