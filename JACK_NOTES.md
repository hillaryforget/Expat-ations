- my-next-project sounds like a default name. Something more intentional, even if's just "app" is better
- adding an ERD (entity relationship diagram) might be good

__Design Review__
- Cute!!!!!
- Using both MUI and tailwind is a bit awkward
- Less color heavy theming is generally safer
- http://localhost:3000/city is a bit asymmetrical
- Logo is cute!!!
- http://localhost:3000/main?city1=Amsterdam&city2=Anchorage the images in the aspect ratio for the two top cards is not good
- Seeing the same images side by side when comparing two cities creates repetition
- I find the white background of the cards a bit overpowering on the city compare page
- The icons are cute!!!!
- Consider combining the side-by-sides into one card and introducing a divider inside of the combined card
- At some device widths, the text overflows past the yellow boxes for the "highlights"
- Adding some hover and focus effects for the yellow buttons would be good
- You could spice up the experience of scrolling through using something like https://scroll revealjs.org/ 
- Maybe pick a custom font. ChatGPT is pretty good at picking these if you describe the purpose of your app. Makes a big difference visually. Ask chat to create a tailwind.config.js file for you
- Consider using your names in the footer to link to Github/Linkedin (shameless self-promotion <3)
- Consider using emojis in your copywriting to give it a fun vibe 

__Code Review__
- https://vscode.dev/github/hillaryforget/Expat-ations/blob/8161b711626d141e2e69097f3066bbc1fee89d09/my-next-project/src/pages/city.js#L189 -> there might be cleaner ways of implementing this
- https://vscode.dev/github/hillaryforget/Expat-ations/blob/8161b711626d141e2e69097f3066bbc1fee89d09/my-next-project/src/pages/city.js#L101 -> you can create an app specific component to remove boilerplate when using Head (avoid having to declare tailwind and fontawesome manually for each page)
- https://vscode.dev/github/hillaryforget/Expat-ations/blob/8161b711626d141e2e69097f3066bbc1fee89d09/my-next-project/src/pages/city.js#L120 -> there is a space inside a jsx escape tag that can be removed
- src/pages has a mix of jsx and js files. more consistency is better
- The naming conventions of the components is a bit inconsistent (SafetyCard versus Col_Card vs Circleloading vs map)
- Avoid numbering variations of components (e.g. Heading2. There are more expressive wording options than this)
- https://vscode.dev/github/hillaryforget/Expat-ations/blob/8161b711626d141e2e69097f3066bbc1fee89d09/my-next-project/src/components/helpers/FindData.js#L1 https://vscode.dev/github/hillaryforget/Expat-ations/blob/8161b711626d141e2e69097f3066bbc1fee89d09/my-next-project/src/components/helpers/FindCategories.js#L1 -> you can use Array.prototype.find() to shorten these helpers
- https://vscode.dev/github/hillaryforget/Expat-ations/blob/8161b711626d141e2e69097f3066bbc1fee89d09/my-next-project/src/pages/contact.js#L12 Contact form is a dummy form
- Most of the code is pretty clean. I like how you did the interface for fetching from OpenAI

__Usability Review__
- Mobile slideout menu links dont work
- City page is broken on mobile
- About page is tough to read on mobile
- Got an error when searching Andorra + Anchorage (access healthInfo when healthInfo is null)
- There should be more ways to get to the city compare page options. Right now you have to go to home page and scroll down.
  -> Consider adding an id attr to the home search box, and a link in the header (/#home-search)
  -> That will make it navigate to home and auto scroll to the search box
- 
