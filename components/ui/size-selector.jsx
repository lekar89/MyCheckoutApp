import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/colors';


const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState('S'); 

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Size</Text>
      <View style={styles.sizeOptionsContainer}>
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              selectedSize === size ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                styles.sizeText,
                selectedSize === size ? styles.selectedText : styles.unselectedText,
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.background,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.text,
  },
  sizeOptionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sizeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, 
    height: 50,
    borderRadius: 25, 
    marginHorizontal: 5, 
  },
  selectedButton: {
    backgroundColor: Colors.primary, 
  },
  unselectedButton: {
    backgroundColor: Colors.secondary, 
  },
  sizeText: {
    fontSize: 16,
  },
  selectedText: {
    color: Colors.background, 
  },
  unselectedText: {
    color:  Colors.primary, 
  },
});

export default SizeSelector;