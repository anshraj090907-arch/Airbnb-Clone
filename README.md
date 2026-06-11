🤖 Airbnb Clone

📌 **Project Overview**

In this project, interns will work on building a fully responsive clone of the Airbnb homepage from scratch using React and Tailwind CSS. The objective is to strengthen their understanding of component-based architecture, responsive design principles, and modern frontend tooling. Interns are encouraged to explore third-party libraries such as ShadCN to enhance functionality and styling. Beyond simply replicating the Airbnb homepage, participants should add their own creative touches andimaginative features to showcase innovation and personal style.

By the end of the project, interns will have hands-on experience in translating real-world design into functional code, improving Ul/UX practices, and applying modern frontend developmenttechniques used in the industry.

🎯 **Project Objectives**

Understand and implement component-based architecture using React.

Apply responsive design techniques with Tailwind CSS for seamless cross-device compatibility.

Explore andintegrate third-party libraries like ShadCN for UI enhancements.

Encourage creativity by adding unique features or improvements beyond the Airbnb homepage.

🛠️ **Approach**

Structured the app as a single-file React component with clearly separated logical sections — Navbar, Category Tabs, Property Grid, and Map Toggle — following clean component hierarchy

Used Tailwind's responsive grid system (sm:grid-cols-2 → 2xl:grid-cols-6) to auto-adapt the property card layout across all breakpoints without media query boilerplate

Sourced real Unsplash image URLs with Indian property locations (Manali, Goa, Gulmarg) to give the clone an authentic, localized feel with ₹ pricing

Kept state minimal and local with 3 useState hooks (activeCategory, likedProperties, mapVisible) — no Redux or Context needed for this scope

⚡ **Challenges**

Tailwind JIT doesn't ship animate-spin-slow or scrollbar-none natively, so custom CSS keyframes + .no-scrollbar had to be injected via a <style> tag inside the component

 Reconstructing the Airbnb belo logo as a clean custom SVG <path> from scratch without using any licensed or copyrighted asset was geometrically tricky
 
Making the search pill bar collapse gracefully — showing 3 labelled buttons on desktop but only "Where to?" on mobile — required careful hidden sm:block / sm:hidden layering

Managing z-index stacking between sticky header (z-50), fixed map button (z-40), and fullscreen map overlay (z-30) without visual conflicts

📚 **Learnings**

Learned that Tailwind's utility gaps can be cleanly bridged by injecting a <style> block with custom @keyframes directly inside JSX without any config changes

Understood how aspect-square + object-cover together create perfectly uniform image cards regardless of the original image dimensions or aspect ratio

Practiced e.stopPropagation() to prevent the like ❤️ button click from bubbling up to the parent card's click handler — a critical real-world UX pattern

The repo shows 82.6% JavaScript, 15.5% CSS, 1.9% HTML — confirming the architecture is JS-dominant with Tailwind handling most styling, keeping raw CSS minimal and purposeful.



👩‍💻 **Author**

_**ANSH RAJ SAXENA**_
