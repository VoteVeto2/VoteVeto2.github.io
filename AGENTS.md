# AGENTS.md

Personal site of Xinyu (Christopher) Yang. Jekyll on the al-folio template. Live: https://VoteVeto2.github.io. For build and edit steps, see `ONBOARD.md`.

## Map

- Content: `_pages/about.md` (home), `_pages/cv.md` + `_data/cv.yml` (CV), `_posts/` (blog), `_config.yml` (site settings), `assets/img/` (images).
- Template code: `_layouts/`, `_includes/`, `_sass/`, `_plugins/`, `assets/{css,js,fonts,webfonts}`. Don't edit unless asked.
- The nav shows about, blog, and cv. The other `_pages/` are template placeholders with `nav: false`.

## Verify

- Build: `bundle exec jekyll build` (needs Ruby ≥ 3; CI uses 3.3.5) or `docker compose up`.
- No local Ruby: push, then `gh run watch`. "Deploy site" must pass.
- A push to `main` publishes the site. Commit and push only when asked.

## Gotchas

- The CV layout renders JSON Resume instead of `_data/cv.yml` whenever `site.data.resume` exists. Don't add `_data/resume.*` or `jekyll_get_json`.
- Posts with `published: false` are formatting demos. Keep them hidden and don't delete them.
- Posts with future dates aren't built until a later deploy.
- `cv_pdf` in `_pages/cv.md` is a Google Drive share link. It must stay public ("Anyone with the link").
- Restart `jekyll serve` after editing `_config.yml`.

## Rules

1. Think first. State your assumptions. If the request is ambiguous, ask. Don't pick an interpretation silently.
2. Keep it simple. Make the smallest change that works. No speculative features, abstractions, or options.
3. Be surgical. Touch only what the task needs and match the existing style. Report unrelated problems instead of fixing them.
4. Verify. Decide how to check the change (build passes, page renders, link resolves) and run that check before saying it's done.

## Writing

- When editing posts or the bio, keep the author's voice and facts. Use plain American English. No flourishes, and don't add claims.
- Keep docs and commit messages short and plain.
