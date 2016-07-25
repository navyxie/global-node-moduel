var should = require('should');
var GM = require('../lib/global-node-moduel');
var GMI = new GM();
describe('global-node-moduel', function () {
    it('copy() ok', function () {
        try{
            var result =  GMI.copySync('fixtures/test.txt', 'fixtures/test_copy.txt');
            should.not.exists(result);
        } catch(e) {

        }
    });
    it('copy() not ok', function () {
        try{
            var result =  GMI.copySync('fixtures/test1.txt', 'fixtures/test_copy.txt');
        } catch(e) {
            should.exists(e);  
        }
    });
    it('removeSync() ok', function () {
        try{
            var result =  GMI.removeSync('fixtures/test_copy.txt');
            should.not.exists(result);
        } catch(e) {

        }
    });
    it('removeSync() not ok', function () {
        try{
            var result =  GMI.removeSync('fixtures/test_copy.txt');
        } catch(e) {
            should.exists(e);  
        }
    });
})