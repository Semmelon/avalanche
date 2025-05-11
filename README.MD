### Installation guide for AVALANCHE NOTES

## Step 1 (clone the Git-Repo):
- git clone https://github.com/Semmelon/avalanche

## Step 2 (install npm packages):
- cd .\webapp\
- npm i

## Step 3 (database):
- Create a PostgreSQL-DB 
- Copy the connection string into the .env file -> DATABASE_URL="YOUR CONNECTION STRING" 
- Go into the webapp folder 
    - Cd .\webapp\
    - Npx prisma migrate dev

This command migrates the db struckture of prisma to the via connection-string chosen database


## Step 4 (.env):
- Set the session password to a random string
    - NUXT_SESSION_PASSWORD="RANDOM STRING"

- Create a account on https://console.cloud.google.com/
- On the top left is field where you can create or select a project -> click on it
- If no avaliable project -> click on new project
    - Enter name
    - Click on select a project and select it after it is created
- Go under APIs & Services (Sidebar)
    - Choose libary
        - Get Google+ API
        - If wanted Google ANalytics API
    - Choose credentials
        - Click create credentials -> OAuth clien ID
            - Type -> Web application
            - Beneath Authorized rediret URIs add "localhost:3000/auth/google"
            - Create
            - Copy the id and secret into the .env file
                - NUXT_OAUTH_GOOGLE_CLIENT_ID="YOUR CLIENT ID"
                - NUXT_OAUTH_GOOGLE_CLIENT_SECRET="YOUR CLIENT SECRET"

## Step 5: 
- Start the webapp
- Cd .\webapp\
- Npm run dev

### Congrats! You should be good to go!