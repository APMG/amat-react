# v1.0.0 - Adding React Native markup options
--------

## Unofficial notes (WIP)

After floundering around for about a week trying to do my own thing, I decided that I should, in fact, just work off of Amat. I am dreadfully sorry for my hubris.

That being said, this codebase was very hard to understand and was crashing to begin with, so I decided to do some quick refactoring before I basically make another version of everything.

This will be v0.8.0, for the purposes of delineating what changes I made where.

1) Add a mark for `<code>` so that doesn't crash anymore.
2) Removed the "Default" atom, since it is a) not an atom in the same way that, say, a Paragraph or Video are, and b) all it did was call Traverse. This is one of those cases where breaking it out into its own thing made it seem more complicated.
3) Removed the `WrapInMarks` function. Marks are an actual thing we create here, and the WrapInMarks function would wrap node endpoints in all manner of other things as well. It was not an accurate name, and splitting it out made it harder to understand. Since the thing we do to everything else is simply 6 lines of code, I keep it in the Traverse component itself.
