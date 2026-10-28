# เคียงใจ Thailand website V2

泰国小贷产品官网，独立仓库`Muggle-icon/kiangjai-thailand-website-v2`，V1不受影响。第十九轮重做结构与视觉节奏：明亮青蓝Hero突出最高50,000泰铢及一个下载入口；宽屏同时展示首页与还款两张完整原App及对应说明；流程、FAQ之后以一套共享深青页脚集中下载、公司、联系和安全信息。

使用原Tony Wu曼谷实拍，仅改CSS构图、缩放及色彩处理；未换图、未生成人物。Kanit标题／UI与Noto Sans Thai正文及各自许可继续保留。业务配置、已审泰语及App原图不改。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开`http://localhost:4173`。无npm依赖。编辑源组件后重新构建，提交四个根页面与`/privacy/`、`/terms/`、`/security/`路由别名。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html`、`benefits.html`、`application-steps.html` | 青蓝实拍Hero、响应式双产品说明、四步申请 |
| `src/pages/home.html` | Hero／产品／流程／FAQ主体顺序 |
| `src/components/header.html`、`footer.html` | 居中导航与一次呈现的下载／公司／联系／安全收束 |
| `src/pages/security.html`、`privacy.html`、`terms.html` | 安全中心和真实法律待提供状态 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens、Hero、首页章节、共享页脚及支持页 |
| `assets/app.js`、`src/components/dialogs.html`、`app-gallery.html` | 宽屏／Tab模式切换、菜单、FAQ、原图、弹窗和待开放下载 |
| `scripts/build.py` | 静态构建、统一`APP_SCREENS`／`{{app-screen:…}}`原图组件 |
| `assets/campaign/`、`app/`、`brand/`、`icons/`、`fonts/` | 既有实拍、完整原App、品牌、SVG和自托管授权字体 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文和公开配置，保持原值 |
| `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` | 产品边界和当前设计合同 |

## 当前状态与验收

继续`releaseStatus: preview`／noindex。下载显示真实待开放提示；不虚构商店链接、下载QR、官方身份／举报渠道或放贷牌照。图内推广、费率及示例状态仍待业务核准。

第十九轮本地浏览器已记录21个页面／宽度场景，无横向溢出、缺失ARIA目标或破图；1440px两张原图／两个region同时可见、均为240px且无Tab。4组紧凑产品切换／键盘返回、8组弹窗前后几何与scroll差均为0；2组首页FAQ键盘展开行位移−0.1875／0.125px、行高差0；13条交互记录覆盖跨断点焦点、移动顺序、导航／返回、原图、下载和反馈。静态构建7页、链接／重复ID、JS语法及diff检查通过。以上为浏览器视口验收，不代表物理设备测试或完整竞品视觉等同。截图及报告在仓库外`../round19-preview/`；线上发布结论以`../round19-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

复用已有Vercel Web Interface Guidelines、Anthropic frontend-design、Impeccable及UI UX Pro Max；本轮无新技能安装。图片查看沿用Lucide maximize-2，FAQ加号保留展开语义。

详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)、[第十九轮结构整改](docs/round19-review.md)、[素材来源](docs/visual-assets.md)、[生成实验历史](docs/generated-art-prompts.md)。
