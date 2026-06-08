const core = require('@actions/core');
/*
  1.- Parse inputs:
    1.1 - base-branch from which to check for updates
    1.2 - target-branch to use to create the PR
    1.3 - GitHub Token for authentucation purposes (to create PRs)
    1.4 - Working directory for which to check for dependenciea
  2.- Execute the npm update command within the working directory
  3.- Check whether there are modified package*.json files
  4.- If there are modified files:
    4.1 - Add and commit files to the target-branch
    4.2 - Create a PR to the base-branch using the octokit API
  5.- Otherwise, conclude the custom action
  */

async function run() {
  core.info('I am a custom JS action');
}

run();