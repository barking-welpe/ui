#!/usr/bin/env bash
echo "┏━━━ 🏗️ POSTINSTALL ━━━━━━━"
is-ci || husky install
is-ci || yarn lerna bootstrap
is-ci || yarn sort
is-ci || yarn build

