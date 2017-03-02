var 	gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss    = require('gulp-minify-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),		
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify'),
		spritesmith  = require('gulp.spritesmith'),
		livereload 	 = require('gulp-livereload'),
		babel 		 = require('gulp-babel');


gulp.task('browser-sync', ['libs', 'styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "app"
				},
				notify: false
		});
});


gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(minifycss({
		keepBreaks: true
	}))
	.pipe(gulp.dest('app/css'))		
	.pipe(livereload());
});

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('app/img/sprite/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: '../img/sprite.png',
                cssName: 'sprite.sass',                
                algorithm: 'binary-tree'                
            }));

    spriteData.img.pipe(gulp.dest('app/img')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('sprite/')); // путь, куда сохраняем стили
});

gulp.task('libs', function() {
	return gulp.src([
		// 'app/libs/modernizr/modernizr.js',
		'app/libs/jquery/jquery-1.12.4.min.js',
		'app/libs/jquery/jquery-ui.min.js',
		'app/libs/waypoints/waypoints.min.js',
		'app/libs/GreenSock-JS/TweenMax.min.js',
		'app/libs/GreenSock-JS/DrawSVGPlugin.min.js',
		'app/libs/animate/animate-css.js',
		'app/libs/slidebars/slidebars.min.js',
		'app/libs/mobile-detect/mobile-detect.min.js',
		//'app/libs/owl.carousel/owl.carousel.min.js',
		// 'app/libs/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js',
		// 'app/libs/owl.carousel/jquery.mousewheel.min.js',
		'app/libs/matchMedia/matchMedia.js',
		'app/libs/matchMedia/matchMedia.addListener.js'
		])
		.pipe(concat('libs.js'))
		// .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('app/js/'));
});

gulp.task('scripts', function() {
	return gulp.src([
		"js/common.js",
		'js/animate.js',
		'js/functions.js',
		])
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(concat('main.js'))
		// .pipe(uglify()) //Minify main.js
		.pipe(gulp.dest('app/js/'))
		.pipe(livereload());
});

gulp.task('html', () => {
	return gulp.src(
		"app/*.html")
		.pipe(livereload());
});


gulp.task('watch', function () {
	 var server = livereload({ start: true });	
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('app/libs/**/*.js', ['libs']);
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('app/*.html', ['html']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch', 'sprite']);
