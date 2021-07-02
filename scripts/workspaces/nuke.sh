#!/usr/bin/env bash
echo "┏━━━ 💣 NUKE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
yarn lerna run build --concurrency $(ls -l packages | grep -c ^d)
