const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

imagemin(['app/img/*.{jpg,png,svg}'], 'app/img', {
	plugins: [
		imageminMozjpeg({quality: 90}),
		imageminSvgo({removeViewBox: false}),
		imageminPngquant({quality: '70-80'})
	]
}).then(files => {
	console.log(files);
//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});