# Nirbhoy (নির্ভয়)

**নির্ভয়ে থাকুন — Be fearless.**

A bilingual (Bangla / English) support site for women in Bangladesh facing technology-facilitated gender-based violence (TFGBV): leaked or threatened images, deepfakes, hacked accounts, doxxing and harassment. Built for the DKC Digital Respect & Cohesion Fellowship 2026.

## What it does

- **Situation plans** — "What is happening to you?" leads to step-by-step plans (leak, deepfake, hacked account, doxxing, harassment, helping a friend) with platform report links and progress saved on the device.
- **Proof Vault** — saves evidence in the browser (IndexedDB) with SHA-256 fingerprints and a chain-of-custody log.
- **GD draft** — builds a police General Diary draft, optionally with the custody log attached.
- **Help directory** — 999, 109, PCSW and counselling lines with one-tap calling.
- **Safety first** — quick exit button (or double Esc), text-size control, no accounts, and no data leaves the device.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/bn`; English at `/en`).

## Stack

Next.js (App Router, static generation), TypeScript, hand-drawn SVG illustrations, no backend.

> Phone numbers and external links should be re-verified before any public launch. This site is not a substitute for police, legal or medical help.
