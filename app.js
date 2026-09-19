// --- Grundlogik für die Wildstuben App ---

let items = [
  // --- Getränke: Bier ---
  {
    id: "bier-hell-050",
    name: "Helles Bier",
    description: "0,50 l",
    price: 12.40,
    category: "getraenke",
    subcategory: "Bier"
  },
  {
    id: "bier-radler-050",
    name: "Radler",
    description: "0,50 l",
    price: 12.40,
    category: "getraenke",
    subcategory: "Bier"
  },
  {
    id: "bier-weissbier-050",
    name: "Weißbier",
    description: "0,50 l",
    price: 12.40,
    category: "getraenke",
    subcategory: "Bier"
  },
  {
    id: "bier-alkoholfrei-050",
    name: "Alkoholfreies Bier",
    description: "0,50 l",
    price: 12.40,
    category: "getraenke",
    subcategory: "Bier"
  },

  // --- Getränke: Alkoholfrei ---
  {
    id: "spezi-050",
    name: "Spezi",
    description: "0,50 l",
    price: 8.40,
    category: "getraenke",
    subcategory: "Alkoholfrei"
  },
  {
    id: "cola-050",
    name: "Coca-Cola",
    description: "0,50 l",
    price: 8.40,
    category: "getraenke",
    subcategory: "Alkoholfrei"
  },
  {
    id: "fanta-050",
    name: "Fanta",
    description: "0,50 l",
    price: 8.40,
    category: "getraenke",
    subcategory: "Alkoholfrei"
  },
  {
    id: "wasser-050",
    name: "Münchner Tafelwasser",
    description: "0,50 l",
    price: 7.90,
    category: "getraenke",
    subcategory: "Alkoholfrei"
  },
  // --- Getränke: Weißwein ---
  {
    id: "riesling-075",
    name: "Riesling",
    description: "0,75 l",
    price: 39.90,
    category: "getraenke",
    subcategory: "Weißwein"
  },
  {
    id: "riesling-025",
    name: "Riesling",
    description: "0,25 l",
    price: 13.90,
    category: "getraenke",
    subcategory: "Weißwein"
  },
  {
    id: "grauburgunder-075",
    name: "Grauburgunder",
    description: "0,75 l",
    price: 39.90,
    category: "getraenke",
    subcategory: "Weißwein"
  },
  {
    id: "grauburgunder-025",
    name: "Grauburgunder",
    description: "0,25 l",
    price: 13.90,
    category: "getraenke",
    subcategory: "Weißwein"
  },

  // --- Getränke: Rotwein ---
  {
    id: "merlot-075",
    name: "Merlot",
    description: "0,75 l",
    price: 39.90,
    category: "getraenke",
    subcategory: "Rotwein"
  },
  {
    id: "merlot-025",
    name: "Merlot",
    description: "0,25 l",
    price: 13.90,
    category: "getraenke",
    subcategory: "Rotwein"
  },
  {
    id: "cuvee-075",
    name: "Cuvée",
    description: "0,75 l",
    price: 39.90,
    category: "getraenke",
    subcategory: "Rotwein"
  },
  {
    id: "cuvee-025",
    name: "Cuvée",
    description: "0,25 l",
    price: 13.90,
    category: "getraenke",
    subcategory: "Rotwein"
  },

  // --- Getränke: Rosé ---
  {
    id: "rose-075",
    name: "Rosé",
    description: "0,75 l",
    price: 39.90,
    category: "getraenke",
    subcategory: "Rosé"
  },
  {
    id: "rose-025",
    name: "Rosé",
    description: "0,25 l",
    price: 13.90,
    category: "getraenke",
    subcategory: "Rosé"
  },

  // --- Getränke: Schaumwein ---
  {
    id: "prosecco-075",
    name: "Prosecco",
    description: "0,75 l",
    price: 39.90,
    category: "getraenke",
    subcategory: "Schaumwein"
  },
  {
    id: "prosecco-025",
    name: "Prosecco",
    description: "0,25 l",
    price: 13.90,
    category: "getraenke",
    subcategory: "Schaumwein"
  },

  // --- Getränke: Spirituosen ---
  {
    id: "honig-williamsbirne-2cl",
    name: "Honig Williamsbirne 35 %",
    description: "2 cl",
    price: 6.90,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "jaegermeister-2cl",
    name: "Jägermeister (Kräuterlikör) 35 %",
    description: "2 cl",
    price: 5.30,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "jaegermeister-wuerfel-9x2cl",
    name: "Jägermeister (Kräuterlikör) 35 %",
    description: "Würfel – 9 Stk. à 2 cl",
    price: 42.50,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "jaegermeister-orange-2cl",
    name: "Jägermeister Orange (Kräuterlikör Orangen-Zitrusaromen) 35 %",
    description: "2 cl",
    price: 5.30,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "jaegermeister-orange-wuerfel-12x2cl",
    name: "Jägermeister Orange (Kräuterlikör Orangen-Zitrusaromen) 35 %",
    description: "Würfel – 12 Stk. à 2 cl",
    price: 42.50,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "kleiner-feigling-original-2cl",
    name: "Kleiner Feigling Original",
    description: "2 cl",
    price: 4.70,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "kleiner-feigling-original-wuerfel-12x2cl",
    name: "Kleiner Feigling Original",
    description: "Würfel – 12 Stk. à 2 cl",
    price: 52.00,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "kleiner-feigling-red-berry-2cl",
    name: "Kleiner Feigling Red Berry",
    description: "2 cl",
    price: 4.70,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "kleiner-feigling-red-berry-wuerfel-12x2cl",
    name: "Kleiner Feigling Red Berry",
    description: "Würfel – 12 Stk. à 2 cl",
    price: 52.00,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "alpenschnaps-haselnuss-05l",
    name: "Alpenschnaps Haselnuss 35 %",
    description: "0,5 l",
    price: 76.90,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  {
    id: "alpenschnaps-marille-05l",
    name: "Alpenschnaps Marille 35 %",
    description: "0,5 l",
    price: 76.90,
    category: "getraenke",
    subcategory: "Spirituosen"
  },
  // --- Getränke: Champagner ---
  {
    id: "champagner-moet-075",
    name: "Moët & Chandon Impérial",
    description: "0,75 l",
    price: 129.00,
    category: "getraenke",
    subcategory: "Champagner"
  },
  {
    id: "champagner-moet-015",
    name: "Moët & Chandon Impérial",
    description: "0,15 l",
    price: 29.00,
    category: "getraenke",
    subcategory: "Champagner"
  },

  // --- Getränke: Cocktails ---
  {
    id: "cocktail-hugo",
    name: "Hugo",
    description: "Holunder, Minze, Limette",
    price: 12.90,
    category: "getraenke",
    subcategory: "Cocktails"
  },
  {
    id: "cocktail-aperol-spritz",
    name: "Aperol Spritz",
    description: "Aperol, Prosecco, Soda",
    price: 12.90,
    category: "getraenke",
    subcategory: "Cocktails"
  },
  {
    id: "cocktail-lillet-wildberry",
    name: "Lillet Wildberry",
    description: "Lillet Blanc, Wildberry",
    price: 12.90,
    category: "getraenke",
    subcategory: "Cocktails"
  },
  {
    id: "cocktail-gin-tonic",
    name: "Gin Tonic",
    description: "Gin, Tonic Water",
    price: 13.90,
    category: "getraenke",
    subcategory: "Cocktails"
  },

  // --- Getränke: Kindergetränke ---
  {
    id: "kinder-spezi-030",
    name: "Spezi",
    description: "0,30 l",
    price: 4.90,
    category: "getraenke",
    subcategory: "Kindergetränke"
  },
  {
    id: "kinder-cola-030",
    name: "Coca-Cola",
    description: "0,30 l",
    price: 4.90,
    category: "getraenke",
    subcategory: "Kindergetränke"
  },
  {
    id: "kinder-fanta-030",
    name: "Fanta",
    description: "0,30 l",
    price: 4.90,
    category: "getraenke",
    subcategory: "Kindergetränke"
  },
  {
    id: "kinder-wasser-030",
    name: "Münchner Tafelwasser",
    description: "0,30 l",
    price: 4.50,
    category: "getraenke",
    subcategory: "Kindergetränke"
  },
  // --- Speisen: Vorspeisen ---
  {
    id: "brezn",
    name: "Wiesnbrezn",
    description: "Ofenfrisch",
    price: 5.90,
    category: "speisen",
    subcategory: "Vorspeisen"
  },
  {
    id: "obazda",
    name: "Obazda",
    description: "Mit Zwiebeln und Brezn",
    price: 12.90,
    category: "speisen",
    subcategory: "Vorspeisen"
  },
  {
    id: "radi",
    name: "Radi",
    description: "Frisch geschnitten",
    price: 6.90,
    category: "speisen",
    subcategory: "Vorspeisen"
  },

  // --- Speisen: Mittagswiesn ---
  {
    id: "mittag-schnitzel",
    name: "Schnitzel Wiener Art",
    description: "Mit Kartoffelsalat",
    price: 16.90,
    category: "speisen",
    subcategory: "Mittagswiesn"
  },
  {
    id: "mittag-kaesespaetzle",
    name: "Käsespätzle",
    description: "Mit Röstzwiebeln",
    price: 14.90,
    category: "speisen",
    subcategory: "Mittagswiesn"
  },
  {
    id: "mittag-bratwurst",
    name: "Bratwürste",
    description: "Mit Sauerkraut",
    price: 13.90,
    category: "speisen",
    subcategory: "Mittagswiesn"
  },

  // --- Speisen: Hauptgerichte ---
  {
    id: "schweinshaxe",
    name: "Schweinshaxe",
    description: "Mit Knödel und Dunkelbiersoße",
    price: 24.90,
    category: "speisen",
    subcategory: "Hauptgerichte"
  },
  {
    id: "halbes-hendl",
    name: "Halbes Hendl",
    description: "Knusprig gebraten",
    price: 15.90,
    category: "speisen",
    subcategory: "Hauptgerichte"
  },
  {
    id: "wiesnburger",
    name: "Wiesn-Burger",
    description: "Rindfleisch, Käse, Speck, Pommes",
    price: 18.90,
    category: "speisen",
    subcategory: "Hauptgerichte"
  },
  {
    id: "schweinsbraten",
    name: "Schweinsbraten",
    description: "Mit Knödel und Krautsalat",
    price: 19.90,
    category: "speisen",
    subcategory: "Hauptgerichte"
  },
  {
    id: "flammkuchen",
    name: "Flammkuchen Klassik",
    description: "Speck, Zwiebeln, Sauerrahm",
    price: 14.90,
    category: "speisen",
    subcategory: "Hauptgerichte"
  },
  {
    id: "flammkuchen-veggie",
    name: "Flammkuchen Veggie",
    description: "Tomate, Rucola, Mozzarella",
    price: 14.90,
    category: "speisen",
    subcategory: "Hauptgerichte"
  },
  // --- Speisen: Rosa Gebratenes ---
  {
    id: "rosa-rinderfilet",
    name: "Rosa gebratenes Rinderfilet",
    description: "Mit Kräuterbutter und Gemüse",
    price: 32.90,
    category: "speisen",
    subcategory: "Rosa Gebratenes"
  },
  {
    id: "rosa-lamm",
    name: "Rosa gebratenes Lamm",
    description: "Mit Rosmarinjus und Bohnen",
    price: 29.90,
    category: "speisen",
    subcategory: "Rosa Gebratenes"
  },
  {
    id: "rosa-entrecote",
    name: "Entrecôte rosa gebraten",
    description: "Mit Pfeffersoße",
    price: 27.90,
    category: "speisen",
    subcategory: "Rosa Gebratenes"
  },

  // --- Speisen: Vegetarisch & Vegan ---
  {
    id: "veggie-kaesespaetzle",
    name: "Käsespätzle",
    description: "Vegetarisch, mit Röstzwiebeln",
    price: 14.90,
    category: "speisen",
    subcategory: "Vegetarisch/Vegan"
  },
  {
    id: "veggie-flammkuchen",
    name: "Flammkuchen Veggie",
    description: "Tomate, Rucola, Mozzarella",
    price: 14.90,
    category: "speisen",
    subcategory: "Vegetarisch/Vegan"
  },
  {
    id: "vegan-bowl",
    name: "Vegane Bowl",
    description: "Kichererbsen, Gemüse, Sesam",
    price: 13.90,
    category: "speisen",
    subcategory: "Vegetarisch/Vegan"
  },
  {
    id: "vegan-salat",
    name: "Großer gemischter Salat",
    description: "Vegan, mit Balsamico",
    price: 11.90,
    category: "speisen",
    subcategory: "Vegetarisch/Vegan"
  },

  // --- Speisen: Beilagen ---
  {
    id: "pommes",
    name: "Pommes Frites",
    description: "Knusprig",
    price: 5.90,
    category: "speisen",
    subcategory: "Beilagen"
  },
  {
    id: "knodel",
    name: "Kartoffelknödel",
    description: "2 Stück",
    price: 4.90,
    category: "speisen",
    subcategory: "Beilagen"
  },
  {
    id: "krautsalat",
    name: "Krautsalat",
    description: "Hausgemacht",
    price: 4.50,
    category: "speisen",
    subcategory: "Beilagen"
  },
  {
    id: "gemuese",
    name: "Gemüse der Saison",
    description: "Frisch gedünstet",
    price: 5.90,
    category: "speisen",
    subcategory: "Beilagen"
  },
  // --- Speisen: Dessert ---
  {
    id: "kaiser-schmarrn",
    name: "Kaiserschmarrn",
    description: "Mit Apfelmus und Puderzucker",
    price: 11.90,
    category: "speisen",
    subcategory: "Dessert"
  },
  {
    id: "apfelstrudel",
    name: "Apfelstrudel",
    description: "Mit Vanillesoße",
    price: 9.90,
    category: "speisen",
    subcategory: "Dessert"
  },
  {
    id: "germknoedel",
    name: "Germknödel",
    description: "Mit Mohn und Vanillesoße",
    price: 10.90,
    category: "speisen",
    subcategory: "Dessert"
  },
  {
    id: "eisbecher",
    name: "Eisbecher",
    description: "3 Kugeln nach Wahl",
    price: 7.90,
    category: "speisen",
    subcategory: "Dessert"
  },

  // --- Speisen: Kindergerichte ---
  {
    id: "kinder-nuggets",
    name: "Chicken Nuggets",
    description: "Mit Pommes",
    price: 8.90,
    category: "speisen",
    subcategory: "Kindergerichte"
  },
  {
    id: "kinder-spaghetti",
    name: "Spaghetti Tomatensoße",
    description: "Mild gewürzt",
    price: 7.90,
    category: "speisen",
    subcategory: "Kindergerichte"
  },
  {
    id: "kinder-wiener",
    name: "Wiener Würstchen",
    description: "Mit Pommes",
    price: 7.90,
    category: "speisen",
    subcategory: "Kindergerichte"
  },
  {
    id: "kinder-pizza",
    name: "Mini-Pizza",
    description: "Tomate & Käse",
    price: 6.90,
    category: "speisen",
    subcategory: "Kindergerichte"
  },
  ]; // <-- Ende des items[] Arrays


// --- Rendering der Items ---
function renderItems(categoryFilter = "getraenke", searchQuery = "") {
  const container = document.getElementById("items-container");
  container.innerHTML = "";

  const filtered = items.filter(item => {
    const matchesCategory = item.category === categoryFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <div class="item-title">${item.name}</div>
      <div class="item-description">${item.description}</div>
      <div class="item-price">${item.price.toFixed(2)} €</div>

      <div class="quantity-control">
        <button onclick="changeQuantity('${item.id}', -1)">−</button>
        <span id="qty-${item.id}">0</span>
        <button onclick="changeQuantity('${item.id}', 1)">+</button>
      </div>
    `;

    container.appendChild(div);
  });
}


// --- Mengensteuerung ---
const quantities = {};

function changeQuantity(id, delta) {
  if (!quantities[id]) quantities[id] = 0;
  quantities[id] = Math.max(0, quantities[id] + delta);

  document.getElementById(`qty-${id}`).textContent = quantities[id];
  updateTotal();
}


// --- Gesamtpreis berechnen ---
function updateTotal() {
  let total = 0;

  for (const id in quantities) {
    const qty = quantities[id];
    if (qty > 0) {
      const item = items.find(i => i.id === id);
      total += item.price * qty;
    }
  }

  document.getElementById("total").textContent = total.toFixed(2) + " €";
}


// --- Tabs (Getränke / Speisen) ---
document.querySelectorAll(".tab-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    renderItems(category, document.getElementById("search").value);
  });
});


// --- Suche ---
document.getElementById("search").addEventListener("input", e => {
  const activeTab = document.querySelector(".tab-button.active").dataset.category;
  renderItems(activeTab, e.target.value);
});


// --- Initiales Rendering ---
renderItems("getraenke");
