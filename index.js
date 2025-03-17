/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.file'], // Access to Google Drive
  webClientId: '854981750269-9uvr7pq68rqngtb4r0p1q04vlu8smbav.apps.googleusercontent.com', // From Google Cloud Console
});

AppRegistry.registerComponent(appName, () => App);
