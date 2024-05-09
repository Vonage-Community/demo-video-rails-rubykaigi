#!/usr/bin/env bash
# exit on error
set -o errexit

export SITE_URL=$RENDER_EXTERNAL_URL

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate