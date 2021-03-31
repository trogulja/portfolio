<template>
  <v-card color="transparent" elevation="0" class="px-6 pt-8">
    <v-card-title class="flex-column align-start custom-section-title align-self-stretch">
      <h4 class="black--text">Projects</h4>
      <div class="card-element-separator mt-4 mb-8"></div>
    </v-card-title>
    <v-card-text>
      <v-container class="pa-0" fluid>
        <v-row>
          <v-col v-for="(project, index) in projects" :key="`project-${index}`" cols="12" lg="6" class="d-flex align-center justify-center">
            <v-card :class="`project-card ${project.class}`" elevation="0" dark max-width="360px">
              <v-img :src="require(`@/assets/${project.image}`)" height="200px"></v-img>
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
              <v-card-text>
                <p>{{ project.textShort }}</p>
              </v-card-text>
              <v-card-actions>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" color="white" icon v-on="on" @click.stop="showInfo(project)"><v-icon>mdi-information</v-icon></v-btn>
                  </template>
                  <span>More information</span>
                </v-tooltip>
                <v-spacer />
                <v-tooltip v-if="project.github" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" :href="project.github" target="_blank" color="white" icon v-on="on"><v-icon>mdi-github</v-icon></v-btn>
                  </template>
                  <span>View on github</span>
                </v-tooltip>
                <v-tooltip v-if="project.livelink" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" :href="project.livelink" target="_blank" color="white" icon v-on="on"><v-icon>mdi-open-in-app</v-icon></v-btn>
                  </template>
                  <span>Link to app</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-dialog v-model="dialog" max-width="948px" scrollable>
      <v-card>
        <v-card-title class="mb-6 pl-8">
          <h3 :class="`${dialogClass}--text`">{{ dialogTitle }}</h3>
          <v-spacer />
          <v-btn :color="dialogClass" text @click="dialog = false"><v-icon large>mdi-close-circle-outline</v-icon></v-btn>
        </v-card-title>
        <v-card-subtitle class="px-8">
          <span class="mr-1">
            {{ dialogSubtitle }}
          </span>
          <v-chip v-if="dialogChip.production" small class="mx-1" :color="dialogClass" label outlined>
            <v-icon left small>mdi-truck-check-outline</v-icon>
            in production
          </v-chip>
          <v-chip v-if="dialogChip.plan" small class="mx-1" :color="dialogClass" label outlined>
            <v-icon left small>mdi-head-lightbulb-outline</v-icon>
            new features planned
          </v-chip>
          <v-chip v-if="dialogChip.development" small class="mx-1" :color="dialogClass" label outlined>
            <v-icon left small>mdi-hammer-wrench</v-icon>
            in development
          </v-chip>
          <v-chip v-if="dialogChip.test" small class="mx-1" :color="dialogClass" label outlined>
            <v-icon left small>mdi-test-tube</v-icon>
            testing
          </v-chip>
        </v-card-subtitle>
        <v-card-text class="px-8">
          <div class="pb-2">
            <v-img :src="require(`@/assets/${dialogImage}`)" max-width="900" max-height="600" />
          </div>
          <div class="d-flex">
            <v-spacer />
            <v-tooltip v-if="dialogIcon.vuejs" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-vuejs</v-icon>
              </template>
              <span>VueJS</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.vuetify" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-vuetify</v-icon>
              </template>
              <span>Vuetify</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.firebase" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-firebase</v-icon>
              </template>
              <span>Firebase</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.sqlite" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-database</v-icon>
              </template>
              <span>SQLite</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.mongodb" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-database</v-icon>
              </template>
              <span>MongoDB</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.electron" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-electron-framework</v-icon>
              </template>
              <span>Electron</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.nodejs" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-nodejs</v-icon>
              </template>
              <span>NodeJS</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.javascript" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-language-javascript</v-icon>
              </template>
              <span>Javascript</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.jsx" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-language-javascript</v-icon>
              </template>
              <span>Photoshop CS6 JSX</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.html" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-language-html5</v-icon>
              </template>
              <span>HTML</span>
            </v-tooltip>
            <v-tooltip v-if="dialogIcon.css" bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" :color="dialogClass" v-on="on">mdi-language-css3</v-icon>
              </template>
              <span>CSS</span>
            </v-tooltip>
          </div>
          <div class="px-8 mt-10">
            <v-row>
              <v-col cols="12" md="6">
                <h5 :class="`mb-4 ${dialogClass}--text font-weight-bold`">Problem</h5>
                <p>
                  {{ dialogProblem }}
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <h5 :class="`mb-4 ${dialogClass}--text font-weight-bold`">Solution</h5>
                <p>
                  {{ dialogSolution }}
                </p>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <v-card-actions class="mb-2 px-8">
          <v-btn text :color="dialogClass" @click="changeDialog('prev')">prev</v-btn>
          <v-spacer />
          <v-btn text :color="dialogClass" @click="changeDialog('next')">next</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      projects: [
        {
          title: 'Marvin',
          subtitle: 'Web app - office helper',
          image: 'marvin-mockup.jpg',
          class: 'projectMarvin',
          textShort: 'Web app that organizes information flow. It serves as unified place and removes the need to keep track of things across other tools.',
          problem: `Keeping crucial information over various communication channels proved to be a big issue. It resulted often in inability to find where is something written and missing some crucial instructions before it's too late. Existing tools that should help with this are spread wide which makes keeping track a huge chore. Colleagues were often complaining about this "administration" part of their job giving them huge headache.`,
          solution: `Web app that organizes information flow. It serves as unified place and removes the need to keep track of things across other tools. A single point to get notified, to retrieve stored data and to overview what's happening in the office. It eliminates the need to dig through emails, instant messages, notes, wikis or network shares by offering unified contextual bulletin board. It simplifies task assignments and their tracking. It automates mundane tasks. It offers visual overview of tasks both future and past. It reduces headache.`,
          github1: 'https://github.com/trogulja/Marvin',
          livelink: 'https://marvin-e60fb.web.app/',
          icon: { vuejs: true, vuetify: true, firebase: true },
          chip: { development: true, test: true },
        },
        {
          title: 'Skillsplatform',
          subtitle: 'Web app - employee skill overview',
          image: 'skillsplatform-mockup.jpg',
          class: 'projectSkillsplatform',
          textShort: 'Web app was born that would handle data input and, based on client specification, present and visualize that data in different ways.',
          problem: `Client had a ton of issues with trying to maintain and update an excel list of their employees and their skills. Idea was to know who is good at what in their offices and based on that decide which jobs to bring in more. But gathering the data as well as making sense from those excel tables was painful and long process. So they asked me if I could help somehow to speed up the process.`,
          solution: `Web app was born that would handle data input and, based on client specification, show that data in different ways. Because the data can be directly edited in the app, there was no longer need for external forms solution or even excel files.`,
          github1: 'https://github.com/trogulja/SkillsPlatformServer',
          livelink: 'https://fierce-dawn-88415.herokuapp.com/',
          icon: { vuejs: true, vuetify: true, mongodb: true, nodejs: true },
          chip: { production: true, plan: true },
        },
        {
          title: 'Parserly',
          subtitle: 'Electron App - claro log parser / data collection',
          image: 'parserly-mockup.jpg',
          class: 'projectParserly',
          textShort: 'Claro is awesome tool that speeds up image editing process greatly. Sadly, it lacks BI/BA reports. This app reads all those logs and records info in local sqlite db.',
          problem: `Claro is awesome tool that speeds up image editing process greatly. Sadly, it lacks BI/BA reports. It was really important to get those information because image editing specialists are partly evaluated based on their performance. Info like who inspected how many images and in what time, as well as how many images passed through which channels is recorded in .log files in verbose format (atomic info spread across multiple lines). Also, logs get rotated, so historic info is not kept.`,
          solution: `Electron based app that reads all those logs and records info in local sqlite database. Then serves it on to other services. It was important to go with portable solution because of low maintainance requirements.`,
          github: 'https://github.com/trogulja/Parserly',
          icon: { vuejs: true, vuetify: true, electron: true, javascript: true, sqlite: true },
          chip: { production: true, development: true },
        },
        {
          title: 'Compiley',
          subtitle: 'Electron App - data collection / normalization',
          image: 'compiley-mockup.jpg',
          class: 'projectCompiley',
          textShort: 'Electron based app that reads all of the entry excel files, records it into sqlite db and serves locally via rest api to whatever - in this case, another excel file.',
          problem: `Trying to compile data from different excel sheets and other sources can really be problematic. Especially when there is a lot of data. Excel can handle only so much. So in order to handle larger data set, to normalize it and to summify it, something else must be used. Also, excel has a nasty habit of calculating all of the formulas in all of the open documents when something changes - even if it's not connected to the changed data.`,
          solution: `Electron based app that reads all of the entry excel files and other, rest api, data, records it into sqlite database and serves locally via rest api to whatever - in this case, another excel file. Now receiving excel doesn't have to deal with all of the atomic data, but rather gets prepared data. Which makes it run much smoother.`,
          github: 'https://github.com/trogulja/Compiley',
          icon: { vuejs: true, vuetify: true, electron: true, javascript: true, sqlite: true },
          chip: { production: true, plan: true },
        },
        {
          title: 'FolderWatchNotify',
          subtitle: 'Electron App - network share / ftp crawler',
          image: 'folderwatchnotify-mockup.jpg',
          class: 'projectFolderwatchnotify',
          textShort:
            'Electron based app that crawls through all of our resources looking for new images was made. It detects if image is new, taken or done based on rules that were already in place, so nothing was changed in our workflow.',
          problem: `Not working through DAM (Digital Asset Management system) can lead to oversigths. And implementing DAMs into existing productions can be too expensive and otherwise imposible. So, during my work as image editing specialist, we had a lot of clients (both in house and outside) that just dumped their images into various folders across many of different either network shares or ftp folders. It would often lead to many headaches and stress trying to manage all of that by hand.`,
          solution: `Electron based app that crawls through all of our resources looking for new images was made. It detects if image is new, taken or done based on rules that were already in place, so nothing was changed in our workflow. And on set time it reports anything new to our slack channel, making sure we don't miss anything or get a nasty surprise.`,
          github: 'https://github.com/trogulja/FolderWatchNotify',
          icon: { vuejs: true, vuetify: true, electron: true, javascript: true, sqlite: true },
          chip: { production: true, plan: true },
        },
        {
          title: 'lePanel',
          subtitle: 'Photoshop CS6 panel',
          image: 'lepanel-mockup.jpg',
          class: 'projectLepanel',
          textShort:
            'Photoshop CS6 supports some rudimental javascript and exposes file object to the script, so I made a file save logic that would detect where the file was opened from and which color profile was in use and use it to automate certain tasks.',
          problem: `During my work as image editing specialist it annoyed me greatly when I had to often (multiple times a day) switch my workflow from coldset (newspaper) to heatset (magazines). Workflow differences include different color profiles, different save locations as well as different file formats images needs to be in and, in some cases, making sure there are no paths present. Having a ton of work and no safety guards lead to errors (editing images in wrong workflow).`,
          solution: `Photoshop CS6 supports some rudimental javascript, while panels are made in flash (yes, the discontinued tech). Photoshop exposes file object to the script, so I made a file save logic that would detect where the file was opened from and which color profile was in use. I've also added a header to the panel which shows what color profile is in use. Now the panel acts as a safety guard from working in wrong color profile while also making it real easy to switch between profiles, while the file save logic handles all of the file save rules. Only bad side effect is - in time it is possible to forget how and where to manually save images.`,
          github: 'https://github.com/trogulja',
          icon: { jsx: true, html: true, css: true },
          chip: { production: true },
        },
      ],
      dialog: false,
      dialogTitle: 'Marvin',
      dialogSubtitle: 'Web app - office helper',
      dialogImage: 'marvin-mockup.jpg',
      dialogClass: 'projectMarvin',
      dialogProblem: '',
      dialogSolution: '',
      dialogIndex: 0,
      dialogIcon: { vuejs: false, vuetify: false, firebase: false, sqlite: false, mongodb: false, electron: false, nodejs: false, javascript: false, jsx: false, html: false, css: false },
      dialogChip: { production: false, plan: false, development: false, test: false },
    };
  },

  watch: {
    dialog: function (val) {
      this.$fullpage.setMouseWheelScrolling(!val);
    },
  },

  methods: {
    showInfo(project) {
      this.dialogTitle = project.title;
      this.dialogSubtitle = project.subtitle;
      this.dialogImage = project.image;
      this.dialogClass = project.class;
      this.dialogProblem = project.problem;
      this.dialogSolution = project.solution;
      this.dialogIcon = { ...project.icon };
      this.dialogChip = { ...project.chip };
      this.dialogIndex = this.projects.indexOf(project);
      this.dialog = true;
    },
    changeDialog(dir) {
      if (dir === 'prev') {
        if (this.dialogIndex > 0) return this.showInfo(this.projects[this.dialogIndex - 1]);

        return this.showInfo(this.projects[this.projects.length - 1]);
      }

      if (dir === 'next') {
        if (this.dialogIndex < this.projects.length - 1) return this.showInfo(this.projects[this.dialogIndex + 1]);

        return this.showInfo(this.projects[0]);
      }
      console.log(this.dialogIndex);
    },
  },
};
</script>
