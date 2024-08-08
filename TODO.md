# TODO

## In progress
- [] run the web app through the web app
- [] stop the server from the web app
- [] restart the server from the web app

## Development
- [] show the server console in the `console` page
- [] allow the user to send commands to the server from the `console` page
- [] manage the whitelist from the `whitelist` page
- [] check some server properties like player count, ram usage, tps, etc on home page
- [] add a check on the mc-server console for updates and notify the user

## Deployment
- [] create a systemd service for the web app

## Design
- [] add a temporary "starting" button on the server status card
- [] adjust the design for RESET and STOP buttons on server status card
- [] `players` card design
- [] `ram usage` card design
- [] `console` page design
- [] `whitelist` page design
- [] make the web app responsive

# DONE ✓
- [x] keep track of the server status and players (global variable `isServerRunning` and `playerCount`)