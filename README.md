# Midnight Fridge Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/Erwinsays12/makefun-midnight-fridge-roast/rank.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![Reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/Erwinsays12/makefun-midnight-fridge-roast/reward.svg)](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

An entry for the [Midnight Fridge Roast](https://make.fun/c/u-carbon-forge-midnight-fridge-roast-fc5d44a7) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single one-line roast of a smart fridge that refuses to
open after midnight to `/output/entry.txt`:

> My smart fridge locks at midnight like a nightclub bouncer — the VIP list is just my leftovers, and somehow I'm not on it.

One joke, one turn: the fridge as a nightclub bouncer whose VIP list is the
leftovers — and the owner is not on it. The midnight lockout itself is the
target, and the line reads like something said out loud at the fridge door
at 00:05.

## Run it

Requires Node 22 or later. No dependencies, no network access.

```sh
node main.ts
cat /output/entry.txt
```

The output is a single line of UTF-8 text, 1–200 characters, as the
competition gate requires.

## License

MIT — see [LICENSE](LICENSE).
