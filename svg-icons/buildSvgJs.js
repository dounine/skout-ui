//  getSvg.js
var fs = require('fs');
var path = require('path');
const svgDir = path.resolve(__dirname, '../icons/svgs');
var watch = require('watch')

// 读取单个文件
function readfile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(svgDir, filename), 'utf8', function (err, data) {
            if (err) reject(err);
            resolve({
                [filename.slice(0, filename.lastIndexOf('.'))]: data,
            });
        });
    });
}

// 读取SVG文件夹下所有svg
function readSvgs() {
    return new Promise((resolve, reject) => {
        fs.readdir(svgDir, function (err, files) {
            if (err) reject(err);
            Promise.all(files.map(filename => readfile(filename)))
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    });
}

watch.watchTree('/Users/huanghuanlai/dounine/github/skout-ui/icons/svgs', (pp) => {
    console.log('文件有变化')
    readSvgs().then(data => {
        let svgFile = 'export default ' + JSON.stringify(Object.assign.apply(this, data));
        return fs.writeFile(path.resolve(__dirname, '../icons/svgs.js'), svgFile, function (err) {
            if (err) {
                throw new Error(err)
            } else {
                // a('success')
            }
        });
    }).catch(err => {
        throw new Error(err)
    });
});
console.log('icons/svgs 文件侦听变化中')