Put your food photos here for the Feane site.

How images are matched:
- The site looks at each meal’s `keyword` in `fastfood.js`
- It converts the keyword into a “slug” (lowercase, non-alphanumeric -> `-`)
- Then it tries local filenames like:
  - assets/<slug>.jpg
  - assets/<slug>.jpeg
  - assets/<slug>.png
  - assets/<slug>.webp

Example:
- keyword: "gourmet burger"
- slug: "gourmet-burger"
- file: assets/gourmet-burger.jpg

If your filenames don’t match that scheme, tell me your exact filenames and I’ll wire a custom mapping.

