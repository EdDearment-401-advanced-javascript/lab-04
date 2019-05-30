'use strict';

jest.mock('fs');

const reader = require('../../index.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });

  it('it can write to a file', done => {
    reader(file, (err,data) => {
      try {
        file.writeFile('./testing.txt', data)
      } catch (err){
        console.log(err);
      }
      done();
    })
  });

});
