This is a basic react website which generates my curriculum vitae.

It is massively overdesigned for a single static web page, but writing code is great procrastination for writing a CV.

Designed to be viewed by a browser, mobile and printed output. The pdf is currently manually generated using Chrome, experiments such as `chromium --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw --print-to-pdf="chromium.pdf" "http://localhost:3000"` lead to incorrect margins and layout, or inconsistent with the browser which I choose to define as being correct.

Published at https://david.tulloh.id.au/cv/
