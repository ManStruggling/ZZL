let gulp = require("gulp");
let uglify = require("gulp-uglify");
let babel = require("gulp-babel");
let webserver = require("gulp-webserver");
gulp.task("copy",()=>{
    gulp.src("./src/**/*.*").pipe(gulp.dest("./dist"));
})

gulp.task("buildJS",()=>{
    gulp.src("./src/**/*.*").pipe( babel({presets:['env']}) ).pipe( uglify() ).pipe( gulp.dest("./dist") );
})

gulp.task("webserver",function(){
    gulp.src('src').pipe( webserver({
        livereload: true,
        https: true,
        port:9090,
        proxies : [
            // {
            //     source: 'listmore',
            //     target: 'https://m.lagou.com/listmore.json'
            // }
            {
                source: 'listmore',
                target: 'https://www.zhipin.com/mobile/jobs.json'
            }
        ]
    }) )
})
// https://www.zhipin.com/mobile/jobs.json?page=2&city=101020100&query=PHP