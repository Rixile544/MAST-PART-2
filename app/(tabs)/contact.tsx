import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";

// ✅ Define form field types first
type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactScreen() {
  // ✅ Strongly typed state
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ✅ Correctly typed function
  const handleChange = (field: keyof FormFields, value: string): void => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (): void => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* ✅ Header background image */}
      <ImageBackground
        source={require("EmpoweringTheNationMobile/assets/images/contact.jpg")} // <-- make sure this path is correct
        style={styles.headerImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.headerText}>CONTACT US</Text>
        </View>
      </ImageBackground>

      {/* ✅ Contact section */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Get In Touch</Text>
        <Text style={styles.paragraph}>
          Have a question or want to reserve a table? We’d love to hear from you.
          Fill out the form below and we’ll get back to you shortly.
        </Text>

        {/* ✅ Contact details */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>📍 Sovy Restaurant, Badung, Bali</Text>
          <Text style={styles.infoText}>📞 +62 81 224 557 900</Text>
          <Text style={styles.infoText}>✉️ Reservation@sovy.com</Text>
          <Text style={styles.infoText}>🕒 Open 04:00 PM – 01:00 AM</Text>
        </View>

        {/* ✅ Contact form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#b3a07b"
            value={form.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#b3a07b"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            placeholderTextColor="#b3a07b"
            value={form.subject}
            onChangeText={(text) => handleChange("subject", text)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Comments / Questions"
            placeholderTextColor="#b3a07b"
            multiline
            numberOfLines={5}
            value={form.message}
            onChangeText={(text) => handleChange("message", text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              {submitted ? "Sent ✓" : "Contact Us"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ✅ Reservation section */}
      <View style={styles.reserveSection}>
        <Text style={styles.reserveTitle}>Reserve A Table Now</Text>
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>MAKE A RESERVATION</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Sovy Restaurant. All Rights Reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f0f0f",
    flex: 1,
  },
  headerImage: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#f5d26b",
    letterSpacing: 2,
  },
  section: {
    padding: 20,
  },
  subHeader: {
    fontSize: 22,
    color: "#f5d26b",
    fontWeight: "700",
    marginBottom: 10,
  },
  paragraph: {
    color: "#d6c38a",
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoText: {
    color: "#b3a07b",
    fontSize: 14,
    marginBottom: 6,
  },
  form: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 10,
    padding: 16,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 8,
    padding: 12,
    color: "#f5f5f5",
    fontSize: 15,
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#caa94d",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
  },
  reserveSection: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#1a1a1a",
  },
  reserveTitle: {
    fontSize: 20,
    color: "#f5d26b",
    fontWeight: "700",
    marginBottom: 16,
  },
  reserveButton: {
    backgroundColor: "#caa94d",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  reserveButtonText: {
    color: "#000",
    fontWeight: "700",
  },
  footer: {
    backgroundColor: "#0b0b0b",
    padding: 16,
    alignItems: "center",
  },
  footerText: {
    color: "#8c7c52",
    fontSize: 12,
  },
});
