#!/usr/bin/env bash
echo "┏━━━ 📦 Building Workspace ━━━━━━━━━━━━━━━━━━━"

yarn lerna run build --concurrency $(ls -l packages | grep -c ^d)
