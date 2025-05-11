// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('fade-out');
    }, 1500);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile navigation
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');

mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Collection filter
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter products
        productCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Product modal
const productModal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');
const viewButtons = document.querySelectorAll('.view-btn');

// Product data (in a real site, this would come from a database)
const products = [
    {
        title: 'Classic T-Shirt',
        description: 'Our signature classic t-shirt made from premium cotton blend. Features a minimalist design with the HBP logo. Perfect for everyday wear and available in multiple sizes.',
        image: 'https://via.placeholder.com/400x500/111111/ffffff?text=HBP+Classic+Tee'
    },
    {
        title: 'Graphic T-Shirt',
        description: 'Make a statement with our bold graphic t-shirt. Features unique HBP artwork on premium fabric. Stand out from the crowd with this eye-catching design.',
        image: 'https://via.placeholder.com/400x500/111111/ffffff?text=HBP+Graphic+Tee'
    },
    {
        title: 'Premium Hoodie',
        description: 'Stay warm and stylish with our premium hoodie. Made from heavyweight cotton blend with a soft inner lining. Features the HBP logo and comfortable kangaroo pocket.',
        image: 'https://via.placeholder.com/400x500/111111/ffffff?text=HBP+Hoodie'
    },
    {
        title: 'Signature Cap',
        description: 'Complete your look with our signature cap. Features embroidered HBP logo and adjustable strap for the perfect fit. Made from durable materials for long-lasting wear.',
        image: 'https://via.placeholder.com/400x500/111111/ffffff?text=HBP+Cap'
    },
    {
        title: 'Zip-Up Hoodie',
        description: 'Our versatile zip-up hoodie offers both style and functionality. Features full-length zipper, adjustable hood, and side pockets. Perfect for layering in any season.',
        image: 'https://via.placeholder.com/400x500/111111/ffffff?text=HBP+Zip+Hoodie'
    },
    {
        title: 'Winter Beanie',
        description: 'Stay warm in style with our winter beanie. Features knitted design with embroidered HBP logo. Made from soft acrylic blend for maximum comfort and warmth.',
        image: 'https://via.placeholder.com/400x500/111111/ffffff?text=HBP+Beanie'
    }
];

// Open modal with product details
viewButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the clicked product's image
        const productImage = button.closest('.product-card').querySelector('.product-image img').src;
        
        // Set modal content based on product data
        modalImage.src = productImage;
        modalTitle.textContent = products[index].title;
        modalDescription.textContent = products[index].description;
        
        // Show modal
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Size selection
const sizeButtons = document.querySelectorAll('.size-options button');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Quantity selector
const quantityInput = document.querySelector('.quantity-selector input');
const minusBtn = document.querySelector('.qty-btn.minus');
const plusBtn = document.querySelector('.qty-btn.plus');

minusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
        quantityInput.value = value - 1;
    }
});

plusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value < 10) {
        quantityInput.value = value + 1;
    }
});

// Form submission (for demo purposes)
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! In a real website, this would be sent to the server.');
    contactForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! In a real website, this would be sent to the server.');
    newsletterForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add to cart button animation
const addToCartBtn = document.querySelector('.add-to-cart');
addToCartBtn.addEventListener('click', () => {
    addToCartBtn.classList.add('added');
    addToCartBtn.textContent = 'Added to Cart';
    
    setTimeout(() => {
        addToCartBtn.classList.remove('added');
        addToCartBtn.textContent = 'Add to Cart';
    }, 2000);
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.product-card, .about-content, .contact-container');

function reveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check
