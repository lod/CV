#!/bin/sh
echo "This will take a minute"
/usr/bin/wkhtmltopdf --enable-javascript --javascript-delay 1000 --debug-javascript http://localhost:3000/ cv.pdf

