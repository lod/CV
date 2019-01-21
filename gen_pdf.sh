#!/bin/sh
echo "This will take a minute"
/usr/bin/wkhtmltopdf --enable-javascript --javascript-delay 1000 --debug-javascript --page-size A4 --margin-left 80mm --margin-right 30mm --image-dpi 300 --lowquality --image-quality 80 --no-outline --disable-internal-links --lowquality --no-images --disable-smart-shrinking http://localhost:3000/ wk_capture.pdf

gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -dDetectDuplicateImages -dCompressFonts=true -r150 -dDownsampleColorImages=true -dColorImageResolution=150 -dNoOutputFonts -dMaxInlineImageSize=0 -sOutputFile=clean.14.pdf wk_capture.pdf


gs  -q -dNOPAUSE -dBATCH -dSAFER \
	-sDEVICE=pdfwrite \
	-dCompatibilityLevel=1.3 \
	-dPDFSETTINGS=/screen \
	-dEmbedAllFonts=true \
	-dSubsetFonts=true \
	-dColorImageDownsampleType=/Bicubic \
	-dColorImageResolution=72 \
	-dGrayImageDownsampleType=/Bicubic \
	-dGrayImageResolution=72 \
	-dMonoImageDownsampleType=/Bicubic \
	-dMonoImageResolution=72 \
	-sOutputFile=clean.13.pdf wk_capture.pdf

convert -density 150 wk_capture.pdf -quality 90 wk.png
convert wk-0.png wk-1.png image_merge.pdf
ps2pdf image_merge.pdf cv.pdf
