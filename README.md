# Zhenyu Shao · Personal Homepage

这是邵震宇（Zhenyu Shao）的个人学术主页，适合通过 GitHub Pages 发布，并作为 OpenReview 的 Homepage URL。

页面公开显示：

- Official name: Zhenyu Shao
- Chinese name: 邵震宇
- Email: sirius.szy@foxmail.com

## 本地运行

需要 Node.js 22 或更新版本：

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址即可预览。

## 构建

```bash
npm run build
```

GitHub Actions 会自动构建并发布主页，无需手工上传构建产物。

## 发布到 GitHub Pages

请阅读项目根目录的 `UPLOAD-GITHUB.md`，按中文图文式步骤操作。

## 修改内容

- 页面文字：`app/page.tsx`
- 样式与配色：`app/globals.css`
- 页面标题和描述：`app/layout.tsx`

注意：GitHub Pages 是公开网站，姓名与邮箱会被公开访问。
