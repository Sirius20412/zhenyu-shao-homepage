# 直接上传到 GitHub Pages

这个文件夹已经是构建完成的静态网站，不需要安装 Node.js，也不需要 Coze 授权。

1. 登录 GitHub，点击右上角 **+ → New repository**。
2. 仓库名填写 `zhenyu-shao-homepage`，选择 **Public**，保持空仓库并创建。
3. 在空仓库点击 **uploading an existing file**。
4. 解压 `zhenyu-shao-homepage-upload.zip`，把解压后文件夹内部的全部内容拖到 GitHub。
5. 确认上传列表中包含 `index.html`、`_next` 文件夹和 `.nojekyll` 文件，然后点击 **Commit changes**。
6. 进入 **Settings → Pages**。
7. Source 选择 **Deploy from a branch**，Branch 选择 `main`，目录选择 `/ (root)`，点击 **Save**。
8. 等待约 1–3 分钟，访问：

   `https://你的GitHub用户名.github.io/zhenyu-shao-homepage/`

打开后确认页面能看到 `Zhenyu Shao`、`邵震宇` 和 `sirius.szy@foxmail.com`，再将完整网址粘贴到 OpenReview 的 Homepage URL。

如果页面没有样式，通常是漏传了 `.nojekyll` 或 `_next` 文件夹；补传后等待 Pages 重新发布即可。
