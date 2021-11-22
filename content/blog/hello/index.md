---
thumbnail: minimalist-wallpaper.jpg
title: hello
date: 2021-11-21T13:03:50.835Z
description: dwdad
---


Firstly, a small digression. The easiest way to make a decision is to look back at history. Lets take a trip down nostalgia lane. Back in the early 2000’s there were two UI frameworks that JAVA had. One was **AWT**, which was a way to build UIs for multiple Operating systems while still maintaining the look and feel of the OS.\
Each OS would have its own components which were mapped back to the AWT components created using the AWT framework.\
Java then decided to come up with its own rendering component library called **Swing**. What Swing did was handle its own rendering instead\
of relying on the underlying OS components. Swing won the battle and soon AWT disappeared off the face of the earth.

```

```

React Native vs Flutter

*How is this relevant? Why am I digressing?*If you have been following the React Native vs Flutter debate, this should be familiar to you. React Native components gets transpiled down to either IOS or android components whereas Flutter renders its own UI using its own rendering engine based on a 2d rendering engine called SKIA.(Similar to how a game engine does its own rendering).It still relies on Material design (Android style) Widgets and Cupertino (Apple Style)\
widgets to imitate the native platform pixel perfect look and feel. If we look back at the Swing vs AWT battle as reference, Flutter will probably win here.

***Round one***: Flutter.

I digress again, but traditionally OS based development has been widget based as compared to browser based development which has relied on being template and DSL based. Although there have been exceptions like WPF /Silverlight which have tried to bring the same templating mechanism (XAML) to the Operating System, they have fallen short multiple times.

*What about developers needed?*React Native had a brilliant strategy of using React under the hood which allows you to transfer your existing React developer skillsets .Flutter uses Dart which is a new age language which has a steeper learning curve, although being a better language for UI development. \[6]

In times of the “great war for talent” and “the great resignation”\[2], this is more relevant than ever when you cannot rely on hiring the best developers and keeping them occupied forever. It makes more sense than ever to keep your tech stack lean and not scattered across different technologies.

***Round two***: React Native

*What about a common codebase across mobile and web?*Aha, the Holy grail. There are two ways of looking at this. React Native started looking at leveraging React developer skillsets for mobile development. There are easy ways to maintain a single codebase for state management and behavior while abstracting the Screens and components. \[5]

Microsoft has also released a great project which allows you to use React Native for the web. \[4]

Flutter on the other hand transpiles down to JS for the web. Any transpilation is bad because of it being a leaky abstraction\[3].(Remember GWT).My corollary to the law of leaky abstractions is that you should never pick a language that transpiles into a different language.

Flutter is also possibly giving the option to compile down to web assembly (WASM) allowing for a common codebase across mobile and web. WASM will give the option to support languages other than javascript\
in the future. As of this writing, WASM still suffers from SEO and performance issues and is not production ready for the web. Apple is committed to support WASM in safari. If Apple had been considerate enough to offer full support for PWA, we would never have to choose.

Although enough has been written about React Native and it’s JS bridge causing a lot of performance issues, I believe this will be solved soon \[1]

***Round three***: React Native. Maybe Flutter for 2022

*What about Popularity?*As of 11th November,

***Github***\
Flutter **132K stars**\
React Native **99.2K stars**

***Stackoverflow***:

![](https://miro.medium.com/max/30/0*v4pL25-eJJQ2Kn9j.png?q=20)

![](https://miro.medium.com/max/700/0*v4pL25-eJJQ2Kn9j.png)

Also Google Trends rates Flutter higher than React Native. This could be because of the newness of the framework

![](https://miro.medium.com/max/30/1*Q1K-Qs8j_4UcqHaXdhlEbw.png?q=20)

![](https://miro.medium.com/max/700/1*Q1K-Qs8j_4UcqHaXdhlEbw.png)

***Round Four***: No Clear Winner.

*What about Developer Productivity?*

There are two ways to look at this.

JS is entrenched. Dart is a newcomer although a better language. Its faster to get off the ground with react Native with our React skillsets.

Once you ignore the initial takeoff time, Flutter is faster to market as compared to React Native. Although this is debatable, I am giving flutter the upper hand because of possible performance optimization required for each platform.

All in all, as Flutter has a lot of the developer friendliness built into the framework itself (Deployment, CI/CD, rich component library, debugging, IDE support), its definitely a winner here. Although third party components like Expo, react native paper and fastlane do ease these parts a lot for React Native.

***Round five*** : Flutter by a hair’s breath.

***Final decision:***Choose React Native if you want to utilize your existing developer skillsets. In the current scenario of the war for talent, this is truer than ever when you can’t always attract the best talent.

Choose Flutter if you want to be mobile first and don’t mind developing twice one for mobile and one for the web.(for now) and you are not strapped for developers or cash. It is shaping up to be the choice of a singular frontend framework for the future.

\[1] <https://dev.to/wjimmycook/how-the-react-native-bridge-works-and-how-it-will-change-in-the-near-future-4ekc>

\[2] <https://www.forbesindia.com/article/news-by-numbers/what-is-fuelling-the-great-resignation-in-america/71443/1>

\[3] <https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/>

\[4] <https://microsoft.github.io/react-native-windows/>

\[5] <https://blog.bitsrc.io/learn-to-share-code-between-react-native-and-react-js-14065ce5b0c3>

\[6] I am a huge fan of Dart. Although react native edges out in the current blog, Dart is way better than Javascript. Below is one of the best introductions to Dart.

<https://www.freecodecamp.org/news/https-medium-com-rahman-sameeha-whats-flutter-an-intro-to-dart-6fc42ba7c4a3/>

## [Shekhar](https://medium.com/@shekhar.siva2609?source=post_sidebar--------------------------post_sidebar--------------)

Pragmatic Data Scientist, Software Architect , Geek, Hacker, Father, Hardware Tinkerer, Eternal Pessimist,

Follow

[](https://medium.com/m/signin?actionUrl=%2F_%2Fapi%2Fsubscriptions%2Fnewsletters%2F6294a2ff0642&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40shekhar.siva2609%2Fflutter-vs-react-native-the-last-word-999b4ca7c4aa&newsletterV3=f7a722c53932&newsletterV3Id=6294a2ff0642&user=Shekhar&userId=f7a722c53932&source=post_sidebar-----999b4ca7c4aa---------------------subscribe_user--------------)

SHEKHAR FOLLOWS

* [![The Vadapav guy](https://miro.medium.com/fit/c/20/20/1*gwBlpj5EiAPjd7kdi3GBsA.png)](https://medium.com/@tweetingsigma?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)

  #### [The Vadapav guy](https://medium.com/@tweetingsigma?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)
* [![Abhijit Thakoor](https://miro.medium.com/fit/c/20/20/0*4aJgx2wuX5Zk2XSB.)](https://medium.com/@abhijitthakoor?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)

  #### [Abhijit Thakoor](https://medium.com/@abhijitthakoor?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)
* [![Người Dưng](https://miro.medium.com/fit/c/20/20/0*xCuGzLkZCsJ3gu6M)](https://medium.com/@lethinhutuyet.08071992?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)

  #### [Người Dưng](https://medium.com/@lethinhutuyet.08071992?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)
* [![Suja Vaidyanathan](https://miro.medium.com/fit/c/20/20/0*WiGiejuzCIWOs_9b.)](https://medium.com/@sujavaidyanathan?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)

  #### [Suja Vaidyanathan](https://medium.com/@sujavaidyanathan?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)

[See all (5)](https://medium.com/@shekhar.siva2609/following?source=blogrolls_sidebar-----999b4ca7c4aa-----------------------------------)

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fvote%2Fp%2F999b4ca7c4aa&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40shekhar.siva2609%2Fflutter-vs-react-native-the-last-word-999b4ca7c4aa&user=Shekhar&userId=f7a722c53932&source=post_sidebar-----999b4ca7c4aa---------------------clap_sidebar--------------)

155

3

[](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2F999b4ca7c4aa&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40shekhar.siva2609%2Fflutter-vs-react-native-the-last-word-999b4ca7c4aa&source=post_sidebar-----999b4ca7c4aa---------------------bookmark_sidebar--------------)

*