import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { Platform } from "react-native";

export default function ImagePickerScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  const requestCameraPermission = async () => {
    const permission =
      Platform.OS === "android"
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA;

    const result = await check(permission);
    if (result === RESULTS.GRANTED) {
      openCamera();
    } else if (result === RESULTS.DENIED || result === RESULTS.BLOCKED) {
      const requestResult = await request(permission);
      if (requestResult === RESULTS.GRANTED) {
        openCamera();
      } else {
        Alert.alert("Permission Required", "Camera access is required to use this feature.");
      }
    }
  };

  const openCamera = () => {
    launchCamera(
      {
        mediaType: "photo",
        saveToPhotos: true,
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorCode) {
          console.error("Image Picker Error:", response.errorMessage);
        } else {
          const imageUri = response.assets[0]?.uri;
          setSelectedImage(imageUri);
        }
      }
    );
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorCode) {
          console.error("Image Picker Error:", response.errorMessage);
        } else {
          const imageUri = response.assets[0]?.uri;
          setSelectedImage(imageUri);
        }
      }
    );
  };

  const handleUpload = () => {
    if (selectedImage) {
      Alert.alert("Image Uploaded", "Your image has been successfully uploaded.");
      // Add your upload functionality here
    } else {
      Alert.alert("No Image Selected", "Please select or capture an image first.");
    }
  };

  return (
    <ScrollView style={styles.containerh1}>
    <View style={styles.container}>
      <Text style={styles.title}>Capture or Pick an Image</Text>

      {/* Display Selected Image */}
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image Selected</Text>
        </View>
      )}

      {/* Buttons for Camera and Gallery */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={requestCameraPermission}>
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <Text style={styles.buttonText}>Pick from Gallery</Text>
        </TouchableOpacity>
      </View>

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadButtonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  containerh1: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagePreview: {
    width: 400,
    height: 600,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholder: {
    width: 400,
    height: 600,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  placeholderText: {
    color: "#999",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#9747FF",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  uploadButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  uploadButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: '40px',
  },
});
