<div align="center">
<div align="center">
  <p align="center">
<img src=https://i.ibb.co/nPSmv7d/dd75acba3c0361cca99b05b1e5b6d5c6.png>
</p

*DEPLOY LINK*

*https://heroku.com/deploy?template=https://github.com/Afx-Abu/ABU-MD*


## ` BUILDPACKS`

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
https://github.com/DuckyTeam/heroku-buildpack-imagemagick
heroku/nodejs
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Afx-Abu/ABU-MD)


## `*TURMEX SETUP*`
```bash
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/Afx-Abu/ABU-MD
cd ABU-MD
npm start
```
## `For 24/7 Activation`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
