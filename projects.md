# Projects in general
- intro / what is this project about
- problems encountered / how was it solved
- solution overview
- technologies used (icons)
- project status

# Marvin
## Intro
Web app - office helper

## Problem
Keeping crucial information over various communication channels proved to be a big issue. It resulted often in inability to find where is something written and missing some crucial instructions before it's too late. Existing tools that should help with this are spread wide which makes keeping track a huge chore. Colleagues were often complaining about this "administration" part of their job giving them huge headache.

## Solution
Web app that organizes information flow. It serves as unified place and removes the need to keep track of things across other tools. A single point to get notified, to retrieve stored data and to overview what's happening in the office. It eliminates the need to dig through emails, instant messages, notes, wikis or network shares by offering unified contextual bulletin board. It simplifies task assignments and their tracking. It automates mundane tasks. It offers visual overview of tasks both future and past. It reduces headache.

## Technologies
- vuejs
- firebase

## Status
- in development / testing

# SkillsPlatform
## Intro
Web app - employee skill overview / comparison tool.

## Problem
Client had a ton of issues with trying to maintain and update an excel list of their employees and their skills. Idea was to know who is good at what in their offices and based on that decide which jobs to bring in more. But gathering the data as well as making sense from those excel tables was painful and long process. So they asked me if I could help somehow to speed up the process.

## Solution
Web app was born that would handle data input and, based on client specification, show that data in different ways. Because the data can be directly edited in the app, there was no longer need for external forms solution or even excel files.

## Technologies
- vuejs
- mongodb
- nodejs

## Status
- in production / developing features

# Parserly
## Intro
Electron App - claro log parser / data collection.

## Problem
Claro is awesome tool that speeds up image editing process greatly. Sadly, it lacks BI/BA reports. It was really important to get those information because image editing specialists are partly evaluated based on their performance. Info like who inspected how many images and in what time, as well as how many images passed through which channels is recorded in .log files in verbose format (atomic info spread across multiple lines). Also, logs get rotated, so historic info is not kept.

## Solution
Electron based app that reads all those logs and records info in local sqlite database. Then serves it on to other services. It was important to go with portable solution because of low maintainance requirements.

## Technologies
- electron
- javascript
- vuejs
- sqlite

## Status
- in production / developing features

# Compiley
## Intro
Electron App - data collection / normalization and serving to excel.

## Problem
Trying to compile data from different excel sheets and other sources can really be problematic. Especially when there is a lot of data. Excel can handle only so much. So in order to handle larger data set, to normalize it and to summify it, something else must be used. Also, excel has a nasty habit of calculating all of the formulas in all of the open documents when something changes - even if it's not connected to the changed data.

## Solution
Electron based app that reads all of the entry excel files and other, rest api, data, records it into sqlite database and serves locally via rest api to whatever - in this case, another excel file. Now receiving excel doesn't have to deal with all of the atomic data, but rather gets prepared data. Which makes it run much smoother.

## Technologies
- electron
- javascript
- vuejs
- sqlite

## Status
- in production

# FolderWatchNotify
## Intro
Electron App - network share / ftp crawler that collects information about new images

## Problem
Not working through DAM (Digital Asset Management system) can lead to oversigths. And implementing DAMs into existing productions can be too expensive and otherwise imposible. So, during my work as image editing specialist, we had a lot of clients (both in house and outside) that just dumped their images into various folders across many of different either network shares or ftp folders. It would often lead to many headaches and stress trying to manage all of that by hand.

## Solution
Electron based app that crawls through all of our resources looking for new images was made. It detects if image is new, taken or done based on rules that were already in place, so nothing was changed in our workflow. And on set time it reports anything new to our slack channel, making sure we don't miss anything or get a nasty surprise.

## Technologies
- electron
- javascript
- sqlite

## Status
- in production
- new features planned (API)

# lePanel
## Intro
Photoshop CS6 panel for switching color profiles and saving images to correct location.

## Problem
During my work as image editing specialist it annoyed me greatly when I had to often (multiple times a day) switch my workflow from coldset (newspaper) to heatset (magazines). Workflow differences include different color profiles, different save locations as well as different file formats images needs to be in and, in some cases, making sure there are no paths present. Having a ton of work and no safety guards lead to errors (editing images in wrong workflow).

## Solution
Photoshop CS6 supports some rudimental javascript, while panels are made in flash (yes, the discontinued tech). Photoshop exposes file object to the script, so I made a file save logic that would detect where the file was opened from and which color profile was in use. I've also added a header to the panel which shows what color profile is in use.

Now the panel acts as a safety guard from working in wrong color profile while also making it real easy to switch between profiles, while the file save logic handles all of the file save rules. Only bad side effect is - in time it is possible to forget how and where to manually save images.

## Technologies
- Photoshop CS6 JSX
- HTML
- CSS
- Flash

## Status
- mature, in production
- eventually i should revisit this and make a CC version