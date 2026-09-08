# 上传并发布到 GitHub Pages

以下操作不需要 Coze 授权，直接使用你的 GitHub 账号即可。

## 第一步：创建仓库

1. 登录 [GitHub](https://github.com/)。
2. 点击右上角 **+**，选择 **New repository**。
3. Repository name 填写 `zhenyu-shao-homepage`。
4. 选择 **Public**。
5. 不要勾选添加 README、`.gitignore` 或 License，保持空仓库。
6. 点击 **Create repository**。

## 第二步：上传文件

1. 在新仓库页面点击 **uploading an existing file**；如果没有看到，点击 **Add file → Upload files**。
2. 解压 `zhenyu-shao-homepage.zip`。
3. 打开解压后的 `zhenyu-shao-homepage` 文件夹。
4. 将文件夹里的所有文件和文件夹拖进 GitHub 上传区域。
   - 要上传的是项目内部内容，不要只上传外层文件夹。
   - 必须包含隐藏目录 `.github`，其中有自动发布流程。
   - 不要上传 `node_modules` 文件夹。
5. 在页面底部点击 **Commit changes**。

如果网页上传界面忽略了 `.github` 隐藏目录，可单独在仓库中新建文件：

`.github/workflows/deploy.yml`

并把本项目同名文件的内容完整复制进去。

## 第三步：开启 GitHub Pages

1. 打开仓库的 **Settings**。
2. 左侧选择 **Pages**。
3. 在 **Build and deployment** 下，将 Source 选择为 **GitHub Actions**。
4. 返回仓库的 **Actions** 页面，等待 `Deploy Zhenyu Shao Homepage` 变为绿色对勾。

## 第四步：获得 Homepage URL

发布成功后，地址通常是：

`https://你的GitHub用户名.github.io/zhenyu-shao-homepage/`

打开确认页面能看到：

- Zhenyu Shao
- 邵震宇
- sirius.szy@foxmail.com

确认无误后，将这个完整 URL 粘贴到 OpenReview 的 **Homepage URL** 输入框。

## 更新主页

以后在 GitHub 仓库中修改文件并提交，GitHub Actions 会自动重新发布。通常等待 1–3 分钟即可看到更新。
