import React, { useEffect } from "react";
import { View, Button, PermissionsAndroid, Platform } from "react-native";
import RNFS from "react-native-fs";

const DownloadFile = async ({ FileUrl }) => {
  const hasPermission = await requestStoragePermission();
  if (!hasPermission) {
    console.log("Storage permission denied");
    return;
  }

  try {
    const blob = await downloadFile(FileUrl);
    await saveFile(blob, "file.pdf");
  } catch (error) {
    console.error("Error downloading or saving file:", error);
  }
};

const requestStoragePermission = async () => {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission Required",
          message: "This app needs access to your storage to download files.",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true;
};

const downloadFile = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};

const saveFile = async (blob, filename) => {
  const path = `${RNFS.DocumentDirectoryPath}/${filename}`;

  try {
    const base64Data = await blobToBase64(blob);
    await RNFS.writeFile(path, base64Data, "base64");
    console.log("File saved to:", path);
  } catch (error) {
    console.error("Error saving file:", error);
  }
};

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => {
      reader.abort();
      reject(new Error("Problem parsing input file."));
    };
    reader.onload = () => {
      resolve(reader.result.split(",")[1]);
    };
    reader.readAsDataURL(blob);
  });
};

export default DownloadFile;
