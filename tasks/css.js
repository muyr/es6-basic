import gulp from 'gulp'
import livereload from 'gulp-livereload'
import gulpif from 'gulp-if'
import args from './util/args'

gulp.task('css', ()=> {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
})
