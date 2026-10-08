# Playwright Automation Exercise

This is a test automation project I made while learning **Playwright with TypeScript**.

I used the website **Automation Exercise** to practice writing end-to-end tests.

## What I automated

I currently have 15 test cases automated:

* Register User
* Login with correct credentials
* Login with incorrect credentials
* Logout User
* Register with an existing email
* Contact Us Form
* Verify Test Cases Page
* Products and Product Details
* Search Product
* Subscription on Home Page
* Subscription on Cart Page
* Add Products to Cart
* Verify Product Quantity
* Place Order: Register while Checkout
* Place Order: Register before Checkout

## Technologies

* Playwright
* TypeScript
* Node.js
* Git / GitHub

## Run the tests

Install the dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run the tests:

```bash
npx playwright test
```

Run the tests with the browser visible:

```bash
npx playwright test --headed
```

Open the Playwright report:

```bash
npx playwright show-report
```

## My goal

I'm using this project to improve my skills in **QA automation** and to learn how to write reliable end-to-end tests with Playwright.

I plan to add more test cases and improve the project as I continue learning.
