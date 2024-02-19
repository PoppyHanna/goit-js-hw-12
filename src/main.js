import { searchFoto } from './js/pixabay-api.js';
import { renderFoto, renderMorePhotos } from './js/render-functions.js';

// Імпортуємо необхідний плагін
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.getElementById('search-form');
const gallery = document.querySelector('.js-container');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.getElementById('load-more-btn');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

// // Додаємо обробник події click для кнопки
// form.addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const query = document.getElementById('search-input').value.trim();
//     if (!query) {
//         iziToast.warning({
//             title: 'Warning',
//             message: 'Please enter a search images',
//         });
//         return;
//     }

//     // Показати завантажувач після кліку на кнопку
//     loader.style.display = 'block';
//     gallery.innerHTML = '';
//     // Сховати кнопку 
//     loadMoreBtn.style.display = 'none';
//     currentPage = 1;
//     currentQuery = query;

//     try {
//         const data = await searchFoto(query, currentPage);
//         if (data.hits.length === 0) {
//             iziToast.error({
//                 title: 'Error',
//                 message: 'Sorry, there are no images matching your search query. Please try again!',
//             });
//         } else {
//             totalHits = data.totalHits;
//             renderFoto(data);
//             if (data.hits.length >= 15) {
//                 loadMoreBtn.style.display = 'block';
//             }
//         }
//     } catch (error) {
//         if (gallery.innerHTML === '') {
//             iziToast.error({
//                 title: 'Error',
//                 message: 'An error occurred while searching for images',
//             });
//         }
//     } finally {
//         loader.style.display = 'none';
//     }
// });

// loadMoreBtn.addEventListener('click', async function(event) {
//     event.preventDefault();
//     loader.style.display = 'block';

//     try {
//         currentPage++;
//         const data = await searchFoto(currentQuery, currentPage);
//         if (data.hits.length > 0) {
//             const cardHeight = document.querySelector('.image-card').getBoundingClientRect().height;
//             renderMorePhotos(data);
//             window.scrollBy({
//                 top: cardHeight * 2, // Прокручуємо на дві висоти карточки галереї
//                 behavior: 'smooth' // Додаємо плавність
//             });
//         } 
//     } catch (error) {
//         // Якщо немає більше зображень для завантаження
//         loadMoreBtn.style.display = 'none';
//         iziToast.warning({
//             title: 'Warning',
//             message: 'No more images to load',
//         });
//     } finally {
//         if (gallery.querySelectorAll('.image-card').length >= totalHits) {
//             loadMoreBtn.style.display = 'none';
//             iziToast.info({
//                 title: 'Info',
//                 message: "We're sorry, but you've reached the end of search results.",
//             });
//         }
//         loader.style.display = 'none';
//     }
// });

// Додаємо обробник події click для кнопки
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.getElementById('search-input').value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search images',
        });
        return;
    }

    // Показати завантажувач після кліку на кнопку
    loader.style.display = 'block';
    // Сховати кнопку 
    loadMoreBtn.style.display = 'none';
    currentPage = 1;
    currentQuery = query;

    try {
        const data = await searchFoto(query, currentPage);
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            totalHits = data.totalHits;
            renderFoto(data);
            if (data.hits.length >= 15) {
                loadMoreBtn.style.display = 'block';
            }
        }
    } catch (error) {
        if (gallery.innerHTML === '') {
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while searching for images',
            });
        }
    } finally {
        loader.style.display = 'none';
    }
});

loadMoreBtn.addEventListener('click', async function(event) {
    event.preventDefault();
    loader.style.display = 'block';

    try {
        currentPage++;
        const data = await searchFoto(currentQuery, currentPage);
        if (data.hits.length > 0) {
            const cardHeight = document.querySelector('.image-card').getBoundingClientRect().height;
            renderMorePhotos(data);
            window.scrollBy({
                top: cardHeight * 2, // Прокручуємо на дві висоти карточки галереї
                behavior: 'smooth' // Додаємо плавність
            });
        } 
    } catch (error) {
        // Якщо немає більше зображень для завантаження
        loadMoreBtn.style.display = 'none';
        iziToast.warning({
            title: 'Warning',
            message: 'No more images to load',
        });
    } finally {
        if (gallery.querySelectorAll('.image-card').length >= totalHits) {
            loadMoreBtn.style.display = 'none';
            iziToast.info({
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
            });
        }
        loader.style.display = 'none';
    }
});


