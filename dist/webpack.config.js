const path = require('path');

module.exports = {
  entry: './src/index.ts',  // فایل ورودی پروژه (نقطه شروع)
  resolve: {
    extensions: ['.ts', '.js'],  // اضافه کردن پسوندهای TypeScript به Webpack
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // شناسایی فایل‌های TypeScript
        use: 'ts-loader',  // استفاده از ts-loader برای کامپایل فایل‌های TypeScript
        exclude: /node_modules/,  // فایل‌های موجود در node_modules بررسی نشوند
      },
    ],
  },
  output: {
    filename: 'bundle.js',  // فایل خروجی بسته‌بندی شده
    path: path.resolve(__dirname, 'dist'),  // پوشه مقصد برای فایل خروجی
  },
  mode: 'production',  // یا 'production' بسته به نیاز پروژه
};
