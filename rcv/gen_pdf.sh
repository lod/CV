#!/bin/sh
echo "This will take a minute"
/usr/bin/wkhtmltopdf --enable-javascript --javascript-delay 1000 --debug-javascript --page-size A4 --margin-left 80mm --margin-right 30mm http://localhost:3000/ cv.pdf

