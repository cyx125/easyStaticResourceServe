# Commit message 的格式

每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。

## Header

Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。

### type 

type用于说明 commit 的类别，只允许使用下面7个标识。
如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

### scope

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

### subject

subject是 commit 目的的简短描述，不超过50个字符。

## Body

Body 部分是对本次 commit 的详细描述，可以分成多行。

## Footer

Footer 部分只用于两种情况。

### （1）不兼容变动

### （2）关闭 Issue


## Revert 

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。

```
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```


