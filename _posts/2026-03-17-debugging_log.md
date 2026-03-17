---
layout: post
title: Debugging Log
date: 2026-03-17
description: A running log of debugging sessions, to update on my stupidity
tags: debugging
categories: dev-log
related_posts: false
toc:
  sidebar: left
---

* TOC
{:toc}

---

## #001 -- 2026-03-16 -- Claude Code Login Blocked by Outdated Clash-verge

**Symptom:** Could not log in to Claude Code. Every attempt returned an "unsupported country" error, despite routing traffic through a US VPS.

**Root cause:** Clash-verge v1.7 was too old. Its proxy handling introduced ~1000 ms of latency per request, which apparently caused geo-detection or session negotiation to fail on Anthropic's side.

**Fix:** Updated Clash-verge to the latest version. Latency dropped from ~1000 ms to ~200 ms, and Claude Code login succeeded immediately.

**Takeaway:** When a proxy appears to work for normal browsing but fails on latency-sensitive auth flows, check the proxy client version first.

## #002 -- 2026-MM-DD -- Short Title

**Symptom:** ...
**Root cause:** ...
**Fix:** ...
**Takeaway:** ...
