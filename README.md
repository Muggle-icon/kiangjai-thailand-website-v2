# เคียงใจ Thailand website v2

2026-10-26 独立官网改版。沿用旧项目的静态 HTML/CSS/JS、共享组件和 Python 构建器，保留 #44E0F8 品牌色、原始 Logo、已审泰语与提供的 App 素材。旧版仓库不受影响。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 http://localhost:4173 。不需要 npm install；所有字体、图标、图片和二维码库均在本地。

## 编辑位置

- `src/pages/home.html` 首页
- `src/pages/security.html` 安全中心
- `src/pages/privacy.html`、`terms.html` 法律页面
- `src/components/` 共用导航、FAQ、弹窗和页脚
- `src/config.json` 公开配置（电话、商店链接、官方渠道和核验资料）
- `src/content/reviewed-th.json` 已审泰语原文参考
- `assets/redesign.css` Tokens、共享控件、首屏、响应式与弹窗
- `assets/homepage.css` 优势、步骤、公司、FAQ、下载和防骗模块
- `assets/secondary.css` 安全中心、政策和页脚
- `assets/app.js` 全部交互，下载二维码使用本地 MIT 库

修改后运行构建器，提交源文件及生成结果。根 `.html` 和 `/privacy/`、`/terms/`、`/security/` 均可直接访问和刷新，支持 GitHub Pages 项目子路径。

## 发布状态

这是可交付开发与评审的完整视觉预览。当前没有真实商店链接，因此所有下载按钮统一展示已审的“即将上线”状态，不外跳、不收集资料。正式政策、官方域名、商店开发者名称、举报渠道和牌照核验信息尚待业务方提供；页面不虚构这些内容。`releaseStatus: preview` 输出 noindex，准备正式运营时再切换。

GitHub Pages workflow 位于 `.github/workflows/pages.yml`。仓库设置中启用 GitHub Actions 为 Pages 发布源后，推送 main 即构建发布。构建产物仅含网页和 assets，不发布源代码文档目录。

设计、素材和验收记录见 [交付说明](docs/delivery.md)。
