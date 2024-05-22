# ProfitMetrics

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

This is a first party integration app for ProfitMetrics.


## Configuration

1. [Install](https://vtex.io/docs/recipes/store/installing-an-app) the `jefferspet.profit-metrics` app in your VTEX account.


2. In your account's admin, open the **Apps** section and select the **ProfitMetrics** box.
3. Click on the settings icon and add your **PID**. You can get this value from the Profit Metrics Account.
4. Save your changes.

### Details
This app listens to the orderPlaced event and sends it to profitMetrics. It also updates the email of the user being sent, which should help with user tracebility.



