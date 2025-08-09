# Playwright OrangeHRM Automation

## Setup

1. `npm install`
2. Run tests: `npm test` or `npx playwright test`
3. Run headful for debugging: `npm run test:headed` or `PWDEBUG=1 npx playwright test`

# Jenkins CI Setup for Playwright Project
This guide explains how to configure a Jenkins job to run this Playwright tests using a Freestyle project (no Jenkinsfile required).

Prerequisites
Jenkins server installed and running.

Jenkins user has access to your Git repository.

Node.js installed on Jenkins machine or configured via Jenkins NodeJS plugin.

Playwright tests are configured and runnable via npx playwright test.

Step-by-Step Jenkins Setup
Step 1: Create a New Jenkins Job
Open Jenkins dashboard.

Click New Item.

Enter a name for the job, e.g., Playwright_cbus.

Select Freestyle project.

Click OK.

Step 2: Configure Git Repository
In the job configuration page, scroll down to Source Code Management.

Select Git.

Enter your repository URL -https://github.com/prabhagar/Playwright_cbus or SSH URL).

Under Branches to build, enter branch name, e.g., main.

Step 3: Configure Build Environment (Optional: NodeJS Plugin)

Go to Manage Jenkins > Global Tool Configuration.

Scroll to NodeJS section.

Click Add NodeJS.

Enter a name like Node 18.

Check Install automatically and choose the required Node.js version.

Save your changes.

Back in your job configuration, scroll to Build Environment.

Check Provide Node & npm bin/ folder to PATH.

Select the NodeJS installation you created (Node 18).

Step 4: Add Build Steps
Scroll down to the Build section.

Click Add build step > Execute shell.

Enter the following commands:

bash
Copy
Edit
npm install
npx playwright test
This will install dependencies and run your Playwright tests.

Step 5: Save and Run
Click Save at the bottom of the configuration page.

On the job page, click Build Now to trigger a manual build.

Click the build number and select Console Output to view the logs.