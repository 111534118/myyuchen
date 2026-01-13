# Change: Remove the Serene Forest map

## Why
The user requested to remove the "Serene Forest" map from the application. This map is considered obsolete and will be replaced by the "Shore" map as the default.

## What Changes
- The "Serene Forest" interactive map (`map.html`, `map.js`) will be deleted.
- The "Shore" map (`map-shore.html`) will become the default interactive map.
- All navigation links pointing to the old "Serene Forest" map will be updated to point to the "Shore" map.

## Impact
- **Affected Specs**: `interactive-map`, `site-navigation`
- **Affected Code**:
  - `src/main/resources/static/game/map.html` (deleted)
  - `src/main/resources/static/game/map.js` (deleted)
  - `src/main/resources/static/game/index.html` (modified)
  - `src/main/resources/static/game/main-quest.html` (modified)
