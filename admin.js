let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
      {
        id: 1,
        imageURL:
          "https://github.com/0xjoshva/RealEstate-Website/blob/main/assets/black-1.jpg?raw=true",
        title: "Light And Modern Apartment",
        address: "2436 SW 8th St, Cape Town, WC 33135, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 4,
        bathrooms: 2,
        garages: 1,
        size: 1294,
        price: 4500,
        category: "APARTMENT",
        city: "Cape Town",
      },
      {
        id: 2,
        imageURL:
          "https://github.com/0xjoshva/RealEstate-Website/blob/main/assets/black-2.jpg?raw=true",
        title: "Renovated Studio",
        address: "194 Mercer Street, 627 Broadway, Durban, KZN 10012, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 4,
        bathrooms: 2,
        garages: 1,
        size: 1200,
        price: 54000,
        category: "STUDIO",
        city: "Durban",
      },
      {
        id: 3,
        imageURL:
          "https://raw.githubusercontent.com/0xjoshva/RealEstate-Website/main/assets/black-3.jpg",
        title: "New Apartment Nice View",
        address: "8100 S Ashland Ave, East London, EC 60620, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 3,
        bathrooms: 1,
        garages: 1,
        size: 1789,
        price: 11000,
        category: "APARTMENT",
        city: "East London",
      },
      {
        id: 4,
        imageURL:
          "https://github.com/0xjoshva/RealEstate-Website/blob/main/assets/black-4.jpg?raw=true",
        title: "Design Apartment",
        address: "Quincy St, Johannesburg, GP 80899, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 3,
        bathrooms: 2,
        garages: 1,
        size: 2560,
        price: 8760,
        category: "STUDIO",
        city: "Johannesburg",
      },
      {
        id: 5,
        imageURL:
          "https://github.com/0xjoshva/RealEstate-Website/blob/main/assets/black-5.jpg?raw=true",
        title: "Comfortable Apartment",
        address: "Fulton St, Cape Town, WC 8921, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 4,
        bathrooms: 2,
        garages: 1,
        size: 4300,
        price: 1600,
        category: "APARTMENT",
        city: "Cape Town",
      },
      {
        id: 6,
        imageURL:
          "https://github.com/0xjoshva/RealEstate-Website/blob/main/assets/black-6.jpg?raw=true",
        title: "Complex Apartment",
        address: "2195 SW 8th St, Durban, KZN 33135, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 5,
        bathrooms: 3,
        garages: 1,
        size: 3450,
        price: 5600,
        category: "APARTMENT",
        city: "Durban",
      },
      {
        id: 7,
        imageURL:
          "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-4.jpg",
        title: "Modern Loft Apartment",
        address: "2450 Long St, Cape Town, WC 33135, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 1,
        bathrooms: 1,
        garages: 1,
        size: 1678,
        price: 3750,
        category: "APARTMENT",
        city: "Cape Town",
      },
      {
        id: 8,
        imageURL:
          "https://images.squarespace-cdn.com/content/v1/5ce56c992a52ef0001811af5/1566291873080-MPSRINC8HXY00TRF23Q7/black+kitchen+design+-+contemprory+firplace+design",
        title: "Ample Apartment",
        address: "3617 Clarington Ave, Johannesburg, GP 90034, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 2,
        bathrooms: 1,
        garages: 1,
        size: 2300,
        price: 1900,
        category: "APARTMENT",
        city: "Johannesburg",
      },
      {
        id: 9,
        imageURL:
          "https://archello.s3.eu-central-1.amazonaws.com/images/2020/11/03/nid-interior-modern-interior-design-of-2-bedroom-apartment-apartments-archello.1604392458.3519.png",
        title: "Comfortable Apartment",
        address: "2321 Clarington Ave, Johannesburg, GP 90034, ZA",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 1,
        bathrooms: 2,
        garages: 1,
        size: 860,
        price: 1900,
        category: "APARTMENT",
        city: "Johannesburg",
      },
      {
        id: 10,
        imageURL:
          "https://www.yankodesign.com/images/design_news/2020/06/all-black-interior-designs-that-will-inspire-you-to-adapt-this-modern-minimal-trend/05-Black-Interior-Design-Inspiration_Alpine-Cabin_yankodesign.jpg",
        title: "New Apartment",
        address: "3215 Overland Ave, Johannesburg, GP 9283, 90034 ",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 3,
        bathrooms: 1,
        garages: 1,
        size: 1509,
        price: 2450,
        category: "APARTMENT",
        city: "Johannesburg",
      },

      {
        id: 11,
        imageURL:
          "https://github.com/0xjoshva/RealEstate-Website/blob/main/assets/black-12.jpg?raw=true",
        title: "Upscale Office",
        address: "9213 Long St, Cape Town, WC 9283, ZA ",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 6,
        bathrooms: 3,
        garages: 3,
        size: 6700,
        price: 9950,
        category: "OFFICE",
        city: "Cape Town",
      },
      {
        id: 12,
        imageURL:
          "https://github.com/0xjoshva/RealEstate-Website/blob/main/assets/black-11.jpg?raw=true",
        title: "Breathtaking Modern Office",
        address: "81 Adderley St, Cape Town, WC 1343, 90034 ",

        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.",

        bedrooms: 6,
        bathrooms: 4,
        garages: 3,
        size: 3459,
        price: 6995,
        category: "OFFICE",
        city: "Cape Town",
      },
    ];

localStorage.setItem("properties", JSON.stringify(properties));

//show properties
const propertyContainer = document.getElementById("property-container");
function showAllProperties() {
  propertyContainer.innerHTML = "";
  properties.forEach((property) => {
    propertyContainer.innerHTML += `
<li class="items">
              <div class="row item">
                <span class="col-1">${property.id}</span >
                <span class="col-1"><img src="${property.imageURL}" alt="" id="imageURL"></span>

                <span class="col-6 title">${property.title} 
                  <div class="icons">
            <div><i class="fa-solid fa-bed"></i><span id="bedrooms"> ${property.bedrooms}</span></div>
            <div><i class="fa-solid fa-shower"></i><span id="bathrooms"> ${property.bathrooms}</span></div>
            <div><i class="fa-solid fa-warehouse"></i><span id="garages"> ${property.garages}</span></div>
            <div><i class="fa-solid fa-ruler-combined"></i><span id="size"> ${property.size}</span><span> ㎡</span></div>
          </div></span>
               
                <span class="col-1">${property.category}</span >
                <span class="col-1">$ ${property.price}</span>
                 <span class="col-1"></span>
                <span class="col-1" id="CRUD-icons"><i class="bi bi-pencil-square" id="edit"></i><i onclick="delProperty()" class="bi bi-x-circle" id="delete"></i>
              </div>
            </li>
     `;
  });
}
showAllProperties();

function addProperty() {
  properties.push({
    id: properties.length + 1,
    imageURL: document.querySelector("#imageURL-add").value,
    title: document.querySelector("#title-add").value,
    address: document.querySelector("#address-add").value,
    bedrooms: document.querySelector("#bed-add").value,
    bathrooms: document.querySelector("#bath-add").value,
    garages: document.querySelector("#garage-add").value,
    size: document.querySelector("#size-add").value,
    price: document.querySelector("#price-add").value,
    category: document.querySelector("#category-select-add").value,
    city: document.querySelector("#city-select-add").value,
  });
  // Save to local storage
  localStorage.setItem("properties", JSON.stringify(properties));
  //
  showAllProperties();
}

//count for badge
let count = properties.length;
document.getElementById("badge-count").innerHTML = `${count}`;

// delete function
function delProperty() {
  if (id > -1) {
    properties.splice(id, 1);
  }
  localStorage.setItem("properties", JSON.stringify(properties));
  showAllProperties();
}



//sort ID descending or highest ID to lowest ID
function showPropertiesDescending() {
  propertyContainer.innerHTML = "";
  properties
    .sort((a, b) => b.id - a.id)
    .forEach((property) => {
      propertyContainer.innerHTML += `
<li class="items">
              <div class="row item">
                <span class="col-1">${property.id}</span >
                <span class="col-1"><img src="${property.imageURL}" alt="" id="imageURL"></span>

                <span class="col-6 title">${property.title} 
                  <div class="icons">
            <div><i class="fa-solid fa-bed"></i><span id="bedrooms"> ${property.bedrooms}</span></div>
            <div><i class="fa-solid fa-shower"></i><span id="bathrooms"> ${property.bathrooms}</span></div>
            <div><i class="fa-solid fa-warehouse"></i><span id="garages"> ${property.garages}</span></div>
            <div><i class="fa-solid fa-ruler-combined"></i><span id="size"> ${property.size}</span><span> ㎡</span></div>
          </div></span>
               
                <span class="col-1">${property.category}</span >
                <span class="col-1">$ ${property.price}</span>
                 <span class="col-1"></span>
                <span class="col-1" id="CRUD-icons"><i class="bi bi-pencil-square" id="edit"></i><i onclick="delProperty()" class="bi bi-x-circle" id="delete"></i>
              </div>
            </li>
     `;
    });
  
}

//sort price from highest to lowest
function sortPriceDescending() {
  propertyContainer.innerHTML = "";
  properties
    .sort((a, b) => b.price - a.price)
    .forEach((property) => {
      propertyContainer.innerHTML += `
<li class="items">
              <div class="row item">
                <span class="col-1">${property.id}</span >
                <span class="col-1"><img src="${property.imageURL}" alt="" id="imageURL"></span>

                <span class="col-6 title">${property.title} 
                  <div class="icons">
            <div><i class="fa-solid fa-bed"></i><span id="bedrooms"> ${property.bedrooms}</span></div>
            <div><i class="fa-solid fa-shower"></i><span id="bathrooms"> ${property.bathrooms}</span></div>
            <div><i class="fa-solid fa-warehouse"></i><span id="garages"> ${property.garages}</span></div>
            <div><i class="fa-solid fa-ruler-combined"></i><span id="size"> ${property.size}</span><span> ㎡</span></div>
          </div></span>
               
                <span class="col-1">${property.category}</span >
                <span class="col-1">$ ${property.price}</span>
                 <span class="col-1"></span>
                <span class="col-1" id="CRUD-icons"><i class="bi bi-pencil-square" id="edit"></i><i onclick="delProperty()" class="bi bi-x-circle" id="delete"></i>
              </div>
            </li>
     `;
    });
}

//sort from A to Z
function sortTitleAlphabetically() {
  propertyContainer.innerHTML = "";
  properties
    .sort((a, b) => a.title.localeCompare(b.title))
    .forEach((property) => {
      propertyContainer.innerHTML += `
<li class="items">
              <div class="row item">
                <span class="col-1">${property.id}</span >
                <span class="col-1"><img src="${property.imageURL}" alt="" id="imageURL"></span>

                <span class="col-6 title">${property.title} 
                  <div class="icons">
            <div><i class="fa-solid fa-bed"></i><span id="bedrooms"> ${property.bedrooms}</span></div>
            <div><i class="fa-solid fa-shower"></i><span id="bathrooms"> ${property.bathrooms}</span></div>
            <div><i class="fa-solid fa-warehouse"></i><span id="garages"> ${property.garages}</span></div>
            <div><i class="fa-solid fa-ruler-combined"></i><span id="size"> ${property.size}</span><span> ㎡</span></div>
          </div></span>
               
                <span class="col-1">${property.category}</span >
                <span class="col-1">$ ${property.price}</span>
                 <span class="col-1"></span>
                <span class="col-1" id="CRUD-icons"><i class="bi bi-pencil-square" id="edit"></i><i onclick="delProperty()" class="bi bi-x-circle" id="delete"></i>
              </div>
            </li>
     `;
    });
}

//delete array item
function delProperty() {
  properties = properties.filter((property) => {
    return property.id !== id; 
  });
  localStorage.setItem("properties", JSON.stringify(properties));
  showAllProperties();
}