# Простое приложение с использованием WebPack
```shell
npm init -y
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install html-webpack-plugin --save-dev
npm install css-loader style-loader --save-dev
npm install @babel/core babel-loader @babel/preset-env --save-dev # Добавить Babel для поддержки современного JavaScript
npm install sass-loader sass --save-dev # Добавить поддержку SASS
npm install terser-webpack-plugin css-minimizer-webpack-plugin --save-dev # Добавить минификацию для production
```
```text
webpack-simple-app/
├── src/
│   ├── index.js
│   ├── styles.css
│   └── index.html
├── package.json
└── webpack.config.js
```