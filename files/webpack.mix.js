let mix = require('laravel-mix');
let webpack = require('webpack');

let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

plugins = [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
];

if (process.env.ARG == 'detail') {
    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: '../storage/app/public/report.html',
            generateStatsFile: true,
            statsFilename: '../storage/app/public/stats.json',
        })
    );
}

mix.webpackConfig({
    plugins: plugins
});

mix.js('resources/assets/js/app.js', 'public/js')
   .stylus('resources/assets/stylus/app.styl', 'public/css');

// `npm run hot` will fail if we use mix.version(),
// and we really only need it for production
if (process.env.NODE_ENV == 'production') {
    mix.version();
}
