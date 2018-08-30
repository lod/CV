#!/bin/sh
echo "This will take a minute"
/usr/bin/wkhtmltopdf --enable-javascript --javascript-delay 1000 --debug-javascript --page-size A4 --margin-left 80mm --margin-right 30mm --image-dpi 300 --lowquality --image-quality 80 --no-outline --disable-internal-links --lowquality --no-images --disable-smart-shrinking http://localhost:3000/ cv.pdf

gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -dDetectDuplicateImages -dCompressFonts=true -r150 -dDownsampleColorImages=true -dColorImageResolution=150 -dNoOutputFonts -dMaxInlineImageSize=0 -sOutputFile=comp.pdf cv.pdf


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
	-sOutputFile=hard.pdf cv.pdf

