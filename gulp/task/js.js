import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src([app.path.src.js, app.path.src.scriptJs], {
        sourcemaps: app.isDev
    })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "js",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            entry: {
                app: app.path.src.js,
                script: app.path.src.scriptJs,
            },
            output: {
                filename: '[name].min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};
