const categories = ['Food & groceries', 'Medicines & care', 'Electronics', 'Home essentials', 'Farm supplies', 'Baby care', 'Pet care', 'Books & stationery'];
const cities = ['Delhi NCR', 'Mumbai', 'Bengaluru', 'Kolkata', 'Chennai', 'Hyderabad', 'Ahmedabad', 'Jaipur', 'Guwahati', 'Leh', 'Ranchi', 'Bhopal'];
const ruralZones = ['Himalayan hamlets', 'Desert villages', 'Island communities', 'Forest belts', 'Tea estates', 'Agricultural clusters'];

function renderList(targetId, items, template) {
  document.getElementById(targetId).innerHTML = items.map(template).join('');
}

function renderCategories(filter = '') {
  const visible = categories.filter((category) => category.toLowerCase().includes(filter.toLowerCase()));
  renderList('categoryGrid', visible, (category) => `<article class="tile"><span>✅</span>${category}</article>`);
}

renderCategories();
renderList('cities', cities, (city) => `<span>${city}</span>`);
renderList('ruralZones', ruralZones, (zone) => `<span>${zone}</span>`);
document.getElementById('needSearch').addEventListener('input', (event) => renderCategories(event.target.value));
