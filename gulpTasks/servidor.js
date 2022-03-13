const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')
const appTasks = require('./app')

function servidor() {
    return gulp.src('build')
    .pipe(webserver({
        port: 8088,
        open: true,
        livereload: true
    }))
}

function monitorarArquivos(callback) {
    watch('src/**/*.html', () => gulp.series(appTasks.appHTML)())
    watch('src/**/*.scss', () => gulp.series(appTasks.appCSS)())
    watch('src/**/*.js', () => gulp.series(appTasks.appJS)())
    watch('src/assets/imgs/**/*.*', () => gulp.series(appTasks.appIMG)())
    return callback()
}


module.exports = {
    servidor,
    monitorarArquivos
}