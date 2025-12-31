# Design: Client-Side Search Architecture

This document outlines the design for the client-side search functionality.

## 1. UI Components

*   **Search Form**: A standard HTML `<form>` containing an `<input type="search">` field and a `<button type="submit">` will be added to the navigation bar in the header of each page.
*   **Search Results Page**: A new file, `search-results.html`, will be created. It will contain a container element (e.g., `<div id="results-container">`) where the search results will be dynamically injected by JavaScript.

## 2. Search Logic Flow (`search.js`)

1.  **Query Handling**: The search form will not submit in the traditional sense. Instead, its "submit" event will be captured by JavaScript. The script will retrieve the search query, prevent the default form submission, and redirect the user to `search-results.html?query=<encoded_query>`.

2.  **Results Page Logic**:
    a.  On `search-results.html` load, the script will parse the `query` parameter from the URL.
    b.  If no query is present, it will display a "Please enter a search term" message.
    c.  It will define an array of searchable pages: `['/game/index.html', '/game/main-quest.html']`.
    d.  It will use `Promise.all` and the `fetch()` API to asynchronously retrieve the content of these pages.
    e.  For each fetched page, it will use `DOMParser` to convert the HTML string into a DOM document. This allows for safe and easy extraction of text from the main content area (e.g., the `.container` element).
    f.  The script will then iterate through the text content, searching for case-insensitive matches of the search query.
    g.  For each match found, it will generate an HTML snippet containing:
        *   A link (`<a>`) to the source page.
        *   The title of the source page.
        *   A short context paragraph showing the keyword. The keyword will be highlighted (e.g., with a `<mark>` tag).
    h.  These snippets will be appended to the `#results-container`.
    i.  If no results are found, a "No results found" message will be displayed.

## 3. Styling

*   New CSS rules will be added to `style.css` for the search form (`.search-form`), search input, search button, results container (`#results-container`), and result items (`.result-item`). Styling will be consistent with the new site theme.
