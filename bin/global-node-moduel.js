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
    .parse(process.argv);

init();
function init() {
    var copyPath = program.copy;
    var outputPath = program.output;
    var removePath = program.remove;
    var GMI = new GM();
    if (copyPath) {
        if (outputPath) {
            try{
                GMI.copySync(copyPath, outputPath);
                console.log(chalk.green.bold('copy file from ', path.resolve(copyPath), ' to ', path.resolve(outputPath)));
            } catch(e) {
                console.log(chalk.red.bold('[copySync ERROR]: '+ e.message));
            }
        } else {
            console.log(chalk.yellow.bold('[miss param output]'));
        }
        return; 
    } else if (removePath) {
        try{
            GMI.removeSync(removePath);
            console.log(chalk.green.bold('remove file from ', path.resolve(removePath)));
        } catch(e) {
            console.log(chalk.red.bold('[removeSync ERROR]: '+ e.message));
        }
        return;
    } else {
        console.log(chalk.blue.bold('[version]: ') + pkg.version);
        program.help();
    }
}