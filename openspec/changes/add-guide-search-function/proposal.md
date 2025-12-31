# Proposal: Add Guide Search Function

This change introduces a client-side search functionality to allow users to search for content across the static guide pages.

## Problem

As the guide content grows, it becomes difficult for users to find specific information quickly. A search function is needed to improve content discoverability.

## Proposed Solution

A client-side search feature will be implemented using JavaScript.
1.  A search bar will be added to the main navigation header, making it accessible from all pages.
2.  Upon submitting a search query, the user will be redirected to a dedicated search results page (`search-results.html`).
3.  This page will use JavaScript to:
    a. Fetch content from the guide pages (`index.html` and `main-quest.html`).
    b. Search for the query within the fetched content.
    c. Dynamically display a list of results, including snippets of the found text and links to the source pages.

This approach provides a comprehensive search experience without requiring a backend server.
