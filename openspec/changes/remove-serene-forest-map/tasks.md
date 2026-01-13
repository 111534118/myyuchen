## 1. Remove Map Files
- [ ] 1.1. Delete `src/main/resources/static/game/map.html`.
- [ ] 1.2. Delete `src/main/resources/static/game/map.js`.

## 2. Update Navigation
- [ ] 2.1. Update the link in `src/main/resources/static/game/index.html` from `map.html` to `map-shore.html`.
- [ ] 2.2. Update the link in `src/main/resources/static/game/main-quest.html` from `map.html` to `map-shore.html`.
- [ ] 2.3. Update the link in `src/main/resources/static/game/map.html` navigation to `map-shore.html`.

## 3. Validation
- [ ] 3.1. Manually verify that the "Serene Forest" map is no longer accessible and that navigation points to the "Shore" map.
- [ ] 3.2. Run `openspec validate remove-serene-forest-map --strict` to confirm spec changes are valid.
