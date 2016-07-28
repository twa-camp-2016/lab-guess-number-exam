#　lab-guess-number-exam


## 分析此次程序中存在的原因：

- 代码练的少，思考代码时间长。
- 打字慢。
- 代码错误率高，改错慢。


## 代码易错点：

```
 process.stdin.setEncoding('utf8');
```
setEncoding();
```
 new Game().start();
```
Game();
```
 spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
```
```
 const stdin = require('mock-stdin').stdin();
```
```
 expect(console.log).toHaveBeenCalledWith('Welcome!\n');
```