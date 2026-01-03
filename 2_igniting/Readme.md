What is a bundler? We need to convert React code to index.html, css and js code which browser understand. This is done via bundlers

package.json is a configuration file.
We have bundlers like vite, parcel which compress the code. It packages the app so it can be shipped to production

There are two types of Dependencies.

- Dev Dependency: It is required is development phase only. [Bunders are required during dev only]
- Normal Dependencies: Required in production too.

"parcel": "^2.16.3"
What is the sign ^ carrot, or ~. Difference between carrot and tilde.

Carrot means that if new version comes in future, it will automatically upgrade to the latest version.

- Major (1.x.x): Breaking changes.
- Minor (x.1.x): New features (backward compatible).
- Patch (x.x.1): Bug fixes (backward compatible).

^ default and most common, means allow minor and patches updates
~ means, allow patches only, more safe. But restrict to use features.

~2.8.3 means >=2.8.3 and <2.9.0
^2.8.3 means >=2.8.3 and <3.0.0

What is package-lock.json?
It creates the record of exact version.

npm list to check which exact package version is installed.

npx parcel index.html # parcel will create a server, build application and run the code.

There is a thing called Hot Module Reload, the idea is there is a watcher algorithm which watch the changes in
any file and if the file is change, rebuild the code and then server the updated code.

Tree Shaking is removing unnecessary code. A bunder when building the code will only keep the code needed
froom other library.

In package.json, we can give an option browserslist: [ "last 2 chrome versions", "last 2 firefox versions]

---

const heading = React.createElement(arg1, arg2, arg3)

- arg1 -> element Name
- arg2: {} -> attribute
- arg3: Value inside the element.

wll return an object which will be stored in heading.

---

JSX is like html so easy to write in context of frontend. So, preffered.
JSX is then converted to React.createElement like this via Babel which is called transcompilation. Which then
is converted to html which browser can render.

```
React.createElement() → JavaScript object
ReactDOM → turns it into real HTML elements
Browser → renders it on screen
```

React Component:

API:
https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING

Why key={unique_value} given to react component? [Better explanation down]
When multiple react components render at same level, let say they are siblings. To react, all the siblings are alike even thought data is different. Suppose, now a sibling is deleted, react cannot say which is deleted, so it renders all the sibling and the one which is deleted will not display. This will cause extra renders. If we add a unique key, and react don't see it. It will only remove the component with that key.

Why key={unique_value} is used in React?

When multiple React components are rendered as siblings, React needs a way to identify each component uniquely.
Without a key, React cannot correctly match components when items are added [and where to add] or removed, which may cause unnecessary updates or bugs.

A unique key allows React to:

- track each components identity
- know exactly which component is removed or updated
- update only the changed component efficiently

React says don't use index as the key value.
https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
