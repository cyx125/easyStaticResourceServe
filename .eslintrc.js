module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {        
        "no-irregular-whitespace": "error", //禁止不规则的空白
        "no-empty": "error", //禁止空块语句
        "no-console": ["error", { "allow": ["warn", "error", 'info'] }], //禁用 console
        "no-dupe-args": "error", //禁止在 function 定义中出现重复的参数
        "no-extra-parens": "error", //禁止冗余的括号
        "no-extra-semi": "error", //禁用不必要的分号
        "vars-on-top": 2, //var必须放在作用域顶部
        "no-unused-vars": 2, // `禁止出现未使用过的变量
        "no-use-before-define": 2, // 不允许在变量定义之前使用它们
        "linebreak-style": [2, "unix"], //强制使用一致的换行风格
        "quotes": ["error", "single"], // 强制使用一致的单引号
        "semi": ["error", "always"], //控制行尾部分号
        "curly": ["error", "all"], //强制所有控制语句使用一致的括号风格
        "no-implicit-coercion": "error", //禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        "no-invalid-this": "error", // 禁止 this 关键字出现在类和类对象之外
        "no-loop-func": "error", // 禁止在循环中出现 function 声明和表达式
        "no-multi-spaces": "error", // 禁止使用多个空格
        "no-new-func": "error", // 禁止对 空Function 对象使用 new 操作符
        "no-useless-return": "error", // 禁止没有任何内容的return;
        "global-require": "error", // 要求 require() 出现在顶层模块作用域中
        "no-path-concat": "error", //禁止对 dirname 和 filename进行字符串连接
        "comma-dangle": ["error", "always-multiline"], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗,always-multiline：多行模式必须带逗号，单行模式不能带逗号号
        "comma-spacing": ["error", { "before": false, "after": true }], // 控制逗号前后的空格
        "comma-style": ["error", "last"], // 控制逗号在行尾出现还是在行首出现 (默认行尾)
        "array-bracket-spacing": ["error", "never"], //指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        "block-spacing": ["error", "always"], // 禁止或强制在单行代码块中使用空格(禁用)
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }], //该规则规定了在对象字面量语法中，key和value之间的空白，冒号前不要空格，冒号后面需要一个空格
        "no-multiple-empty-lines": ["error", { "max": 2 }], //空行不能够超过2行
        "no-shadow-restricted-names": "error", // 禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等
    }
};
