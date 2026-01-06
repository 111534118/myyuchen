# Proposal: Add Multiple Maps to Interactive Map Section

## Overview
This proposal outlines the addition of multiple maps to the existing interactive map section (`/map.html`). The current implementation displays a single static map image with clickable markers. This change will extend that functionality to support multiple distinct maps, with navigation between them and placeholder clickable markers on each new map.

## Motivation
The user requested more content for their webpage, specifically additional interactive maps. Expanding the map functionality will provide a richer user experience and more comprehensive game guidance.

## Proposed Changes
1.  **New Maps:** Integrate "Shore" (海岸) and "Tropics" (熱帶雨林) as new interactive maps.
2.  **Navigation:** Introduce a mechanism for users to select and switch between the available maps. A dropdown menu within the main navigation bar, under the "互動地圖" (Interactive Map) link, is proposed.
3.  **Map Display:** Each map will display a fixed image (`海岸.png` and `熱帶.png` respectively) with 2-3 clickable static markers.
4.  **Marker Data:** For the initial implementation, placeholder data will be used for marker positions, titles, and descriptions. These can be easily updated by the user later.

## High-Level Plan
1.  **Update Navigation:** Modify `src/main/resources/static/game/index.html` and `src/main/resources/static/game/style.css` to include a dropdown menu for map selection.
2.  **Create New Map Pages:** Create new HTML files for each map (e.g., `map-shore.html`, `map-tropics.html`) by duplicating and modifying the existing `map.html`.
3.  **Implement Map Logic:** Each new map page will include its specific map image and placeholder markers. The existing `map.js` functionality will be adapted to handle the markers for each new map. Initially, `map.js` will likely be duplicated for each new map, following the "straightforward, minimal implementations first" guardrail.

## Deliverables
-   Updated navigation bar with map selection.
-   `map-shore.html` displaying the "Shore" map image with placeholder markers.
-   `map-tropics.html` displaying the "Tropics" map image with placeholder markers.
-   Associated JavaScript and CSS for the new maps and navigation.

## Future Considerations
-   Refactoring marker data and map logic into a more dynamic, data-driven system (e.g., using a single template and loading JSON data) for easier management of many maps).
-   Implementing actual interactive features beyond static markers (e.g., zoom, pan).