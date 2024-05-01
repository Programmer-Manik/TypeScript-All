**2-2 install typescript and node version manager**

**What is NVM?**

Node Version Manager (NVM), as the name implies, is a tool for managing Node versions on your device.

1 google search nvm then freecodecamp jawa lagbe [nvm-windows](https://github.com/coreybutler/nvm-windows) ai linkta github nia jabe nije gele downlod now geli nichhe [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe) dile downlod hobe tar pore install kore hobe 

then cmd 

1 node -v 

2 nvm —v 

3 nvm install 18.18.2

4 nvm list 

5 nvm use 18.18.2

### **install typescript**

typescript web site then download ===== `npm install g- typescript` 

version check === `tsc -v` 

**2-2 install typescript and node version manager**

**2-3 Write your first typescript program**

Folder create name TypeScript-all 

cmd dia vs code open kore file create korte hobe jemon `index.ts`

ctrl - j dile tarminal asbe 

Output : `node index.ts` 

jokhon typescript the javascript rupantor korbe tokon 

Output: `tsc index.ts` ===ba=== `tsc Module1/src/index.ts`

tsconfig.json file create : `tsc - - init` 

Powershell এর administrator mode চালু করে এই কমান্ড টি রান করুন ।
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

tsconfig duke ctrl+f chape niche gul set korte hobe 

 `“**rootDir”:”**Module1/src/**”`,**

`“outDir”:”./Module1/dist”,`

Terminal : `tsc` dile file add hoi jabe 

**/* Language and Environment */ version paltate parbo tsconfig.json file thake** 

**`"target": "es2016",`**

**`"target": "ES5",`**

**`"target": "ES6",`**

**2-3 Write your first typescript program**

https://www.npmjs.com/package/ts-node-dev

`npm i -g ts-node-dev` 

`ts-node-dev --respawn --transpile-only file location` 

all file gula ata object modhe rakh bo jemon {} ar karone akoi veri abol hole error dibe nah
