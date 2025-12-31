document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('input[name="query"]');
    const contentContainer = document.querySelector('.container');

    if (!searchForm || !searchInput || !contentContainer) {
        return; // Don't run if essential elements are not on the page
    }

    // Store the original, clean HTML content.
    const originalContent = contentContainer.innerHTML;
    let currentMatches = [];
    let currentMatchIndex = -1;

    // This function will be called to remove highlights
    const removeHighlights = () => {
        contentContainer.innerHTML = originalContent;
    };
    
    // This function performs the search and highlights matches
    const highlightMatches = (query) => {
        removeHighlights(); // Always start from a clean slate

        if (!query) {
            return;
        }

        const regex = new RegExp(query, 'gi');
        contentContainer.innerHTML = originalContent.replace(regex, (match) => `<mark>${match}</mark>`);

        // After highlighting, find all matches to scroll to them
        currentMatches = contentContainer.querySelectorAll('mark');
        currentMatchIndex = -1;

        if (currentMatches.length > 0) {
            currentMatchIndex = 0;
            currentMatches[currentMatchIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    // Listen for input events for real-time searching
    searchInput.addEventListener('input', (event) => {
        highlightMatches(event.target.value.trim());
    });

    // Prevent the form from actually submitting and reloading the page
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // This allows user to hit Enter to confirm search, which might be useful
        // if they want to cycle through matches in the future (not implemented yet).
        // For now, it just re-runs the highlight, which is fine.
        highlightMatches(searchInput.value.trim());
    });
});