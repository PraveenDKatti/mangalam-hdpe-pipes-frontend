// ================= BENEFITS =================
const specsData = [
  {
    title: "Superior Chemical Resistance",
    desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
    icon: "assets/images/Bag.svg"
  },
  {
    title: "Exceptional Flexibility & durability",
    desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
    icon: "assets/images/Needle.svg"
  },
  {
    title: "Leak-Proof Fusion Welding",
    desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
    icon: "assets/images/GearFine.svg"
  },
  {
    title: "Cost-Effective Long-Term Solution",
    desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
    icon: "assets/images/GearFine.svg"
  },
  {
    title: "Environmentally Sustainable",
    desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
    icon: "assets/images/GearFine.svg"
  },
  {
    title: "Certified Quality Assurance",
    desc: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.",
    icon: "assets/images/GearFine.svg"
  }
];

const container = document.getElementById("spec-tiles");

if (container) {
  container.innerHTML = specsData
    .map(
      (item) => `
        <div class="spec-tile">
          <img src="${item.icon}" alt="${item.title} icon">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `
    )
    .join("");
}

// ================= FAQ =================
const faqData = [
  {
    question: "What is the purpose of a laser cutter for sheet metal?",
    answer:
      "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes."
  },
  {
    question: "What are the benefits of using aluminum tubing in manufacturing?",
    answer: ""
  },
  {
    question: "How is aluminum tubing produced?",
    answer: ""
  },
  {
    question: "What are the common applications of aluminum tubing?",
    answer: ""
  },
  {
    question: "Can aluminum tubing be customized?",
    answer: ""
  }
];

const faqContainer = document.getElementById("faq-list");

if (faqContainer) {
  faqContainer.innerHTML = faqData
    .map(
      (item, index) => `
        <div class="faq-item">
          <button class="faq-question" data-index="${index}">
            ${item.question}
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${item.answer}</p>
          </div>
        </div>
      `
    )
    .join("");

  // toggle
  faqContainer.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });
}

// ================= USE CASES =================
const usecases = [
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "assets/images/FishnetManufacture.jpg"
  }
];

const track = document.getElementById("usecase-track");

if (track) {
  track.innerHTML = usecases
    .map(
      (item) => `
        <article class="usecase-card">
          <div class="usecase-image" style="background-image:url('${item.image}')"></div>
          <div class="usecase-content">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        </article>
      `
    )
    .join("");
}

// ================= TESTIMONIALS =================
const testimonials = [
  {
    title: "Revolutionized our FIBC production efficiency!",
    desc: "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.",
    name: "Johann Mueller",
    role: "Production Director",
    avatar: "assets/images/client-avatar.jpg",
    logo: "assets/images/Client.svg"
  },
  {
    title: "Revolutionized our FIBC production efficiency!",
    desc: "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.",
    name: "Johann Mueller",
    role: "Production Director",
    avatar: "assets/images/client-avatar.jpg",
    logo: ""
  },
  {
    title: "Excellent support for specialized applications.",
    desc: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialized applications.",
    name: "Carlos Mendoza",
    role: "Operations Manager",
    avatar: "assets/images/client-avatar.jpg",
    logo: ""
  },
  {
    title: "Provides the exact specifications we need!",
    desc: "For our technical textile applications, Meera's specialized machinery provides the exact specifications we need. Their understanding of automotive textile requirements is exceptional.",
    name: "Rajesh Kumar",
    role: "Manufacturing Head",
    avatar: "assets/images/client-avatar.jpg",
    logo: "assets/images/Client.svg"
  }
];

const carousel = document.getElementById("cards-carousel");
const pagination = document.getElementById("cards-pagination");

if (carousel) {
  carousel.innerHTML = testimonials
    .map(
      (item) => `
        <article class="card">
          <img class="quote-icon" src="./assets/images/quotation.svg" alt="Quote">

          <div class="card-content">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>

          <div class="client-card">
            <div class="client-info">
              <img src="${item.avatar}" alt="${item.name}">
              <span>
                <p>${item.name}</p>
                <p>${item.role}</p>
              </span>
            </div>

            ${
              item.logo
                ? `<span class="client-logo">
                     <img src="${item.logo}" alt="Company logo">
                   </span>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");
}

if (pagination) {
  pagination.innerHTML = testimonials
    .map((_, index) => `<li class="dot" data-index="${index}"></li>`)
    .join("");
}