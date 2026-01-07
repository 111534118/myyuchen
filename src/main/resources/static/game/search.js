document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[name="query"]');
    const suggestionsContainer = document.getElementById('search-suggestions');
    const searchForm = document.querySelector('.search-form');

    if (!searchInput || !suggestionsContainer) {
        return;
    }

    let searchIndex = [];

    // 1. Build the search index from headers with IDs
    const buildIndex = () => {
        const elements = document.querySelectorAll('h2[id], h3[id], .quest-step[id]');
        searchIndex = Array.from(elements).map(el => {
            let title = '';
            if (el.classList.contains('quest-step')) {
                const p = el.querySelector('p');
                if (p) {
                    title = p.textContent.trim();
                }
            } else {
                title = el.textContent.replace(/^[0-9. ]+/, ''); // Remove leading numbers/dots for headers
            }
            return { id: el.id, title: title };
        }).filter(item => item.title); // Ensure we don't have items with no title
    };

    // 2. Show/hide and populate suggestions
    const showSuggestions = (query) => {
        if (!query) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const filtered = searchIndex.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length > 0) {
            suggestionsContainer.innerHTML = filtered.map(item =>
                `<a href="#${item.id}" class="suggestion-item">${item.title}</a>`
            ).join('');
        } else {
            suggestionsContainer.innerHTML = `<div class="suggestion-item no-results">找不到結果</div>`;
        }
        suggestionsContainer.style.display = 'block';
    };
    
    // 3. Hide suggestions
    const hideSuggestions = () => {
        suggestionsContainer.style.display = 'none';
    };

    // --- Event Listeners ---

    // Listen for input in the search box
    searchInput.addEventListener('input', (e) => {
        showSuggestions(e.target.value.trim());
    });
    
    // Prevent form submission
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    // Handle clicks on suggestion items
    suggestionsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('suggestion-item') && !e.target.classList.contains('no-results')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            hideSuggestions();
            searchInput.value = ''; // Clear input after selection
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchForm.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            hideSuggestions();
        }
    });
    
    // Focus listener to potentially show recent searches or suggestions
    searchInput.addEventListener('focus', (e) => {
        if(e.target.value.trim()) {
            showSuggestions(e.target.value.trim());
        }
    });


    // Initial setup
    buildIndex();
});
