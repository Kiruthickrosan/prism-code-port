# Cosmic Canvas Portfolio

Build a Premium, Heavily Animated Developer Portfolio Website

Create a modern, premium, highly interactive personal portfolio website for a Backend Software Developer / SDE.

The website should feel like a high-end developer/product portfolio, not a traditional resume website.

The overall experience should be:

Professional

Minimal but visually impressive

Smooth

Futuristic

Technical

Premium

Highly interactive

Animation-heavy without becoming distracting

Fast and responsive

Easy to navigate

The design should communicate that the developer is serious about software engineering, backend development, DSA, problem solving, and modern web technologies.

1. STRICT TECHNOLOGY REQUIREMENTS

Use ONLY the following frontend technologies:

React.js

JavaScript

Framer Motion

Three.js

React Three Fiber if required for Three.js integration

Particle.js / tsParticles for interactive particle backgrounds

CSS

Do NOT use:

Tailwind CSS

Bootstrap

Material UI

Angular

Vue

Next.js

jQuery

Any unnecessary UI framework

Use regular CSS files / modular CSS organization.

The application should be structured as a clean React application.

Use reusable React components wherever possible.

2. CORE DESIGN DIRECTION

Create a dark professional futuristic interface.

The visual language should combine:

Dark charcoal / near-black background

Very subtle white/gray grid lines

Soft blue / violet / cyan accent lighting

Glassmorphism used sparingly

Soft gradients

Subtle glowing borders

Depth

3D objects

Particle effects

Smooth page transitions

Micro-interactions

Avoid making the website look like a gaming website.

The design must remain suitable for:

Software engineering recruiters

Hiring managers

Technical interviewers

Developers

Startup founders

The animations should feel intentional and premium, not excessive for the sake of animation.

3. GLOBAL BACKGROUND

Create a consistent visual background system throughout the website.

Grid Wall

Use a very subtle grid wall behind the main content.

Characteristics:

Thin white/gray lines

Very low opacity

Large spacing

Perspective/depth where appropriate

Slight gradient fade toward the edges

Never interfere with text readability

The grid should feel similar to a futuristic engineering workspace.

Add subtle animated movement to the grid when appropriate.

Do NOT make the grid visually dominant.

4. INTERACTIVE PARTICLE BACKGROUND

Use Particle.js / tsParticles to create an interactive particle system.

Particles should:

Move slowly

React to mouse movement

Have subtle connection lines

React to cursor proximity

Have low opacity

Create depth without distracting from content

On mobile:

Reduce particle count

Reduce interaction complexity

Reduce CPU/GPU usage

Particles should automatically adapt based on screen size.

Do not sacrifice performance just to increase the particle count.

5. NAVIGATION

Create a premium navigation bar.

Desktop navigation:

Logo / developer name

Home

About

Projects

Skills

Articles

Coding Profiles

Contact

Resume

Use smooth animated navigation.

Navigation should have:

Transparent / glass background

Subtle border

Active page indicator

Hover animation

Smooth underline or glow

Mobile hamburger menu

When scrolling, the navbar should subtly transform:

Background becomes slightly more opaque

Slight blur

Small height reduction

Soft shadow/glow

6. MULTI-PAGE ARCHITECTURE

Create separate pages/routes rather than putting everything into one extremely long page.

Suggested pages:

Home

About

Projects

Skills

Articles

Coding Profiles

Contact

Resume should be downloadable from:

Navbar

Hero section

About section

CTA section

Use React Router if routing is necessary.

7. FULL PAGE TRANSITIONS

Every page navigation should have a smooth full-page transition.

Use Framer Motion.

The transition should not simply be a basic fade.

Create a sophisticated transition system such as:

Current page begins fading/sliding

A subtle animated overlay/grid passes across the screen

New page enters with its own animation

Content elements animate sequentially

Each page should have a slightly different entrance style while maintaining the same design language.

Examples:

Home:

Fade + scale

About:

Slide from left

Projects:

Depth / scale transition

Skills:

Vertical reveal

Articles:

Blur-to-sharp reveal

Contact:

Soft upward reveal

Keep transitions fast enough that navigation never feels slow.

8. HOME / HERO PAGE

The Hero section should be the visual centerpiece of the website.

Layout:

LEFT SIDE:

Large heading:

"Hi, I'm Kiruthickrosan"

or

"Kiruthickrosan K"

Subheading:

"Backend Software Developer"

Supporting text describing the developer as someone focused on:

Backend engineering

Java

Data Structures & Algorithms

Problem solving

Building scalable applications

Add an animated typing / text cycling effect such as:

"Backend Developer"
"Java Developer"
"Problem Solver"
"SDE Aspirant"

Do not make the typing animation too fast.

9. HERO 3D OBJECT

Create a visually impressive 3D animated object on the right side of the Hero section using Three.js.

Possible concept:

A floating futuristic developer/technology sphere containing:

Java symbol

Database representation

API nodes

Code symbols

React-style geometric elements

Backend architecture nodes

Alternative:

Create a floating 3D network of connected nodes representing:

Frontend → API → Backend → Database

The object should:

Slowly rotate

React subtly to mouse movement

Have floating particles

Have subtle lighting

Have depth

Cast a soft glow

Do NOT create an overly complex 3D model that hurts performance.

10. 3D ANIMATED ICONS

Include floating 3D technology icons around the Hero 3D object.

Possible technologies:

Java

React

Node.js

MongoDB

MySQL

Git

GitHub

HTML

CSS

JavaScript

Icons should:

Float

Rotate slightly

Move at different speeds

Respond subtly to cursor movement

Have depth

Have subtle glow

Avoid clutter.

Only show the most important technologies.

11. HERO CTA

Create two primary CTA buttons:

"View My Projects"

"Download Resume"

Optional secondary CTA:

"Let's Connect"

Buttons should have:

Animated hover states

Magnetic / subtle cursor interaction

Glow

Scale animation

Smooth transition

The Resume button must trigger an actual downloadable PDF.

Do not create a fake button.

12. ABOUT PAGE

Create a dedicated About page.

Include:

Introduction

A professional developer introduction.

Focus on:

Backend development

Java

DSA

Software engineering

Building real-world applications

Continuous learning

Developer Journey

Create a visually interesting timeline.

Timeline items can include:

Education
Projects
Internship
Technical growth
DSA journey

Use Framer Motion to animate timeline items as the user scrolls.

13. ABOUT PAGE — DEVELOPER STATISTICS

Create animated statistics cards.

Examples:

20,000+ Images & Videos Annotated

50+ YouTube Videos Processed

100+ DSA Problems

Multiple Full-Stack Projects

3+ Major Projects

Do not invent statistics.

Make these values configurable from a single data file.

Animate numbers when they enter the viewport.

14. PROJECTS PAGE

Create a premium project showcase.

Projects should not simply appear as flat cards.

Use:

3D tilt

Framer Motion

Hover depth

Parallax

Floating elements

Animated borders

Gradient lighting

Each project card should contain:

Project image / preview

Project name

Description

Technologies

Key features

GitHub link

Live Demo link

Optional case study link

15. FEATURED PROJECT

Highlight the main project:

FinTrack — Smart Expense & Investment Tracker

Include:

Expense tracking

Income tracking

Investment tracking

Transaction management

Financial dashboard

Charts

CRUD operations

Responsive UI

PWA

Android application

Technologies can include:

React

JavaScript

REST APIs

Node.js

MongoDB/MySQL depending on actual implementation

Make this project visually larger than the other projects.

Create a sophisticated hover interaction where:

Card slightly rotates

Project image moves independently

Background glow follows cursor

Technology badges animate

CTA buttons appear smoothly

16. OTHER PROJECTS

Create reusable project cards for projects such as:

YouTube RAG Chat System

Highlight:

YouTube transcript processing

Retrieval-Augmented Generation

Semantic search

Context-aware answers

OpenAI API

AI Travel Agent

Highlight:

Itinerary planning

Hotel suggestions

Restaurant suggestions

Route optimization

AI-powered planning

E-Commerce Platform

Highlight:

Product browsing

Cart

Authentication

Checkout flow

Responsive UI

Projects should be loaded from structured project data rather than hardcoded directly into every component.

17. PROJECT DETAIL INTERACTION

When a project is clicked:

Open a detailed project view.

Use a smooth Framer Motion transition.

Show:

Project overview

Problem

Solution

Features

Architecture

Technologies

Challenges

Results

GitHub

Live Demo

Use visual diagrams where appropriate.

18. SKILLS PAGE

Create a visually impressive skills section.

Organize skills into categories.

Programming

Java

JavaScript

SQL

Frontend

React

HTML

CSS

Backend

Node.js

Express

REST APIs

Database

MySQL

MongoDB

Oracle

Tools

Git

GitHub

VS Code

Postman

Concepts

Data Structures

Algorithms

OOP

DBMS

REST APIs

19. SKILLS VISUALIZATION

Do NOT use boring progress bars such as:

Java 90%
React 80%

Instead create:

Animated skill cards

Floating technology icons

Interactive skill constellation

3D rotating technology sphere

Animated connections

Hovering a technology should display:

Technology name

Category

Short description

Relevant projects

Use subtle Framer Motion animations.

20. ARTICLES PAGE

Create an Articles / Technical Writing page.

Each article card should contain:

Article title

Short description

Topic

Publication date

Reading time

Tags

External article link

Example topics:

My DSA Revision Journey

Understanding Binary Search

Java HashMap / HashSet concepts

Building FinTrack

Building a YouTube RAG system

Lessons from LeetCode contests

Use animated article cards.

On hover:

Card lifts

Border glow

Arrow moves

Image/illustration slightly scales

21. CODING PROFILES PAGE

Create a dedicated Coding Profiles page.

Show profiles for:

LeetCode

HackerRank

GitHub

Use official platform icons.

Each profile card should contain:

Platform logo

Username

Profile link

Relevant statistics if available

Animated hover state

Example:

LeetCode

"Problem Solving • DSA • Competitive Programming"

Button:

"View Profile →"

Do not fabricate statistics.

Allow profile information to be configured from a data file.

22. SOCIAL LINKS

Create a consistent social-link component.

Include icons for:

LinkedIn

GitHub

LeetCode

HackerRank

Email

Use an icon library only if necessary.

Icons should have:

Hover animation

Scale

Glow

Rotation / movement

Tooltip

Do not use plain text URLs as the primary UI.

23. CONTACT PAGE

Create a professional Contact page.

Heading:

"Let's Build Something"

or

"Let's Connect"

Include a working contact form:

Fields:

Name

Email

Subject

Message

Button:

"Send Message"

The form should validate:

Required fields

Valid email

Minimum message length

Add animated form states:

Idle
→ Hover
→ Focus
→ Sending
→ Success
→ Error

24. EMAIL FUNCTIONALITY

The website must provide a real method to contact the developer.

Do not create a fake form that does nothing.

Structure the contact system so it can be connected to an email service.

Keep the email configuration in environment variables.

Example:

VITE_EMAIL_SERVICE_ID
VITE_EMAIL_TEMPLATE_ID
VITE_EMAIL_PUBLIC_KEY

Do not hardcode secrets.

If using an external email provider, keep its integration isolated inside a dedicated service/helper.

25. RESUME DOWNLOAD

Create a dedicated downloadable resume button.

Resume should be a PDF stored inside the public assets.

Example:

/public/resume/Kiruthickrosan-Resume.pdf

When clicked:

Download the PDF directly.

Also provide:

"View Resume"

and

"Download Resume"

where appropriate.

26. CALL TO ACTION SECTION

Create a visually strong CTA near the end of the website.

Example:

"Have an idea or opportunity?"

"Let's build something meaningful."

Buttons:

"Contact Me"

"Download Resume"

"View GitHub"

Use a subtle animated background.

Possible effects:

Moving grid

Floating particles

Gradient glow

3D object

Animated border

27. SCROLL ANIMATIONS

Use Framer Motion extensively.

Elements should animate when entering the viewport.

Examples:

Text:

Fade + slide

Cards:

Fade + scale

Images:

Parallax

Headings:

Character/word reveal

Timeline:

Sequential reveal

Technology icons:

Floating animation

Statistics:

Counter animation

CTA:

Scale + fade

Do not animate everything simultaneously.

Create hierarchy.

28. MICRO INTERACTIONS

Add high-quality micro-interactions throughout the website.

Examples:

Cursor-following glow

Magnetic buttons

Hover scaling

Animated arrows

Card tilt

Icon rotation

Text reveal

Border animation

Gradient movement

Scroll progress indicator

Active navigation indicator

Keep interactions subtle and professional.

29. CUSTOM CURSOR

On desktop, optionally implement a custom cursor.

Cursor should have:

Small central dot

Outer ring

Smooth movement

Expand effect over buttons

Expand effect over links

Different state over interactive 3D objects

Disable custom cursor on touch devices.

Do not allow it to interfere with usability.

30. RESPONSIVE DESIGN

The website MUST work perfectly on:

Mobile

320px+
375px
390px
430px

Tablet

768px
820px
1024px

Laptop

1280px
1366px
1440px

Large screens

1920px+

Do not simply shrink the desktop layout.

Create intentional responsive layouts.

31. MOBILE EXPERIENCE

On mobile:

Simplify 3D scenes

Reduce particle count

Disable expensive effects when necessary

Reduce animation distance

Simplify navigation

Use hamburger menu

Stack hero content

Stack project cards

Keep CTA buttons touch-friendly

Ensure text remains readable

Avoid horizontal scrolling

The website must feel smooth on mid-range mobile devices.

32. ACCESSIBILITY

Implement:

Semantic HTML

Keyboard navigation

Visible focus states

Proper button labels

Alt text for meaningful images

ARIA labels where necessary

Sufficient text contrast

Reduced-motion support

Respect:

prefers-reduced-motion

When enabled:

Reduce Framer Motion animations

Reduce particle movement

Disable unnecessary 3D movement

Keep navigation functional

33. PERFORMANCE

Because the website uses heavy animation, performance is extremely important.

Implement:

Lazy loading

Code splitting

Lazy-loaded 3D components

Optimized images

Reduced particle count on mobile

GPU-friendly transforms

Avoid unnecessary React re-renders

Use React.memo where useful

Avoid expensive continuous calculations

Pause animations when components are not visible

Optimize Three.js rendering

Do not sacrifice usability for visual effects.

34. COMPONENT ARCHITECTURE

Use a clean reusable architecture.

Example:

src/

components/

Navbar/
Hero/
Particles/
ThreeScene/
AnimatedText/
Button/
ProjectCard/
ProjectGrid/
SkillCard/
SkillCloud/
ArticleCard/
CodingProfileCard/
SocialLinks/
ContactForm/
Footer/
PageTransition/
Cursor/

pages/

Home/
About/
Projects/
Skills/
Articles/
CodingProfiles/
Contact/

data/

projects.js
skills.js
articles.js
profiles.js
socials.js

assets/

images/
icons/
resume/

styles/

global.css
animations.css

35. DATA-DRIVEN CONTENT

Do not hardcode repeated content directly into components.

Create structured data files.

For example:

projects.js

skills.js

articles.js

codingProfiles.js

socialLinks.js

This should make it easy to update portfolio content later without modifying UI components.

36. FOOTER

Create a premium footer.

Include:

Developer name

"Backend Software Developer"

Quick navigation

Social icons:

LinkedIn
GitHub
LeetCode
HackerRank
Email

Resume download

Copyright

Add a subtle animated divider.

37. VISUAL HIERARCHY

The design should follow this priority:

Developer identity

Professional role

Projects

Technical skills

Experience / journey

Articles

Coding profiles

Contact

Do not overwhelm users with information.

Whitespace is important.

38. ANIMATION PHILOSOPHY

The website should be heavily animated but professionally animated.

Avoid:

Excessive bouncing

Cartoon-like animations

Constant flashing

Excessive neon

Extremely fast transitions

Distracting spinning objects

Overuse of blur

Unnecessary animations on every word

Prefer:

Smooth easing

Spring animations

Subtle parallax

Depth

Motion hierarchy

Scroll-triggered reveals

3D interactions

Soft lighting

Micro-interactions

The animation should communicate quality.

39. PAGE-SPECIFIC VISUAL IDENTITY

Every page should feel slightly different.

HOME:
3D + particles + hero animations

ABOUT:
Timeline + storytelling + depth

PROJECTS:
3D cards + interactive previews

SKILLS:
Technology constellation + floating icons

ARTICLES:
Editorial / clean card animations

CODING PROFILES:
Statistics + interactive profile cards

CONTACT:
Minimal + elegant + focused

Despite these differences, all pages must share:

Same typography

Same color system

Same grid

Same navigation

Same spacing system

Same design language

40. COLOR SYSTEM

Use a professional dark palette.

Primary background:

#050505 / near-black

Secondary:

#0B0B0F

Text:

White / near-white

Secondary text:

Muted gray

Accent colors:

Subtle combinations of:

Blue

Violet

Cyan

Do not make the website overly colorful.

Use gradients sparingly.

41. TYPOGRAPHY

Use a modern professional sans-serif font.

Typography should have:

Strong Hero heading

Clear section headings

Readable body text

Appropriate line height

Good responsive scaling

Hero heading should be large but not break mobile layouts.

42. FINAL USER EXPERIENCE

The user should be able to:

Immediately understand who the developer is

Understand their technical focus

Explore projects

See technical skills

Read technical articles

View coding profiles

Download the resume

Contact the developer

Access social profiles

All interactions should feel smooth and intentional.

43. IMPORTANT IMPLEMENTATION RULE

Do not generate a generic template portfolio.

The final website should feel like a custom-designed premium developer portfolio.

Prioritize:

Visual quality
+
Animation quality
+
Usability
+
Performance
+
Responsive design

in that order.

The website should look impressive within the first 5 seconds but remain professional enough for a recruiter or hiring manager.

44. FINAL QUALITY CHECK

Before considering the project complete, verify:

React is used

Framer Motion is used

Three.js is used

Particle.js / tsParticles is used

No Tailwind CSS

No Bootstrap

No unnecessary UI framework

Fully responsive

Mobile navigation works

Resume downloads correctly

Contact form is functional/configurable

LinkedIn icon/link works

GitHub icon/link works

LeetCode icon/link works

HackerRank icon/link works

Project links work

Article links work

Page transitions work

3D Hero works

Particles interact with cursor

Project hover animations work

Reduced-motion support exists

No horizontal scrolling

No broken links

No console errors

No unnecessary performance-heavy effects

All placeholder content is clearly marked for replacement

Build the project as a production-quality portfolio, not merely a visual mockup.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://prism-code-port.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b8794d8d-db45-4c9f-8391-c9d7b138fb8f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
