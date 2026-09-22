# Onboard

Jekyll site on the [al-folio](https://github.com/alshedivat/al-folio) template.
Push to `main` → `.github/workflows/deploy.yml` builds → `gh-pages` branch → https://VoteVeto2.github.io.

## 1. Build locally

Native (macOS). System Ruby 2.6 is too old; CI uses 3.3.5.

```sh
brew install ruby imagemagick
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"   # put in ~/.zshrc
bundle install
bundle exec jekyll serve --livereload            # http://localhost:4000
```

Docker alternative: `docker compose up` → http://localhost:8080.

Restart the server after editing `_config.yml`. `bundle exec jekyll build` writes to `_site/` without serving.

## 2. Edit content

Visible nav: **about** (home), **blog**, **cv**.

| Section | File |
|---|---|
| Home page text | `_pages/about.md` (body below the `---` front matter) |
| Home photo | `assets/img/prof_pic.jpg`, set by `profile.image` in `_pages/about.md` |
| Site title, description, footer, favicon | `_config.yml`: `first_name`, `last_name`, `description`, `footer_text`, `icon` |
| Social icons | `_data/socials.yml` |
| CV entries | `_data/cv.yml` |
| CV PDF link | `cv_pdf` in `_pages/cv.md` |
| Blog posts | `_posts/YYYY-MM-DD-slug.md` |
| Blog page heading | `_config.yml`: `blog_name`, `blog_description` |
| Nav bar | `nav: true` and `nav_order` in a `_pages/*.md` front matter |

**CV.** Each block in `cv.yml` has a `title`, a `type` (`map`, `time_table`, `list`, `nested_list`, or `list_groups`), and `contents`. To add one, copy an existing block.

**New post.**

```yaml
---
layout: post
title: My Title
date: 2026-09-22
description: one-line summary
tags: tag1 tag2
categories: my-category
related_posts: false
# published: false          # hide the post
# toc:
#   sidebar: left           # side table of contents
# thumbnail: assets/img/x.jpg
---
```

Posts with future dates stay hidden until a deploy runs after that date.

**Images.** Put the file in `assets/img/`, then in a post:

```liquid
{% include figure.liquid path="assets/img/x.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="optional" %}
```

For side-by-side images, wrap each one in `<div class="row mt-3"><div class="col-sm-6">…</div></div>`. `_posts/2025-03-10-Knowledge-Distill.md` has a working example. Plain Markdown `![alt](/assets/img/x.jpg)` also works.

**Math.** Write `$$ ... $$` and MathJax renders it.

**Examples.** `_posts/2015-*.md` and `_posts/2021-07-04-diagrams.md` are hidden demos (`published: false`) of images, code, math, and diagrams. Copy from them.

**Hidden template pages.** `_pages/` also has publications, projects, teaching, repositories, people, and news pages. They're set to `nav: false` but can still be opened by URL. Set `nav: true` to show one. Their content lives in `_bibliography/papers.bib`, `_projects/`, and `_news/`.

## 3. Publish

Commit and push to `main`, then run `gh run watch`. The link checker runs after each deploy.

More detail: al-folio [CUSTOMIZE.md](https://github.com/alshedivat/al-folio/blob/main/CUSTOMIZE.md) and [FAQ.md](https://github.com/alshedivat/al-folio/blob/main/FAQ.md).
