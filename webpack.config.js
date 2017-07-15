/*
 ./webpack.config.js
 */
var Encore = require('@symfony/webpack-encore');

Encore
// directory where all compiled assets will be stored
    .setOutputPath('web/assets/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/assets')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // will output as web/bundles/app.js
    .addEntry('js/main', './app/resources/assets/js/main.js')

    // will output as web/bundles/main.css
    .addStyleEntry('css/main', './app/resources/assets/scss/main.scss')

    // allow sass/scss files to be processed
    .enableSassLoader()

    // allow legacy applications to use $/jQuery as a global variable
    //.autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning()

    //.enableReactPreset()
    .enableVueLoader()

    // first, install any presets you want to use (e.g. yarn add babel-preset-es2017)
    // then, modify the default Babel configuration
    .configureBabel(function(babelConfig) {
        babelConfig.presets.push('es2015');
    })
;

// fetch the config, then modify it!
var config = Encore.getWebpackConfig();
config.watchOptions = {
    poll: true,
    ignored: /node_modules/
};

// export the final configuration
module.exports = config;