// این فایل رو دست نزنید - فقط price-data.js رو هر هفته ویرایش کنید

function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const formatter = new Intl.NumberFormat('fa-IR');

    for (const category in products) {
        const section = document.createElement("div");
        section.className = "price-category active";

        // بنر بالای هر دسته - جای خالی برای عکس (بعداً با CSS پس‌زمینه‌ی عکس اضافه کنید)
        const banner = document.createElement("button");
        banner.className = "price-banner";
        banner.innerHTML = `
            <span class="price-banner-title">${category}</span>
            <span class="price-category-icon">˅</span>
        `;

        const body = document.createElement("div");
        body.className = "price-category-body";

        const list = document.createElement("div");
        list.className = "price-list";

        products[category].forEach(item => {
            const row = document.createElement("div");
            row.className = "price-row";
            row.innerHTML = `
                <span class="price-row-value">${formatter.format(item.price)} <small>ریال</small></span>
                <span class="price-row-name">${item.name}</span>
            `;
            list.appendChild(row);
        });

        body.appendChild(list);

        banner.addEventListener("click", () => {
            section.classList.toggle("active");
        });

        section.appendChild(banner);
        section.appendChild(body);
        container.appendChild(section);
    }
}

// تاریخ آخرین بروزرسانی رو توی المانی با این id نمایش می‌ده
function renderLastUpdated(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (typeof lastPriceUpdate === "undefined") return;
    el.textContent = "آخرین بروزرسانی قیمت‌ها: " + lastPriceUpdate;
}
