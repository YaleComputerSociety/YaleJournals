# Yale Journals
Welcome to Yale Journals! Below is a breakdown of the project and its structure. This README will be updated with resources and reflect any changes to the tech stack and/or project structure.

## Tech Stack:
- Next.js
- Node.js / Node Package Manager (npm)
- TypeScript
- Tailwind CSS
- Firebase

## Project Structure:
This is a very rough outline of the current project structure.

### Frontend:
All assets (ie. images, icons, etc) are located under public/assets
  * We will organize this folder as the website grows in complexity
All frontend code is located under src/app and src/components
src/app contains frontend code for the different pages
  * Each page has its own folder which contains a page.tsx file; all files for any given page should be in the page's corresponding folder under src/app
  * For example, the frontend code for the home page is under src/app/home/page.tsx
src/components contains frontend code for reuseable components that can be used between pages
  * For example, the Header component is used in multiple pages
  * It is also used to modularize and organize the code and improve readability
globals.css, layout.tsx, and page.tsx should NOT be changed
### Backend:
All backend code is located under src/backend.
The majority of the code in the backend folder should be for scraping.
  * There is currently a backend.json file that contains metadata for placeholder articles
  * This is for testing purposes only; we will be using Firebase to store this data as well as handle authentication and cloud storage
### Miscellaneous:
package.json and package-lock.json are for Node.js package
  * These files should not be modified unless you are manually debugging dependency errors
  * postcss.config.js and tailwind.config.js are for Tailwind
  * You can modify these files if you want to customize the functionality of Tailwind
  * All other files/directories should not be modified

## Resources
These are just some resources to aid in the development process.

### Tailwind
- https://www.youtube.com/watch?v=pfaSUYaSgRo&t=164s&pp=ygUMdGFpbHdpbmQgY3Nz 
- https://www.youtube.com/watch?v=DenUCuq4G04&pp=ygUMdGFpbHdpbmQgY3Nz
### Icons
- This is the icon pack we will be using: https://tabler.io/icons
### Links and routing
- https://nextjs.org/docs/pages/api-reference/components/link
- https://nextjs.org/docs/app/api-reference/functions/use-router
### Node.js
- https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager
### Firebase
- https://firebase.google.com/docs/hosting/frameworks/nextjs
- https://www.youtube.com/watch?v=Vv_Oi7zPPTw&t=750s
- https://www.youtube.com/watch?v=-yrnWnN0g9o

## Style Guidelines
- Each page should have the header and footer components as well as similar layouts, animations, fonts, and general structure.
- When styling with Tailwind, the className attribute can get pretty long and messy. This is how it is organized throughout the project:
  * [flex or grid] [flex-col/flex-row or grid-rows/grid-cols] [width] [height] [margin] [padding] [colors] [everything else...] [animations using hover:] [animation duration]
  * Example: className="flex flex-row h-14 w-7/12 mx-9 p-5 bg-[#C8E1F1] items-center rounded-full hover:h-[3.3rem] hover:w-[57%] hover:bg-[#b2c8d5] duration-200"
