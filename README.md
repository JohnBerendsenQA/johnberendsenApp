# John Berendsen
johnberendsen app built in React Native

*Note: This is an app purely for practising (automated) testing. It definetly contains bugs and missing functionality but for our purpose it is actually quite perfect. 

A special thx goes out to <a href="https://github.com/kiok46">kiok46</a> for opensourcing his very fine <a href="https://github.com/kiok46/duckduckgo">unoffical duckduckgo app</a>

### How to run it?

Please do the following to run.
```
git clone https://github.com/JohnBerendsenQA/johnberendsenApp.git
cd johnberendsenApp && npm install
```
then run `react-native run-ios` or `react-native run-android`

### create apk to run on android device without packager

'''
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
'''
'''
cd android
'''
#Create debug build:
'''
./gradlew assembleDebug
'''

Generated `apk` will be located at `android/app/build/outputs/apk`

### Does search work?

The app is using a sample data which is in `src/constants/data.json`

And no it doesnt.

### Screenshots

<img src="screenshots/stories.png?raw=true" width="270"> <img src="screenshots/search.png?raw=true" width="270"> <img src="screenshots/favourites.png?raw=true" width="270"> 
<img src="screenshots/settings.png?raw=true" width="270"> <img src="screenshots/default.png?raw=true" width="270">


### Happy testing!!

