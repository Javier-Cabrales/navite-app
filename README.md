# Running a React Native App with Expo
This document outlines the steps necessary to run a React Native app with Expo.


## Requirements
Before getting started, make sure you have the following installed on your system:

* Node.js
* Expo CLI (you can install it by running npm install -g expo-cli in your command line)

### Steps to run the app

1. Clone the React Native app repository to your local system.
```bash
git clone <https://github.com/Javier-Cabrales/navite-app.git>

```
2. Navigate to the project directory and run the following command to install dependencies:
```bash
cd <project-name>
npm install
```
3. Run the app with Expo:
```bash
npx expo start
```
4. Wait for Expo to compile and build the app. Once it's ready, a web page with a QR code will open in your browser.

5. Download the "Expo" app on your mobile device from the corresponding app store.

6. Scan the QR code with the "Expo" app and wait for the app to load on your mobile device.

That's it! You can now run and test the React Native app on your mobile device.

## Common issues
* If you experience any issues running the app, try clearing the Expo cache by running the following command:
```bash
expo r -c
```

* If you experience any other issues, consult the Expo documentation for more information: https://docs.expo.io/
