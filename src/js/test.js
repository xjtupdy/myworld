let OSS = require('ali-oss');

let client = new OSS({
    // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: 'oss-cn-beijing',
    // 从STS服务获取的临时访问凭证。临时访问凭证包括临时访问密钥（AccessKeyId和AccessKeySecret）和安全令牌（SecurityToken）。
    accessKeyId: 'STS.NTXYAPYj24CoUe1gxcX3uyzrb',
    accessKeySecret: '3nQVDLKLS7f9dc2ZwDhfJ55doC536RTmGLDF2A3qjQT7',
    stsToken: 'CAIS+AF1q6Ft5B2yfSjIr5ftEvvktLUTg4GEV0OAg3g2VLxZlr/ZgDz2IHhMdXJuBu8bt/oynWpR5/kflqVoRoReREvCKM1565kPc9s9oHWG6aKP9rUhpMCPPwr6UmzavqL7Z+H+U6mqGJOEYEzFkSle2KbzcS7YMXWuLZyOj+wIDLkJWQXqL0AxZrFsKxBltdUROFbIKP+pKWSKuGfLC1dysQcO4gEWq4bHm5LBtEKE1Ayrmr5L99uteKLJNZc8YM1NNP6ux/Fze6b71ypd1gNH7q8ejtYfoW+W5Y/CXAQIvUjfabOFrYB1TQFkYqx/AalAoegyVmfuJSY0/BqAARannV+vCgdtQF1oTtvlnZj1vzH+uf5ma2Ilq2Fi3Gif6rIR6zU0u9g/IFXmHhWYGXPkq+E4dbR8xsXE5XRdzLAIuqIQEWjdDHmEmMLTm91iHbcVJumTlDKINtxW/Gl5h6kQt6lMuOgetJM5uNjZzKNOjBIWJqPgGRFQEa3OhuJ7',
    // 填写Bucket名称。
    bucket: 'lost-and-found'
});

// 支持File对象、Blob数据以及OSS Buffer。
// 填写本地文件的完整路径。如果未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
// const data = new Blob('C:\\Users\\xjtupdy\\Desktop\\avatar.png');
// 填写上传的内容。
// const data = new Blob('Hello OSS');
// 填写上传的内容。
const data = new OSS.Buffer('Hello OSS');

async function putObject () {
    try {
        // 填写Object完整路径。Object完整路径中不能包含Bucket名称。
        // 您可以通过自定义文件名（例如exampleobject.txt）或目录（例如mytestdoc/exampleobject.txt）的形式实现将文件上传到当前Bucket或Bucket中的指定目录。
        // let result = await client.put('images/avatar.png', data);/*         'exampleobject.txt'*/
        let result = await client.put('exampleobject.txt', data);/*         'exampleobject.txt'*/
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}
putObject();