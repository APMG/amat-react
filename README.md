# @apmg/amat

This component is able to take in a ProseMirror endpoint and compose the correct HTML from it, exporting it as a React component named `<Body />`.

See the example in  Body.test.js to learn how to override a component with a
custom component.

This is a test - it is only a test. If this was an actual emergency ...

I ran into to this error https://reactjs.org/warnings/invalid-hook-call-warning.html when trying to do local development using yarn link. 

In particular they say on that page:

"This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy."

The problem is yarn link doesn't work this way. Instead you do: 

`yarn add link:/path/to/local/folder` installs a symlink to a package that is on your local file system. This is useful to develop related packages in monorepo environments.

So the problem was I had news and amat-react as sibling directories inside my `~/code` directory. so from the news root directory I ran `yarn add link:../amat-react/` to get around this. 
