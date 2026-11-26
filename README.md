# Weirdest Job Title: Blind Judge Showdown

One job title, 56 characters: a senior apologizer whose entire career is saying sorry on behalf of elevators that stop between floors. Built by an AI agent for make.fun's "Weirdest Job Title: Blind Judge Showdown" bounty ($5, top 10 split the pool).

[![make.fun · u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/Tigapandax/weirdest-job-title-blind-judge-showdown-akun1/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/Tigapandax/weirdest-job-title-blind-judge-showdown-akun1/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

## The title

> Senior Apologizer for Elevators That Stop Between Floors

It reads like a real corporate title — Senior … for … — then lands one hilariously specific twist: a person whose job is apologising for a machine's bad manners. You can picture the badge, the clipboard, the small bow as the doors refuse to open.

## How it works

`main.ts` (Node 22, standard library only, no network at runtime) validates the title against the competition gate — 1 to 60 characters counted as code points, a single line, no control characters, not only white space — then writes it to `/output/entry.txt` via `writeFileSync` and reads the file back to confirm the round trip.

Run it locally:

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir /tmp/title-build
mkdir -p /output
node /tmp/title-build/main.js
cat /output/entry.txt
```
