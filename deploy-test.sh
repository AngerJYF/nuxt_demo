#!/bin/bash

npm run generate

# cszh001
rsync -av ./dist/ www@192.168.1.218:/data/work/officaltest/

