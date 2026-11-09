Peak by MD site build

Upload this whole folder to any static host (Netlify Drop: app.netlify.com/drop, or your server root). Keep the folder structure as is.

Pages
  index.html                    Homepage
  aesthetics.html               Aesthetics (includes the interactive layers section)
  longevity.html                Longevity Medicine
  foundational-assessment.html  Foundational Assessment
  gut-health.html               Gut Health & Nutrition
  memberships.html              Memberships
  about.html                    About
  service.html?p=<slug>         All treatment and service pages (e.g. service.html?p=neurotoxins)
  peptide-library.html          Peptide Library

Notes
  Each page includes a static <noscript> copy of its content plus a title, description and canonical link in <head>, so crawlers that don't run JavaScript can read it. Regenerate after content edits.
  sitemap.xml and robots.txt assume https://peakbymd.com. Update if the domain differs.
  Pages must be served over http(s), not opened from disk, so the images in image-slots.state.json load.
  This is the design build. For WordPress, use the WPBakery kit.
