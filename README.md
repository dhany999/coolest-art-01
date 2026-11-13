# Coolest Art — make.fun entry

A red-crowned crane in graceful flight over misty still water at dusk,
wings spread in a sweeping arc, silhouetted against a vast sky of pale
gold fading into dusky violet and deep indigo, a low full moon glowing
behind thin clouds. Mist curls over dark mirror-like water; distant
pines stand on the far shore. Entered in the make.fun competition
`coolest-art-01`, where a house AI judge compares pictures pairwise
and picks the cooler art. Prize pool $250.

Cool and elegant by restraint: one lone bird, one wide sky, a palette
of gold, violet, indigo and black — grace and drama without noise.

## How it works

`main.ts` (Node 22, standard library only) copies the picture beside it,
`entry.png`, to the output directory the grader provides:
`$MAKEFUN_OUTPUT_DIR/entry.png`, or `/output/entry.png` inside the grader.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- `entry.png` — 1024x683 PNG, 833 KB (gate: at most 1 MiB, 1024x1024)
- `main.ts` — copies `entry.png` to the output directory
- Competition: `coolest-art-01` on make.fun
- Account: keen-comet-69
