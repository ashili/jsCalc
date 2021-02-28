const File = require('../src/fileOps/File');

//test instantiation
test('test creating a file object', () => {
    let file = new File();
    expect(file).toBeInstanceOf(File);
});

// test static method
// test('test getAbsolutePath method', () => {
//     const pathTest = File.getAbsolutePath("path1")
//     expect(pathTest).toBe("/Users/anisshili/WebstormProjects/jsCalc/path1");
// });


