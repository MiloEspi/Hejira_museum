# Map Data

## Required: US + Canada TopoJSON

This directory needs a TopoJSON file for the interactive map.

### Option A — Use the bundled script (recommended)

Run from the project root:

```bash
npm run copy-topojson
```

This copies `states-10m.json` from the `us-atlas` npm package into this directory.

### Option B — Manual download

Download `states-10m.json` from:
https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json

Save it as `public/maps/us-states-10m.json`.

### Canada layer

For southern Canada provinces, a separate TopoJSON will be needed.
Source: https://github.com/topojson/world-atlas or Natural Earth Data.
This will be addressed in Phase 3 (map implementation).
