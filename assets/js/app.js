// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (header) {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Hero Carousel Logic (Variant J)
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            // Remove active from current
            slides[currentSlide].classList.remove('active');
            // Move to next
            currentSlide = (currentSlide + 1) % slides.length;
            // Add active to new
            slides[currentSlide].classList.add('active');
        }, 6000); // Change every 6 seconds
    }
});

// Mobile Drawer Logic
function toggleDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    if (drawer) {
        drawer.classList.toggle('active');
        if (drawer.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

// Modal Logic
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const qtyInput = document.getElementById('qtyInput');
const modalActions = document.querySelector('.modal-actions-inner');

function openModal(index) {
    // Check if products array exists (it should be loaded via products.js or API)
    if (typeof products === 'undefined' || !modal) return;
    
    const product = products[index];
    modalImg.src = product.img;
    modalTitle.innerText = product.title;
    modalPrice.innerText = product.price;
    modalDesc.innerText = product.desc;
    qtyInput.value = 1;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
    
    // Mobile Specific
    if (window.innerWidth <= 768) {
       const wrapper = document.querySelector('.modal-actions-wrapper');
       if(wrapper) wrapper.classList.add('modal-actions');
    }
}

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            const wrapper = document.querySelector('.modal-actions-wrapper');
            if(wrapper) wrapper.classList.remove('modal-actions');
        }, 300);
    }
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function updateQty(change) {
    if (!qtyInput) return;
    let val = parseInt(qtyInput.value);
    val += change;
    if (val < 1) val = 1;
    qtyInput.value = val;
}