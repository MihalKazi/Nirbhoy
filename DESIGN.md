---
name: Lavender Safe Room (Digital Khichuri)
description: A warm, illustrated safe room in lavender; white rounded cards on a lavender-white ground, violet for action, green only for done, red only for danger.
colors:
  bg: "#faf7fd"
  paper: "#ffffff"
  lav: "#efe8fa"
  lav-line: "#e2d8f3"
  line: "#ebe5f3"
  ink: "#2a1f3d"
  ink-soft: "#5b5170"
  placeholder: "#8d84a0"
  violet: "#6b46c1"
  violet-deep: "#553399"
  violet-soft: "#ece4fb"
  shadow-violet: "#543399"
  peach: "#f7d9cc"
  peach-soft: "#fdf1ec"
  peach-deep: "#c2573a"
  peach-ink: "#9a4a33"
  green: "#2e7d5b"
  green-soft: "#e3f3ea"
  red: "#c62f3f"
  red-deep: "#a8242f"
  red-soft: "#fdeaec"
  red-line: "#f6c9cf"
  print-rule: "#cccccc"
  illo-arch: "#e9e0f7"
  illo-arch-in: "#f4effc"
  illo-glow-warm: "#fff6ef"
  illo-glow-lav: "#f6effc"
  illo-dots: "#d3c3ef"
  illo-leaf: "#b9a3e3"
  illo-spark: "#fff4ec"
  illo-skin: "#a86b4c"
  illo-skin-shade: "#8e5a3f"
  illo-hair: "#2b1d2b"
  illo-kameez: "#7c5bd0"
  illo-kameez-shade: "#6a4bbf"
  illo-salwar: "#4c3a78"
  illo-orna: "#f2a7b5"
  illo-orna-back: "#e38c9f"
  illo-teal: "#3f8f8a"
  illo-pati: "#ecdcb8"
  illo-pati-line: "#d9c394"
  illo-pati-border: "#b8453c"
  illo-screen: "#cdbcf2"
typography:
  display:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  display-plan:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 5.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  row-name:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.35
  control:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
  hint:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
  tag:
    fontFamily: "Hind Siliguri, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
  mono:
    fontFamily: "Red Hat Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  mono-draft:
    fontFamily: "Red Hat Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  focus: "6px"
  check: "8px"
  sm: "14px"
  md: "20px"
  pill: "999px"
  circle: "50%"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "40px"
  xxxl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.violet-deep}"
  button-line:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.lav}"
  button-emergency:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-emergency-hover:
    backgroundColor: "{colors.red-deep}"
  tool:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.hint}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "44px"
  tool-exit:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "44px"
  row-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.row-name}"
    rounded: "{rounded.md}"
    padding: "16px 16px 16px 14px"
  row-card-emergency:
    backgroundColor: "{colors.red-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "16px 16px 16px 14px"
  row-icon:
    backgroundColor: "{colors.violet-soft}"
    textColor: "{colors.violet-deep}"
    rounded: "{rounded.circle}"
    size: "46px"
  panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "clamp(18px, 4vw, 32px)"
  tool-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "56px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.hint}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "42px"
  chip-selected:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.paper}"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "50px"
  input-focus:
    backgroundColor: "{colors.paper}"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "50px"
  nav-link-current:
    backgroundColor: "{colors.violet-soft}"
    textColor: "{colors.violet-deep}"
  call-999:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "48px"
  call-109:
    backgroundColor: "{colors.violet-soft}"
    textColor: "{colors.violet-deep}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "48px"
  reassure:
    backgroundColor: "{colors.peach-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.hint}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  tag:
    backgroundColor: "{colors.peach-soft}"
    textColor: "{colors.peach-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
---

# Design System: Lavender Safe Room (Digital Khichuri)

## Overview

**Creative North Star: "Lavender Safe Room"**

A warm, illustrated safe room drawn in lavender. The ground is a lavender-white wash; every surface on it is a white card with soft 20px corners, a lavender hairline and a faint violet-tinted shadow. The one thing that makes the room feel inhabited is drawing: hand-authored flat SVG scenes of faceless Bangladeshi women (warm brown skin, salwar kameez with orna, one in hijab) seated under an arch of light, with an alpana dot border tracing the arch, a shital pati mat underfoot, leaves at the edges and small four-point sparks standing in for light. Faces are left blank on purpose so any woman can see herself.

The interface around the drawings speaks softly and plainly. Violet is the working colour for anything she can do; peach carries warmth (the reassurance pill, the "women only" tag); green appears only when a step is done; red is held back for danger. Controls are pills, rows are cards, headings are bold but modest, and nothing is uppercased, condensed, taped, striped or boxed. Text size is hers to change: the whole rem scale rides a single `--scale` multiplier on `html` (1, 1.15, 1.3), persisted on the device.

This replaces the earlier "Morning Tea Garden" sage world, which the user rejected as too plain. Nothing of its mist-green palette, square-ish 12-16px radii or leaf-green action colour survives.

**Key Characteristics:**
- Lavender-white ground, white 20px cards with a 1px lavender hairline and a violet-tinted soft shadow.
- Violet for action, peach for warmth, green only for done, red only for danger and exit.
- Pill-shaped buttons, chips, nav links, call buttons and badges; circles for icons and status.
- Flat inline-SVG illustrations: faceless women, no outlines, glow and sparks for light, alpana dots, shital pati.
- One family (Hind Siliguri) in sentence case; Red Hat Mono for data only.
- User-controlled text scale (1 / 1.15 / 1.3) applied to the root font size.

## Colors

A lavender family carries the whole room; violet acts, peach warms, green confirms, red warns, and the illustrations add skin, cloth and mat tones from their own fixed palette.

### Primary
- **Action Violet** (violet): links, primary buttons, selected chips, checked checkboxes, the progress meter fill, the 1-2-3 step numerals, the brand mark, focus outlines, caret and native `accent-color`.
- **Deep Violet** (violet-deep): hover state of primary buttons and links; text on violet-soft surfaces (current nav link, row icon glyphs, row data pill, 109 call).
- **Violet Mist** (violet-soft): the current-page nav fill, row icon circles, the row data pill, the in-progress status ring fill, text selection, the input focus halo, the resting 109 call.
- **Shadow Violet** (shadow-violet): the tint inside the elevated shadow and the foot-line's upward shadow, always at low alpha (0.28-0.3), never as a fill.

### Secondary (warmth)
- **Peach** (peach): shared with the illustrations as the orna of the friend in TogetherArt; the warm counterweight to lavender.
- **Peach Cream** (peach-soft): the home reassurance pill and the directory "women only" tag.
- **Terracotta Heart** (peach-deep): the heart icon inside the reassurance pill only.
- **Peach Ink** (peach-ink): tag text on peach-soft.

### Tertiary (status)
- **Done Green** (green) and **Green Mist** (green-soft): the filled "done" status dot and the "verified" pill. Nothing else.
- **Danger Red** (red), **Red Deep** (red-deep), **Red Mist** (red-soft), **Red Line** (red-line): the emergency row (red-soft fill, red-line border, red icon), 999 calls, the quick-exit tool, emergency buttons, the urgent banner, the failed-verification pill, and the "what not to do" lists (red-soft bars with a red x). The direction contract says "red only for emergency"; the build also uses the red family for prohibitions and failed verification, and this file records the build.

### Neutral
- **Lavender White** (bg): page ground, the `theme-color`, input resting fill, draft block fill, and the illustrations' fade-out.
- **Paper** (paper): cards, panels, the desktop rail, the menu panel, the foot line, tool buttons, a focused input, and white text on violet/red/green.
- **Lavender** (lav): hover fill on tools, nav links, line buttons, chips and tool links; note boxes; the platforms summary bar; the meter track; disabled tools.
- **Lavender Line** (lav-line): the stronger hairline on line buttons, chips, inputs, empty status rings, checkboxes, and a hovered or open card.
- **Hairline** (line): the default 1px border on cards, panels, tools, the rail, top bar and foot line, and row dividers.
- **Plum Ink** (ink): all headings and body text; the illustrations' phone.
- **Soft Plum** (ink-soft): lede, hints, captions, mono data, icons at rest, quiet buttons.
- **Placeholder** (placeholder): input and textarea placeholder text only.
- **Print Rule** (print-rule): the single border given to panels and drafts in print, where shadows are removed.

### Illustration palette
The drawings use their own fixed palette object (`C` in `components/Illustrations.tsx`), shared by both scenes. Arch and light: illo-arch, illo-arch-in, illo-glow-warm and illo-glow-lav (radial glow stops), illo-dots (alpana dot border), illo-leaf, illo-spark. Figures: illo-skin and illo-skin-shade (neck, set behind the face), illo-hair, illo-kameez and illo-kameez-shade, illo-salwar (also the hijab), illo-orna and illo-orna-back, illo-teal (the friend's kameez), plus peach. Objects: illo-pati, illo-pati-line, illo-pati-border (the mat's red edge), illo-screen. The illustrations also reuse bg and ink.

### Named Rules
**The Violet-Acts Rule.** If she can press it, it is violet (or a white pill that fills lavender on hover). Violet is never decoration on non-interactive text.

**The Green-Means-Done Rule.** Green appears only on a completed status dot and a verified result. It is never an action colour and never decoration.

**The Red-Is-Danger Rule.** The red family marks danger, exit, prohibitions and failure only. It never marks a normal action, a heading or an ornament.

**The Shape-Before-Colour Rule.** Status is never colour alone: an empty ring (not started), a dashed violet ring (in progress), a filled green circle with a white tick (done).

## Typography

**Display Font:** Hind Siliguri (with system-ui, sans-serif)
**Body Font:** Hind Siliguri (with system-ui, sans-serif)
**Label/Mono Font:** Red Hat Mono (with ui-monospace, monospace), data only

**Character:** One warm, rounded Bangla-and-Latin family at normal width and sentence case carries every role; weight (400 body, 600 labels, 700 headings and controls) does the hierarchy work. Red Hat Mono is a quiet technical voice for hashes, drafts and small tabular captions.

### Hierarchy
- **Display** (700, `clamp(1.875rem, 6vw, 2.75rem)`, 1.2, -0.01em): the page's one question or title.
- **Display, plan** (700, `clamp(1.75rem, 5.5vw, 2.5rem)`, max 26ch): plan titles, which run longer.
- **Headline** (700, 1.375rem, 1.2): section headings, 40px above and 14px below.
- **Lede** (400, 1.125rem, soft plum, max 52ch): the line under a page title.
- **Title** (700, 1.125rem): h3, home section titles, the "do not" heading on plans.
- **Body** (400, 1rem, 1.6, max 62ch): running text.
- **Row name** (700, 1.0625rem, 1.35): the name inside every card row; also the brand name and phone-number pills.
- **Control** (700, 1rem): button labels; inputs use the same size at 400.
- **Hint** (600, 0.9375rem): row hints (at 400), tools, chips, the reassurance pill, field labels, the 1-2-3 strip.
- **Label** (600, 0.875rem, soft plum): live status lines ("2 / 5 steps done", "The shelf is empty") and the back link above a plan title; field hints at 400.
- **Caption** (600, 0.8125rem): row data pills, the brand strapline, foot-line text, step numerals (700).
- **Tag** (700, 0.75rem): the peach "women only" badge.
- **Mono** (400, 0.8125rem, tabular): hashes, privacy and help captions. **Mono draft** (400, 0.875rem, 1.6): the generated GD draft block.
- **Call digits** (700, 1.125rem, Hind Siliguri with tabular numerals): 999 and 109.

### Named Rules
**The Sentence-Case Rule.** Nothing is uppercased, letter-spaced or width-condensed. The `wdth` axis is loaded but unused.

**The Mono-Is-Data Rule.** Red Hat Mono sets hashes, the GD draft and small technical captions only; never a name, heading, button or phone number.

**The Her-Scale Rule.** Every size is in rem so the root `--scale` (1, 1.15, 1.3) enlarges the whole interface together. Never set type in px.

## Layout

Phone-first single column. A sticky, translucent (90% bg, 12px blur) top bar holds the brand, a Menu disclosure (text size first, then nav), language and quick exit; a fixed white foot line holds 999 and 109. Page padding is `16px 16px 116px` on phones, leaving room for the foot line.

From 900px the top bar and foot line hide and a 240px sticky white rail takes over (brand, nav pills, then a foot with the 999/109 call pair, text size, language and quick exit); page padding becomes `40px 56px 64px`, max width 1160px. From 760px the home hero splits into text and illustration (1.2fr / 1fr) and the 1-2-3 strip moves up into the hero; from 1100px home becomes situations (2fr) beside a tools aside (1fr). Directory lists pair into two columns from 900px.

Rhythm runs on 4 / 8 / 12 / 16 / 24 / 32 / 40 / 56px with 10, 14, 18 and 22px used inside components. Card lists gap 12px; button rows gap 10px. Touch targets: tools 44px, nav links and inputs 50px, buttons 52px, tool links 56px.

## Elevation & Depth

A soft hybrid: cards sit on the lavender ground with a hairline and a whisper of shadow; interaction lifts them with a longer violet-tinted shadow and a 2px rise. Shadows are always blurred, plum or violet tinted, never black and never offset.

### Shadow Vocabulary
- **Resting** (`box-shadow: 0 1px 2px rgba(42, 31, 61, 0.06)`): cards, panels, tool links at rest.
- **Lifted** (`box-shadow: 0 1px 2px rgba(42, 31, 61, 0.05), 0 10px 24px -14px rgba(84, 51, 153, 0.28)`): hovered or open cards, the menu panel.
- **Foot line** (`box-shadow: 0 -10px 24px -16px rgba(84, 51, 153, 0.3)`): the fixed phone call bar, cast upward.

### Named Rules
**The Soft-Lift Rule.** Depth answers interaction: hover or open raises a card 2px and swaps resting for lifted. No hard offset shadows, no stacked borders.

## Shapes

Round everywhere. Cards, panels, the menu panel and the urgent banner use 20px; nested or secondary containers (inputs, tool links, notes, draft blocks, platform lists, don't bars) use 14px. Every button, chip, nav link, tool, call button, tag, reassurance pill and meter is a full pill. Icon wells, status dots, step numerals and the brand mark are circles. Checkboxes are 26px squares at 8px; focus outlines round to 6px. Borders are a single 1px hairline; status rings and checkboxes use 2px.

The illustrations bring the one non-rectangular silhouette: a round-topped arch with an alpana dot border. Figures are flat filled shapes with no outlines; the only strokes are limbs drawn as round-capped thick lines and the dotted arch.

## Components

### Buttons
Soft, confident pills.
- **Shape:** full pill (999px), 52px tall, `0 24px`, 700 at 1rem, optional 20px icon with 10px gap.
- **Primary:** violet fill, white text; hover deep violet; active drops 1px; disabled 50% opacity.
- **Line:** white fill, plum text, lavender-line border; hover lavender.
- **Emergency:** red fill, white text; hover red-deep. Emergency calls only.
- **Quiet:** borderless underlined soft-plum text, 44px tall, for Undo and Clear progress.
- **Tool:** 44px white pill with hairline, 600 at 0.9375rem; hover lavender; the exit tool is red.

### Chips
- **Style:** 42px white pill, lavender-line border, 600 at 0.9375rem.
- **State:** pressed fills violet with white text; unpressed hover fills lavender.

### Cards / Containers
- **Corner Style:** 20px (cards, panels), 14px (tool links, notes, inputs, drafts).
- **Background:** paper on bg; notes are lavender; urgent and emergency surfaces are red-soft.
- **Shadow Strategy:** resting, lifting on hover or open (see Elevation).
- **Border:** 1px hairline, lavender-line on hover or open, red-line on emergency.
- **Internal Padding:** rows `16px 16px 16px 14px`; panels `clamp(18px, 4vw, 32px)`; notes `14px 18px`.

### Inputs / Fields
- **Style:** bg fill, lavender-line border, 14px radius, 50px minimum (textarea 130px), 1rem text, placeholder colour for hints.
- **Focus:** violet border, 3px violet-soft halo, fill turns white.
- **Checkbox:** 26px, 8px radius, 2px lavender-line; checked fills violet with a white tick that scales in.

### Navigation
- **Links:** 50px pills, 600 weight, soft-plum icon; hover lavender; current page violet-soft with deep-violet text and a violet icon.
- **Phone:** sticky blurred top bar; the Menu opens a 20px white panel spanning the header with text size first.
- **Desktop:** 240px white rail with a hairline edge; the foot carries a 999/109 call pair, text size, language and quick exit.

### Row (signature)
Every situation, plan step, proof item and directory entry is a card row: a 46px violet-soft circle with a deep-violet icon (or a status dot), the name and hint, an optional violet-soft data pill (hidden under 420px) and a chevron. Expandable rows open their interior with a 0.35s `grid-template-rows` transition. The emergency row is always open, red-soft with a red-line border and a white icon circle holding a red phone.

### Status Dot (signature)
28px circle. Not started: 2px lavender-line ring on white. In progress: dashed violet ring on violet-soft. Done: filled green with a 15px white tick.

### Call pair
999 is a red pill; 109 is a violet-soft pill that fills violet on hover. Both are 48px, 700 at 1.125rem with tabular numerals. They live in the rail foot on desktop and the fixed foot line on phones.

### Illustrations (signature)
`HeroArt` (home; 170px on phones, up to 360px beside the hero text) and `TogetherArt` (stories and the friend plan, up to 260px) are inline SVGs with a `role="img"` label in both languages. Each one uses an arch or dome of glow, an alpana dot border (round caps, `0 11` dash), sparks for light, lavender leaves at the base corners, and a bottom fade into bg. Figures are faceless and outline-free. They are hidden in print.

## Do's and Don'ts

### Do:
- **Do** set every page on bg and every surface on paper with a 1px hairline and the resting shadow; round cards at 20px and inner containers at 14px.
- **Do** make every button, chip, nav link, call and badge a full pill (999px).
- **Do** use violet for anything she can act on, green only for done, and the red family only for danger, exit, prohibition and failure.
- **Do** carry status on shape (empty ring, dashed ring, filled circle with tick) before colour.
- **Do** draw new illustrations from the `C` palette: flat fills, no outlines, faceless figures, light as glow and sparks, the arch with alpana dots.
- **Do** size type in rem so the 1 / 1.15 / 1.3 text-size control scales everything.

### Don't:
- **Don't** bring back the rejected worlds: sage tea-garden greens, orange-and-black, stripes, cardboard, heavy borders or condensed caps.
- **Don't** use black or hard offset shadows; shadows are blurred and plum or violet tinted.
- **Don't** give illustrated figures faces, outlines, or stock-photo realism, and don't substitute raster images or icon glyphs for drawn scenes.
- **Don't** use red, or green, as a general emphasis or decoration colour.
- **Don't** put a decorative kicker above a heading; the small label style is only for live status lines and the back link.
- **Don't** set names, headings, buttons or phone numbers in Red Hat Mono.

## Known gaps

- Illustrations appear only on home (HeroArt), stories and the friend plan (TogetherArt). The other situation plans have no vignettes, and the proof shelf's empty state has no art, only a status line.
- The arch motif lives only inside the illustrations; no UI component (cards, panels, hero frame) uses the arch silhouette yet.
