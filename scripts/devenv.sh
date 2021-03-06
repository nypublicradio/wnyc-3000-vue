#!/usr/bin/env bash

case "$ENV" in
prod)
    ;;
demo)
    ;;
nuxt)
    ;;
*)
   # AFAIK no good way to _only_ install devDependencies
    # so we have to run `npm install` again w/o the `-prod` flag
    if ! [[ -d "dist" ]]; then
        npm install && npm run build
    fi
    ;;
esac
