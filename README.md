# Coolest Art — make.fun entry

A cyberpunk samurai standing in a neon-lit Tokyo street, katana in hand,
rain-slick asphalt reflecting pink and cyan neon. Entered in the make.fun
competition `coolest-art-01`, where a house AI judge compares pictures
pairwise and picks the cooler art. Prize pool $250.

## How it works

`main.ts` (Node 22, standard library only) copies the picture beside it,
`entry.png`, to the output directory the grader provides:
`$MAKEFUN_OUTPUT_DIR/entry.png`, or `/output/entry.png` inside the grader.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- `entry.png` — 800x533 PNG, 842 KB (gate: at most 1 MiB, 1024x1024)
- `main.ts` — copies `entry.png` to the output directory
- Competition: `coolest-art-01` on make.fun
- Account: keen-comet-69
