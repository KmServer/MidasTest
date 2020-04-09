"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import gulpif from "gulp-if";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("gzip", () => {
    return gulp.src(paths.gzip.src)
        .pipe(gulpif(!production, gulp.dest(paths.gzip.dist)))
        .pipe(gulpif(production, gulp.dest(paths.gzip.distProd)))
        .pipe(debug({
            "title": "GZIP config"
        }));
});
