#!/bin/sh
npm run build && scp -r ./dist/* lisper@47.98.184.198:/home/lisper/nft-base-front
