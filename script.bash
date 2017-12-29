echo "node modules..."
npm init -y
echo "webpack..."
npm install --save-dev webpack
npm install --save lodash
echo "webpack devserver..."
npm install webpack-dev-server --save-dev
echo "react..."
npm install --save react react-dom
echo "react router..."
npm install --save react-router
echo "react router dom"
npm install react-router-dom
echo "babel..."
npm install --save-dev babel-preset-env
echo "babel for ES2015...."
npm install --save-dev babel-preset-es2015
echo "babel for jsx..."
npm install --save-dev babel-preset-react
echo "redux..."
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
# Loaders for webpack
echo "Babel loader..."
npm install --save-dev babel-loader babel-core babel-preset-env webpack
echo "For css..."
npm install style-loader --save-dev
echo "Flexbox-grid react..."
npm install --save react-flexbox-grid
echo "styled components..."
npm install --save styled-components
echo "For files..."
npm install --save-dev file-loader
echo "HotModule replacement with css..."
npm install --save-dev style-loader css-loader
echo "Plugins..."
npm install html-webpack-plugin --save-dev
npm install --save react-hot-loader@next

echo "Create directories"
mkdir src
mkdir src/components
mkdir src/assets
mkdir dist
mkdir build