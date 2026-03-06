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
          <div class="faq-question" data-index="${index}">
            <p>${item.question}</p>
            <span class="faq-arrow">
              <img src="./assets/images/ChevronDown.svg" alt="expand question">
            </span>
          </div>
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
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    title: "Fishnet Manufacturing",
    desc: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    image: "./assets/images/FishnetManufacture.jpg"
  }
];

const track = document.getElementById("usecase-track");

if (track) {
  track.innerHTML = usecases
    .map(
      (item) => `
        <article class="usecase-card" style="background-image:url(${item.image})">
          <div class="usecase-content">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
        </article>
      `
    )
    .join("");

  // Carousel navigation
  const prevBtn = document.getElementById("usecase-prevBtn");
  const nextBtn = document.getElementById("usecase-nextBtn");
  let currentIndex = 0;
  const cardWidth = 440; // 420px card + 20px gap

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const maxIndex = usecases.length - 1;
      currentIndex = Math.min(currentIndex + 1, maxIndex);
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });
  }
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
                <p class="name">${item.name}</p>
                <p class="role">${item.role}</p>
              </span>
            </div>

            ${item.logo
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

// ================= MOBILE PROCESS CAROUSEL =================
const processSteps = [
  {
    step: "Raw Material",
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    features: ["PE100 grade material", "Optimal molecular weight distribution"],
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    step: "Extrusion",
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    features: ["PE100 grade material", "Optimal molecular weight distribution"],
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    step: "Cooling",
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    features: ["PE100 grade material", "Optimal molecular weight distribution"],
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    step: "Sizing",
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    features: ["PE100 grade material", "Optimal molecular weight distribution"],
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    step: "Quality Control",
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    features: ["PE100 grade material", "Optimal molecular weight distribution"],
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    step: "Marking",
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    features: ["PE100 grade material", "Optimal molecular weight distribution"],
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    step: "Cutting",
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    features: ["PE100 grade material", "Optimal molecular weight distribution"],
    image: "./assets/images/FishnetManufacture.jpg"
  },
  {
    step: "Packaging",
    title: "High-Grade Raw Material Selection",
    desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
    features: ["PE100 grade material", "Optimal molecular weight distribution"],
    image: "./assets/images/FishnetManufacture.jpg"
  },
];

let mobileProcessIndex = 0;
const total = processSteps.length;

function updateMobileProcess() {
  const step = processSteps[mobileProcessIndex];
  document.querySelector('.process-mobile-step').textContent =
    `Step ${mobileProcessIndex + 1}/${total}: ${step.step}`;
  document.querySelector('.process-mobile-title').textContent = step.title;
  document.querySelector('.process-mobile-desc').textContent = step.desc;
  document.querySelector('.process-mobile-image').style.backgroundImage =
    `url('${step.image}')`;
  document.querySelector('.process-mobile-features').innerHTML =
    step.features.map(f => `<li>${f}</li>`).join('');
}

const mobilePrev = document.getElementById('mobile-process-prevBtn');
const mobileNext = document.getElementById('mobile-process-nextBtn');

if (mobilePrev) {
  mobilePrev.addEventListener('click', () => {
    mobileProcessIndex = Math.max(mobileProcessIndex - 1, 0);
    updateMobileProcess();
  });
}

if (mobileNext) {
  mobileNext.addEventListener('click', () => {
    mobileProcessIndex = Math.min(mobileProcessIndex + 1, total - 1);
    updateMobileProcess();
  });
}

// ================= MODAL =================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// triggers
const datasheetBtn = document.querySelector('.download-specs-btn button');
const requestQuoteBtn = document.querySelector('.quote-request-btn button');

if (datasheetBtn) datasheetBtn.addEventListener('click', () => openModal('catalogue-modal'));
if (requestQuoteBtn) requestQuoteBtn.addEventListener('click', () => openModal('quote-modal'));

// close buttons — works for any modal-close button inside any modal
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal-overlay');
    if (modal) closeModal(modal.id);
  });
});

// close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(modal => {
      closeModal(modal.id);
    });
  }
});


// ================= NAVBAR SCROLL HIDE/SHOW =================
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // scrolling down — hide
    header.classList.add('header--hidden');
  } else {
    // scrolling up — show
    header.classList.remove('header--hidden');
  }

  lastScrollY = currentScrollY;
});