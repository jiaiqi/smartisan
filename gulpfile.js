const gulp = require('gulp'),
    //uglify = require('gulp-uglify'),
	sass = require('gulp-sass');

	/*编译sass文件*/
gulp.task('sass',async()=>{
		gulp.src('build/sass/**/*.scss')//读取开发目录的scss文件
		.pipe(sass({outputStyle: 'expanded'})) //展开输出方式
		//.pipe(sass({outputStyle: 'compact'})) //紧凑输出方式
		//.pipe(sass({outputStyle: 'compressed'})) //压缩输出方式		
		.pipe(gulp.dest('build/css')) //输出到开发目录  
		//gulp.src('build/css/*')	 
		//.pipe(gulp.dest('dist/css'))
})
gulp.task('watch-sass',async()=>{
	gulp.watch('build/sass/*.scss',gulp.series('sass'));
});
	/*压缩js文件*/
gulp.task('min-js',async()=>{
		gulp.src('build/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js')) 
});

gulp.task('copy-img', async ()=>{
			/*复制图片文件到发布文件夹*/
		gulp.src('build/images/*') .pipe(gulp.dest('dist/images')) 	
});

gulp.task('copy-php', async ()=>{
	/*复制php文件到发布文件夹*/
	gulp.src('build/php/*.php')	 .pipe(gulp.dest('dist/php')) 
});

gulp.task('copy-html', async ()=>{
	gulp.src('build/*.html')	 .pipe(gulp.dest('dist'))       
});

gulp.task('copy-all', async ()=>{  
/*将发布文件夹下所有文件部署到服务器*/
	gulp.src("dist/**/*") .pipe(gulp.dest("D:\\phpStudy\\WWW\\samrtisan"));
});

gulp.task('watch',async()=>{
	gulp.watch('build/sass/*.scss',gulp.series('sass'));
	gulp.watch('build/images/*',gulp.series('copy-img'));
//	gulp.watch('build/php/*.php',gulp.series('copy-php'));
	gulp.watch('build/js/*.js',gulp.series('min-js'));
	gulp.watch('build/*.html',gulp.series('copy-html'));
	gulp.watch('dist/**/*',gulp.series('copy-all'));
//	gulp.watch('build/**/*',gulp.series(['sass','copy-img','copy-html','copy-all']));
})