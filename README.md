# Engineering Cell Admin Template

Node.js deployment-ready version of the engineering cell admin system.

## Requirements

- Node.js `22.13.0` or newer
- npm

Reason: this project uses `node:sqlite`, so older Node runtimes are not sufficient.

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- server.js
|-- package.json
|-- render.yaml
|-- railway.json
|-- seeds/
|   `-- themes.seed.json
`-- data/
    `-- .gitkeep
```

## Local Run

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Health Check

After startup, the service exposes:

- `GET /health`
- `GET /api/health`

## Data Storage

Runtime data is stored in the `data/` directory by default:

- `data/app.db`
- `data/themes.json`

You can override the storage directory with:

```bash
DATA_DIR=/your/persistent/path
```

On first startup, if `themes.json` is missing, the app will initialize it from `seeds/themes.seed.json`.

## Deploy To Railway

1. Push this project to GitHub.
2. Create a new Railway project from the GitHub repo.
3. Railway will detect the Node app automatically.
4. Add a Volume and mount it to `/app/data`.
5. Add environment variable:

```bash
DATA_DIR=/app/data
```

6. Deploy.

## Deploy To Render

This repo already includes `render.yaml`.

If you deploy manually on Render, use:

- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/health`
- Persistent Disk Mount Path: `/var/data`
- Environment Variable: `DATA_DIR=/var/data`

## GitHub Upload Checklist

Before pushing to GitHub:

1. Keep `node_modules/` out of the repository.
2. Do not commit runtime files under `data/` such as `app.db` and `themes.json`.
3. Do not commit extracted document assets such as `data/ui_spec_extract/`.
4. Keep `package-lock.json` so others can install dependencies consistently.
5. Push only source, config, seed data, and deployment files.

## First Push Example

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Notes

- The server binds to `0.0.0.0`, which is required by most cloud platforms.
- SQLite is suitable for single-instance deployment. Do not scale this app to multiple instances while sharing the same SQLite file.
