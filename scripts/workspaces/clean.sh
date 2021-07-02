#!/usr/bin/env bash
echo "┏━━━ 🧹 CLEAN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn lerna run clean --concurrency $(ls -l packages | grep -c ^d)
