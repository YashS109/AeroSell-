const products = [
        { name: 'Fresh family grocery basket', category: 'Groceries', icon: '🥦', price: '₹699', tag: 'Daily need' },
        { name: 'Prescription medicine refill', category: 'Medicines', icon: '💊', price: '₹249', tag: 'Priority' },
        { name: 'Emergency charger kit', category: 'Electronics', icon: '🔌', price: '₹899', tag: 'Fast lane' },
        { name: 'Hot meal combo', category: 'Food', icon: '🍛', price: '₹189', tag: '30 min' },
        { name: 'Baby care essentials', category: 'Baby Care', icon: '🍼', price: '₹549', tag: 'Family' },
        { name: 'Farm seed and tool kit', category: 'Farm', icon: '🌾', price: '₹1,299', tag: 'Rural' },
        { name: 'Home hygiene pack', category: 'Home', icon: '🧼', price: '₹399', tag: 'Monthly' },
        { name: 'Pet food bundle', category: 'Pet Care', icon: '🐾', price: '₹459', tag: 'A-to-Z' }
      ];
      const coverage = ['Delhi NCR', 'Mumbai', 'Bengaluru', 'Kolkata', 'Chennai', 'Hyderabad', 'Ahmedabad', 'Jaipur', 'Guwahati', 'Leh', 'Ranchi', 'Bhopal', 'Himalayan hamlets', 'Desert villages', 'Island communities', 'Forest belts'];
      const productGrid = document.getElementById('productGrid');
      const filters = document.getElementById('categoryFilters');
      const toast = document.getElementById('cartToast');
      const categories = ['All', ...new Set(products.map((product) => product.category))];

      function renderProducts(category = 'All', query = '') {
        const visibleProducts = products.filter((product) => {
          const matchesCategory = category === 'All' || product.category === category;
          const matchesQuery = `${product.name} ${product.category} ${product.tag}`.toLowerCase().includes(query.toLowerCase());
          return matchesCategory && matchesQuery;
        });
        productGrid.innerHTML = visibleProducts.map((product, index) => `
          <article class="product-card" style="animation-delay:${index * 70}ms">
            <div class="product-art">${product.icon}</div>
            <div class="product-body">
              <span class="badge">${product.tag}</span>
              <h3>${product.name}</h3>
              <p class="muted">${product.category} delivered through AeroSell agent, fast lane, or drone routing.</p>
              <div class="product-meta"><span>${product.price}</span><span>⭐ 4.9</span></div>
              <button class="add-btn" data-product="${product.name}">Add to cart</button>
            </div>
          </article>
        `).join('');
      }

      function renderFilters(active = 'All') {
        filters.innerHTML = categories.map((category) => `<button class="chip ${category === active ? 'active' : ''}" data-category="${category}">${category}</button>`).join('');
      }

      renderProducts();
      renderFilters();
      document.getElementById('coverageList').innerHTML = coverage.map((place) => `<span>${place}</span>`).join('');

      let activeCategory = 'All';
      filters.addEventListener('click', (event) => {
        const button = event.target.closest('[data-category]');
        if (!button) return;
        activeCategory = button.dataset.category;
        renderFilters(activeCategory);
        renderProducts(activeCategory, document.getElementById('needSearch').value);
      });
      document.getElementById('needSearch').addEventListener('input', (event) => renderProducts(activeCategory, event.target.value));
      document.getElementById('searchForm').addEventListener('submit', (event) => event.preventDefault());
      document.addEventListener('click', (event) => {
        if (!event.target.matches('.add-btn')) return;
        toast.textContent = `${event.target.dataset.product} added to Aero cart ✅`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 1800);
      });
