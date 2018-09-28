# wunder-appium-test
Wunder application exam

# Description
This is my demo application for Wunder. I used the TrianguloApp.apk cause it has some really simple and testable scenarios.
I decided to use webdriverIO as the testing framework cause it has a nice appium service and support for appium commands. I tried to keep it simple so I didn't add any complex services or dependencies.

# installation process
## Prerequisites
In order to be able to run this demo the following requirements should be meet:
* Latest version of Java JDK
* Latest version of NodeJs
* Latest version of npm
* A emulated device named: AVDTest running android 9.0. Use Android Studio to download and install the corresponding sdk and to create the avd

## Installation
```
npm i -g appium
npm install
```

## Running the tests
```
npm run appium
```

# Details
There are 2 spec files, both tests do the same with a small difference:
* triangle.specs.js Has 3 tests with hardcoded data to validate the 3 possible scenarios for the triangle app.
* triangle-usingddt.specs.js: Uses a pre-populated json file to drive the tests based on data. With this approach we can have a single tests running N combination of tests without adding more code.