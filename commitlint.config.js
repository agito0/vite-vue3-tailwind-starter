// commitlint.config.cjs
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 可自定义规则（参考 https://commitlint.js.org）
        'type-enum': [2, 'always', [
            'feat',    // 新功能
            'fix',     // 修复问题
            'docs',    // 文档变更
            'style',   // 代码格式
            'refactor',// 重构
            'test',    // 测试用例
            'chore',   // 构建/工具改动
            'revert'   // 回退提交
        ]]
    }
}