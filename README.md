# Availability Checker

![Node.js CI](https://github.com/raphaklaus/availability-checker/workflows/Node.js%20CI/badge.svg?event=push)

This repo aims on implement the Availability Scooter Checker project. ;)

Few instructions below.

## Before anything else

Create a `.env` file off `.env-sample` and add the due values.

## Running

```bash
  $ docker-compose up
```

## Testing

I have implemented unit and integration tests that you can check the status by going into `Actions` tab of this repo. If you want to run it by yourself, run the project and then:

```bash
  $ docker-compose run --rm app npm test
```

Or if you want to go straight locally (which require `npm install`), just `npm test` :)
