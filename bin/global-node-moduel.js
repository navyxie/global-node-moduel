#!/usr/bin/env node

var program = require('commander');
var pkg = require('../package.json');
var GM = require('../index');
var chalk = require('chalk');
var path = require('path');
program.version(pkg.version)
    .option('-c, --copy [path]', 'copy file sync')
    .option('-o, --output [path]', 'output file path')
    .option('-r, --remove [path]', 'remove file sync')
if (!program.args.length) {
  console.log(chalk.blue.bold('[version]: ') + pkg.version);
  return false;
}
var GMI = new GM();
program.args.forEach(function () {
    var copyPath = program.copy;
    var outputPath = program.output;
    var removePath = program.remove;
    if (copyPath) {
        if (outputPath) {
            try{
                GMI.copySync(copyPath, outputPath);
                console.log('copy file from ', path.resolve(copyPath), ' to ', path.resolve(outputPath));
            } catch(e) {
                console.log(chalk.red.bold('[copySync ERROR]: '+ e.message));
            }
            return;
        } else {
            console.log(chalk.yellow.bold('[miss param output]'));
            return; 
        }
    }
    if (removePath) {
        try{
            GMI.removeSync(removePath);
            console.log('remove file from ', path.resolve(copyPath));
        } catch(e) {
            console.log(chalk.red.bold('[removeSync ERROR]: '+ e.message));
        }
        return;''
    }
})