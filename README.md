# WEB103 Prework - CreatorVerse

Submitted by: **Max Lopez**

About this web app: **An App to view my favortite content creators**

Time spent: **👉🏿 5** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [ ] An image of each content creator is shown on their content creator card

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with ... [Kap](https://getkap.co/) for macOS

<!-- Recommended tools:
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I noticed that the header in my project was causing a horizontal scrollbar to appear. It seemed like the picocss navbar was stretching out beyond the width of the screen. I think it might be because the content inside the navbar, like the links and lists, had extra padding or margins that pushed it beyond the edge of the viewport. This made the entire navbar wider than the screen, which triggered the scrollbar.

To fix it, I just ended up using a basic div, since I didnt really need a navbar.

## License

Copyright 2024 Max Lopez

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
