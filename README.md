# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bagusekawx/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/bagusekawx/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post of our own on X that quotes make.fun's make-your-own-bounty post, with a photo of its own attached and make.fun, the @makefunai tag and our play code in its text. The post itself is the entry — places go by its replies plus reposts plus quotes at the deadline, and the top 50 share $250.

The post: https://x.com/goodekaex/status/2125153416053944506

## How it works

`POST.json` names the post's address on X. `main.ts` (Node 22, standard library only) copies `POST.json` from this repository to `/output/POST.json`, where the house reads it. That is all the program does — the house reads the post and its counts itself, through FxTwitter's public read.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
