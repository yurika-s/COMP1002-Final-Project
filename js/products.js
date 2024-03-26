/*
* declare constants 
*/
// information of each product
const products = [
  {
    'title': 'OneStep600',
    'details': [
      'Size: 16 x 15.49 x 12.9 cm',
      'Weight: 603.28 g',
      '2 Lithium Metal batteries required.',
      'Uses Polaroid 600 format film',
      'Built-in automatic flash'
    ],
    'price': '$200',
    'image': [
      '../images/products/card-onestep600.jpg',
      '../images/products/modal-onestep600.jpg'
    ]
  },
  {
    'title': 'Impulse',
    'details': [
      'Size: 25.1 x 18.5 x 14.2 cm',
      'Weight: 793.78 g',
      '2 AA batteries required.',
      'Uses Polaroid 600 format film',
      'Built-in automatic flash'
    ],
    'price': '$250',
    'image': [
      '../images/products/card-impulse.jpg',
      '../images/products/modal-impulse.jpg'
    ]
  },
  {
    'title': 'Captiva',
    'details': [
      'Size: 25.15 x 23.11 x 6.86 cm',
      'Weight: 771.11 g',
      'Single-Lens Reflex design',
      'Uses Polaroid 500 instant film',
      'Built-in electronic flash'
    ],
    'price': '$100',
    'image': [
      '../images/products/card-captiva.jpg',
      '../images/products/modal-captiva.jpg'
    ]
  }
];
// grab html elements
const modal = document.querySelector('.js-modal');
const modalButton1 = document.querySelector('.js-modal-button1');
const modalButton2 = document.querySelector('.js-modal-button2');
const modalButton3 = document.querySelector('.js-modal-button3');
const modalTitle = document.querySelector('.js-modal-title');
const modalDetail = document.querySelector('.js-modal-list');
const modalPrice = document.querySelector('.js-price');
const modalImage = document.querySelector('.js-modal-image');
const modalClose = document.querySelector('.js-close-button');
const modalContents = document.querySelector('.modal-contents');

// variable
let type;

/**
 * events
 */
// button1 show OneStep600 details
modalButton1.addEventListener('click', () => {
  type = 0;
  openModal(type);
});

// button2 show Impulse details
modalButton2.addEventListener('click', () => {
  type = 1;
  openModal(type);
});

// button3 show Captiva details
modalButton3.addEventListener('click', () => {
  type = 2;
  openModal(type);
});

// mouseover to modal
modalContents.addEventListener('mouseover', () => {
  modalImage.setAttribute('src', products[type]['image'][1]);
})

// mouseout from modal
modalContents.addEventListener('mouseout', () => {
  modalImage.setAttribute('src', products[type]['image'][0]);
})

// close the modal
modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

// open the modal
function openModal(type) {
  modalTitle.textContent = products[type]['title'];
  modalImage.setAttribute('src', products[type]['image'][0]);
  resetModalDetails();
  products[type]['details'].forEach(detail => {
    const list = document.createElement('li');
    list.textContent = detail;
    modalDetail.appendChild(list);
  });
  modalPrice.textContent = products[type]['price'];
  modal.classList.add('is-open');
}

// remove detail information list in modal
function resetModalDetails() {
  while (modalDetail.firstChild) {
    modalDetail.removeChild(modalDetail.firstChild);
  }
}