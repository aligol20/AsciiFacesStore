# AsciiFacesStore
A React Native Project with **Typescript** for showing the ascii faces.

## Cross Platform
Currently available for Android and iOS


Products Grid
====

This is an ecommerce app, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage should display a list of products for people to browse.

Please read the instructions and FAQ below before beginning.

Features
----

- products are displayed in a grid.
- give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen.
- each product has :
  - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying.
  - a "price" field, in cents. This should be formatted as dollars like `$3.51`.
  - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.
- the product grid should automatically load more items as you scroll down.
- display an animated "loading..." message while the user waits for the data to load.
- to improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time.  But they still should not be displayed until the user has scrolled to the bottom of the product grid.
- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~".

### Ads features

- after every 20 products we need to insert an advertisement from one of our sponsors. Use the same markup as the advertisement in the header shown in `public/index/html`, but make sure the `?r` query param is randomly generated each time an ad is displayed.
- Ads should be randomly selected, but a user must never see the same ad twice in a row.

### Gifs
Android             |  iOS
:-------------------------:|:-------------------------:
<img src="https://github.com/aligol20/AsciiFacesStore/blob/master/public/AsciiFacesStore/GIF-200629_071918.gif" width="300">  |  <img src="https://github.com/aligol20/AsciiFacesStore/blob/master/public/AsciiFacesStore/GIF-200629_072454.gif" width="300">
## Setup instructions

#### 1. Install dependencies
- `git clone https://github.com/aligol20/AsciiFacesStore.git`
##### 2. Install server dependencies
- `cd server`
- `npm install`
- `npm start`
##### 3. Install React-native dependencies
- `cd public`
- `cd AsciiFacesStore`
- `npm start`
- `cd ios`
- `pod install`
- `cd ..`
### Running App on ios
- `npx react-native run-ios`
### Running App on android
- `npx react-native run-android`
- **Important**: If you want to run the code on an android device, you should change the IP address in 'Url.ts' to your computer IP address.







