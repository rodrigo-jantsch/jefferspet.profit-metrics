📢 Use this project, [contribute](https://github.com/vtex-apps/google-customer-reviews) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Google Customer Reviews

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

This is a first party integration app for Google Customer Reviews, a free service that enables Google to collect valuable feedback from customers who’ve made a purchase on your site.

![Google Customer Reviews](https://user-images.githubusercontent.com/284515/77967280-31500500-72bb-11ea-9e71-b3abf8d677df.png)

## Configuration

1. [Install](https://vtex.io/docs/recipes/store/installing-an-app) the `vtex.google-customer-reviews` app in your VTEX account.

> ℹ️ *By installing the Google Customer Reviews, you will have access to the `google-customer-review-badge` block, which displays the Google Customer Reviews badge on your store's UI. To know how to set it up, check out the **Advanced Configuration** section below.*

2. In your account's admin, open the **Apps** section and select the **Google Customer Reviews** box.
3. Click on the settings icon and add your **Merchant Center ID**. You can get this value from the [Google Merchant Center](https://www.google.com/retail/solutions/merchant-center/.
4. Save your changes.

### Advanced Configuration

To display the Google Customer Reviews badge in your store, follow the instructions below:

1. Add the Google Customer Reviews app to your theme's `peerDependency` list: 

```diff
   "peerDependencies": {
     "vtex.reviews-and-ratings": "2.x",
+    "vtex.google-customer-reviews": "1.x"
   },
```

> ⚠️ *To be successful in the first step, you will need to update your theme to a new major version. Learn how to perform this update following the instructions given in [this tutorial](https://vtex.io/docs/recipes/development/migrating-CMS-settings-after-major-update/).* 

2. Add the `google-customer-review-badge` block to your theme's in the desired template. For example: 

```diff
   "flex-layout.row#footer-1-desktop": {
     "children": [
       "vtex.menu@2.x:menu#Products",
       "vtex.menu@2.x:menu#footer-clothing",
       "vtex.menu@2.x:menu#footer-decoration",
       "vtex.menu@2.x:menu#footer-bags",
       "footer-spacer",
       "social-networks",
+      "google-customer-review-badge"
     ],
     "props": {
       "blockClass": "menu-row",
       "paddingTop": 6,
       "paddingBottom": 3
     }
   },
```

3. [Deploy your theme changes](https://vtex.io/docs/recipes/store-management/making-your-theme-content-public/). 

## Troubleshooting

This app only works with the website URL verified and claimed in Merchant Center. When the website URL is not verified, a 404 javascript error is generated.

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->


