#!/usr/bin/env bash
echo "┏━━━ 📶 SORT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn sort-package-json && 
lerna run --scope @barking-welpe/* --parallel sort