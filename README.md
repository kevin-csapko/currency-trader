# Currency Trader

This is a simple React application that utilizes the public [Frankfurter API](https://api.frankfurter.app) to determine if its viable to buy or sell based on today's CAD to USD conversion rate, with the single criterion being if today's conversion rate is higher or lower than the median conversion rate of the last 30 days.

The purpose of the application is to demonstrate basic state management through the use of React Hooks - more specifically, the `useState`, `useEffect`, `useContext`, and `useReducer` hooks.

## Installation

After cloning this repository, simply use the following two commands to run the project locally on `http://localhost:3000`.

```
npm install
npm start
```

## Customization

At this time, the comparison conversion rate is taken by pulling the median conversion rate of the last 30 days. This value can be edited in `src\utils\settings.js`.

```
export const MEDIAN_CONVERSION_RATE_DISTRIBUTION_DAYS = 30;
```