[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Authentication in Ember

This training will involve a lot of following code and and exploring the
Chrome Inspector and utilizing Ember Inspector.  It is recommended that you
comment code or take notes.

## Prerequisites

- [Ember Resources](https://git.generalassemb.ly/ga-wdi-boston/ember-resources)

## Objectives

By the end of this, developers should be able to:

- Implement token authentication in an Ember application.
- Enforce authentication in protected routes.

## Preparation

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1. Install dependencies with `npm install`.
1. Start any API based on a recent version of the [Rails API
    Template](https://git.generalassemb.ly/ga-wdi-boston/rails-api-template) or the
    [Express API
    Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template).
1. Start the front-end server with `ember server`.

## From end to end

Watch as I sign up for a new account on our demo app.

*Other than the flash messages on the page, did anything change?  What about in
the Chrome Developer Tools?*

Take some time and sign in on your own, and check to see if anything in the
Chrome Dev Tools has changed.

Now that we have added a key tool to our personal developer toolkit lets look
at how it's implemented.

## Follow Along

Let's walk through file by file to see what's happening.  I will ask
developers to guide me through the files while correcting any misunderstandings.

First let's start down the template and component trail, then we'll work our way
up with actions.

*Remember: Data down, actions up.*

While going up the Ember hierarchy we may need to stop a some point to discuss
services.

## Additional Resources

- [Implementing Authentication with Ember Services - Ember
    Igniter](http://emberigniter.com/implementing-authentication-with-ember-services/)
- [jpadilla/ember-simple-auth-token: Ember Simple Auth extension that is
    compatible with token-based authentication like
    JWT.](https://github.com/jpadilla/ember-simple-auth-token)
- [simplabs/ember-simple-auth: A library for implementing
    authentication/authorization in Ember.js
    applications.](https://github.com/simplabs/ember-simple-auth)
- [EmberJS Authentication Tutorial](https://auth0.com/blog/emberjs-authentication-tutorial/)
- [How To Import A Library on Ember.js](https://stackoverflow.com/questions/38919757/how-to-import-a-library-on-ember-js)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
