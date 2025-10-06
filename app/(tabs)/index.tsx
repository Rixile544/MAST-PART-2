import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

export default function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Mains');

  // ✅ Define menu items safely
  const menuItems = {
    Starters: [
      { id: 1, name: 'Bruschetta', description: 'Toasted bread with tomato and basil', price: 'R18.00' },
      { id: 2, name: 'Soup of the Day', description: 'Freshly prepared seasonal soup', price: 'R22.00' },
    ],
    Mains: [
      { id: 3, name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with herbs', price: 'R28.00' },
      { id: 4, name: 'Beef Wellington', description: 'Tender beef in puff pastry', price: 'R45.00' },
      { id: 5, name: 'Chicken Risotto', description: 'Creamy arborio rice with chicken', price: 'R24.00' },
    ],
    Desserts: [
      { id: 6, name: 'Tiramisu', description: 'Classic Italian coffee dessert', price: 'R20.00' },
      { id: 7, name: 'Cheesecake', description: 'Creamy vanilla cheesecake', price: 'R25.00' },
    ],
  };

  // ✅ Always check if category exists before accessing
  const currentMenu = menuItems[selectedCategory as keyof typeof menuItems] || [];

  return (
    <ImageBackground
      source={require('EmpoweringTheNationMobile/assets/images/home page.jpg')} // ensure image path is correct
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>F&B Restaurant</Text>
        <Text style={styles.subtitle}>Intimate Dining Experience</Text>

        {/* Category Tabs */}
        <View style={styles.tabContainer}>
          {['Starters', 'Mains', 'Desserts'].map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.tabButton,
                selectedCategory === category && styles.activeTabButton,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  selectedCategory === category && styles.activeTabButtonText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu List */}
        <ScrollView style={styles.menuList}>
          {currentMenu.length > 0 ? (
            currentMenu.map((item) => (
              <View key={item.id} style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No items found in this category.</Text>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#f5d26b',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#d6c38a',
    textAlign: 'center',
    marginBottom: 25,
    fontStyle: 'italic',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  tabButton: {
    borderWidth: 1,
    borderColor: '#caa94d',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 6,
    backgroundColor: 'transparent',
  },
  activeTabButton: {
    backgroundColor: '#caa94d',
  },
  tabButtonText: {
    color: '#f5d26b',
    fontWeight: '600',
  },
  activeTabButtonText: {
    color: '#000',
  },
  menuList: {
    flex: 1,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f5d26b',
  },
  itemDescription: {
    fontSize: 14,
    color: '#e8e1c8',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#caa94d',
  },
  emptyText: {
    textAlign: 'center',
    color: '#f5d26b',
    marginTop: 20,
    fontSize: 16,
  },
});
