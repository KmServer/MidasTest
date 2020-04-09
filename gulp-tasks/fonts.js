"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import gulpif from "gulp-if";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("fonts", () => {
    return gulp.src(paths.fonts.src)
        .pipe(gulpif(!production, gulp.dest(paths.fonts.dist)))
        .pipe(gulpif(production, gulp.dest(paths.fonts.distProd)))
        .pipe(debug({
            "title": "Fonts"
        }));
});
