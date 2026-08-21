[![Watch the video](https://youtube.ca)](https://youtu.be/gN3Z2lwMyAI)
Project Overview
It is a browser-based Personal Finance & Expense Tracker that runs entirely on the client side (no server needed). User data stays private and is saved locally in the browser.
Main Goals
•	Financial Clarity: Give users an immediate visual overview of their Total Balance, Income, and Expenses, along with a visual chart.
•	Smart Code Structure: Use JavaScript Classes (OOP) to organize transactions, recurring items, and account calculations cleanly.
•	Offline Saving: Save data automatically using the browser's localStorage so information stays saved when the page refreshes.
•	Visual Charts: Use Chart.js to show a color-coded doughnut chart breaking down expenses by category (Food, Utilities, General, etc.).
Features & Layout
1.	Summary Cards: Tops cards displaying Balance, Total Income, and Total Expenses with color coding (green/red).
2.	Interactive Chart: A doughnut chart showing how expenses are split across categories.
3.	Transaction Form: Inputs for Description, Amount, Category, Date, and an optional Frequency selector for recurring expenses (Weekly/Monthly).
4.	Transaction Table & Filter: A table listing all entries with a Delete button for each item and a Category Filter dropdown to filter items.
Technical Breakdown
•	Transaction Class: Base class storing id, description, amount, category, and date. Contains static helper methods for sorting and tax estimations.
•	RecurringTransaction Subclass: Inherits from Transaction to handle repeating costs (e.g., weekly/monthly bills).
•	AccountManager Class: Handles calculations (adding/deleting transactions, totaling balance, filtering) and saving/loading data to localStorage.
•	renderUI() Function: A central function that updates the numbers, table rows, and doughnut chart whenever a change occurs.
What Will Be Delivered
1.	index.html: The structure of the page (forms, summary cards, chart area, table).
2.	styles.css: CSS layout (Grid/Flexbox) making it responsive across devices.
3.	app.js: All JavaScript logic (Classes, Chart.js, saving, events).
4.	Live Site & Code Repository: A GitHub repository with at least 15 commits, published live on GitHub Pages, Netlify, or Vercel.
Execution Plan
Setup & Core Classes
•	Set up Git repository and create standard files (index.html, styles.css, app.js).
•	Connect Chart.js via CDN in index.html.
•	Write the Transaction and RecurringTransaction JavaScript classes.
Data Management & Storage
•	Build the AccountManager class to handle array operations (add, delete, total calculations, filter).
•	Implement localStorage logic to save and restore transaction objects when the page loads.
Interface & Chart Integration
•	Design the HTML layout (KPI cards, input forms, and transaction table) with responsive CSS Grid/Flexbox styling.
•	Integrate Chart.js to render and dynamically update the doughnut chart without display glitches.
Interactivity & Deployment
•	Hook up button listeners for submitting forms, deleting entries, and filtering categories.
•	Bind everything into a single renderUI() loop.
•	Clean up the code, test edge cases, push 15+ Git commits, and deploy the project live

