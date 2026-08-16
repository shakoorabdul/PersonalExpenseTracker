// Categories List
const categories = [
  "General", "Salary", "Food", "Utilities", "Rent or mortgage",
  "Electricity, water, and gas", "Internet and cable", "Phone bills",
  "Groceries", "Restaurants and dining out", "Coffee shops and fast food",
  "Gas and fuel", "Public transit passes", "Car payments and insurance",
  "Parking", "Car maintenance/repairs", "Clothing and shoes",
  "Haircuts and salon services", "Gym memberships", "Medications and prescriptions",
  "Dental/eye care", "Health or life insurance", "Pet food and supplies",
  "Veterinary", "Credit card payments"
];

// App State
let transactions = JSON.parse(localStorage.getItem("finance_data")) || [];

// DOM Elements
const form = document.getElementById("transaction-form");
const categorySelect = document.getElementById("category");
const filterSelect = document.getElementById("filter-category");

// Populate Category Dropdowns Dynamically (Sorted Alphabetically)
function populateCategories() {
  const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));  
  categorySelect.innerHTML = sortedCategories.map(c => `<option value="${c}">${c}</option>`).join("");
  filterSelect.innerHTML = `<option value="All">All</option>` + categorySelect.innerHTML;
}

// Add Transaction
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const freq = document.getElementById("frequency").value;
  const item = {
    id: Date.now().toString(),
    description: document.getElementById("desc").value,
    amount: parseFloat(document.getElementById("amount").value),
    category: categorySelect.value,
    date: document.getElementById("date").value,
    frequency: freq || null
  };

  transactions.push(item);
  saveAndRender();
  form.reset();
});

// Delete Transaction
function deleteItem(id) {
  transactions = transactions.filter(t => t.id !== id);
  saveAndRender();
}

// Filter Change
filterSelect.addEventListener("change", renderUI);

// Save & Sync UI
function saveAndRender() {
  localStorage.setItem("finance_data", JSON.stringify(transactions));
  renderUI();
}

// Render Dashboard UI
function renderUI() {
  const selectedCategory = filterSelect.value;
  
  // Calculations
  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
  const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0);

  document.getElementById("net-balance").textContent = `$${balance.toFixed(2)}`;
  document.getElementById("total-income").textContent = `$${income.toFixed(2)}`;
  document.getElementById("total-expenses").textContent = `$${expenses.toFixed(2)}`;

  // Filter and Sort
  const filtered = selectedCategory === "All" || !selectedCategory
    ? transactions
    : transactions.filter(t => t.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Render Table
  const tbody = document.getElementById("transaction-rows");
  tbody.innerHTML = sorted.map(t => {
    const descText = t.frequency ? `${t.description} [Recurring: ${t.frequency}]` : t.description;
    const sign = t.amount >= 0 ? "+" : "-";
    const formattedAmount = `${sign}$${Math.abs(t.amount).toFixed(2)}`;
    const amtClass = t.amount >= 0 ? "positive" : "negative";

    return `
      <tr>
        <td>${t.date}</td>
        <td>${descText}</td>
        <td>${t.category}</td>
        <td class="${amtClass}">${formattedAmount}</td>
        <td><button class="delete-btn" onclick="deleteItem('${t.id}')">Delete</button></td>
      </tr>
    `;
  }).join("");
}

// Initialize App
populateCategories();
renderUI();
