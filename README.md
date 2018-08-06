# Unscheduler: An unconference scheduling tool

The Unscheduler is an app for managing the voting and scheduling process for
unconferences, inspired by my work as a co-organizer for [Offline Camp](http://offlinefirst.org/camp). *(Yes, [unconferences have schedules](https://medium.com/offline-camp/crafting-community-events-that-leave-them-wanting-smore-902974cff4d4)!)*

**Check out the code or the [live app](UPDATE THIS LINK)!**

* Front-end client
   * [GitHub repo](https://github.com/terichadbourne/unscheduler-ember) (unscheduler-ember)
   * [Live site](UPDATE THIS LINK) (deployed on GitHub Pages)
* Back-end API
   * [GitHub repo](https://github.com/terichadbourne/unscheduler-backend) (unscheduler-backend)
   * [Live site](https://sleepy-springs-55525.herokuapp.com/) (deployed on Heroku)

## Technologies used
  - **Front-end technologies**
    - Ember
    - JavaScript
    - jQuery
    - Handlebars
    - Bootstrap
    - HTML5
    - CSS3
    - Sass
  - **Back-end technologies**
    - Ruby on Rails
    - PostgreSQL
    - Active Record

## The backstory: Unconference organizing with sticky notes and Mr. Sketch markers

As a member of the [Offline First](http://offlinefirst.org) development
community, I co-organize an unconference called [Offline Camp](http://offlinefirst.org/camp), where attendees propose topics for
discussion and then vote to determine what topics are actually discussed in the
limitedtime we have available. As organizers, we take the votes (a sticky note
for each proposal, with stickers representing votes won) and give some careful
thought to how to best schedule the winning sessions so that the most popular
ones are spread across different timeslots from each other and in the largest
available rooms, topics that should appeal to similar subgroups of attendees
aren't scheduled to conflict with one another, etc.

Check out these photos for a taste of the current analog process:
- [Voting on proposed discussion topics with sticky notes and stickers](https://www.dropbox.com/s/12js63t40ft7arg/Current_Voting.png?dl=0)
- [Scheduling the winners on a grid of available session slots](https://www.dropbox.com/s/mt0jvgwls6xq6bx/Current_Scheduling.jpeg?dl=0)

This Unscheduler app is meant to mimic the analog process we use at Offline Camp
by:

TODO: UPDATE THIS SECTION

- Allowing event participants to nominate discussion topics (complete)
- Allowing event participants to vote on proposed topics (complete)
- Allowing event organizers to open and close proposal and voting periods (complete)
- Allowing event organizers to easily identify winning sessions (complete)
- Allowing event organizers to schedule sesions into timeslots (upcoming)
- Allowing participants to view the final schedule (upcoming)

## Project planning and strategy
Preparation and planning were key to my success with this project. Here's a look
at my strategy and process.

### User Stories

TODO: UPDATE THIS SECTION

These user stories guided my development process:

- **Proposing** (Complete)
   - As an event attendee or organizer, I want to see a list of all currently proposed sessions so that I don't create a duplicate proposal.
   - As an event attendee or organizer, after seeing other proposals, I then want to propose a new unconference session topic for everyone to vote on so that my favorite topic will be covered.

- **Voting** (Complete)
   - As an event attendee or organizer, I want to see a list of all proposed sessions so that I can choose how to use my X number of votes.
   - As an event attendee or organizer, I want to apply my X number of votes to my favorite sessions (either all to one or one/some to multiple) so that my favorite topics are likely to be selected.
   - As an event organizer, I want to view all proposed sessions with their vote counts to determine which are the winners.

- **Scheduling & Admin** (Upcoming)
   - As an event organizer, I want to add some keywords (such as UX) to winning sessions to help guide my timeslot assignments, ensuring similar sessions aren't scheduled on top of each other.
   - As an event organizer, I want to add a list of daily timeslots avialable for sessions to create my base schedule.
   - As an event organizer, I want to add a list of rooms available for discussion sessions to create my base schedule.
   - As an event organizer, I want to assign each winning session to an available timeslot and room so attendees can see their options.
   - As an event attendee or organizer, I want to see today's sessions by time, with room indicated for each so I know where to be when.

### Wireframes

TODO: UPDATE THIS SECTION

These wireframes guided my front-end development:

- [Version 1: Proposing Discussion Topics](https://www.dropbox.com/s/nl6sdmdzpa43d2s/Wireframe_Proposing.JPG?dl=0)
- [Version 1: Voting on Discussion Topics](https://www.dropbox.com/s/qvnjl3n9g90gpaj/Wireframe_Voting.JPG?dl=0)
- [Version 2: Scheduling Sessions](https://www.dropbox.com/s/a4tbkn309ca6ws2/Wireframe_SchedulingJPG.JPG?dl=0)
- [Version 2: Viewing Final Schedule](https://www.dropbox.com/s/6ekkdcyorl2fl6b/Wireframe_Schedule_View.JPG?dl=0)

### Entity Relationship Diagrams

TODO: UPDATE THIS SECTION

I created the following entity relationship diagrams to map out my relational
database structure before devloping my API, and adjusted the plan to meet time
constraints on the project.

[Entity Relationship Diagrams](https://www.dropbox.com/s/1yyfi3xf42ebzg4/Unschedule%20ERDs.jpg?dl=0)

### Work Process

TODO: UPDATE THIS SECTION

I took a methodical approach to development of the app, first building out each
SQL table and getting my Rails server up and running via curl scripts before
adding the related front-end functionality. Here's a look at my project plan.
I was able to complete my MVP and add additional admin functionality before
deadline, and I have lots of functionality I'd still love to add in the future.

- **Version 1 / MVP (Proposals & Voting)**
  - API: Build USERS tables, API, and curl scripts
  - Client: Implement auth functions
  - API: Build DISCUSSIONS tables, API, and curl scripts
  - Client: Implement DISCUSSIONS resource functions (propose, vote)
  - Style, debug, deploy
- **Version 1.5 (Event Admin)**
  - API: Build EVENT table with single event belonging to admin
  - Client: Enable EVENT admin functions (updating proposing/voting/final status,
  updating event name and max votes per user, determining winning sessions)
  - Style, debug, deploy
  - Update documentation
- **Version 2 (Scheduling & Schedule View)**
  - API: Build SLOTS tables, API, and curl scripts
  - Client: Implement SLOTS resource functions (create timeslots, schedule
    discussions, display final schedule)
  - Style, debug, deploy
- **Version 3 (Better Scheduling UI)**
  - API: Build TIMESLOTS tables, API, and curl scripts
  - API: Build ROOMS tables, API, and curl scripts
  - API: Turn SLOTS into a joins table for ROOMS & TIMESLOTS, re-test
  - Client: Revise SLOTS/TIMESLOTS/ROOMS resource functions (better UI for
    adding timeslots and rooms to scheduling engine, incl room capacities)
  - Style, debug, deploy
- **Version 4 (Improved Styling)**
  - Optimize scheduling features for laptop/tablet horizontal
  - Optimize proposing/voting for mobile
  - Style, debug, deploy
