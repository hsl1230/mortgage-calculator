# MortgageCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

NodeJs Version: v18.1.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `ng test` to do the unit tests

## High lights

- Docker enabled

- different calculation method are applied to weekly, bi-weekly,accelerated weekly, and accelerated bi-weekly

| Method | Mortgage payment | Description
| ----------- | ----------- | ----------- |
| monthly | M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]. |
M = Total monthly payment.
P = The total amount of your loan.
I = Your interest rate, as a monthly percentage.
N = The total amount of months in your timeline for paying off your mortgage. |
| semi monthly | same as above | same as above |
| weekly | monthly payment * 12 / 52 | |
| accelerated weekly | monthly payment / 4 | |
| bi-weekly | monthly payment * 12 / 26 | |
| accelerated bi-weekly | monthly payment / 2 | |

- The page is responsive.

- Factory method pattern is used to create instances of different mortgage calculators in factory service

- Strategy pattern is used to apply different mortgage calculation methods in calculation service

- All unit tests are fixed and passed

## Things to do

- Directive to format currency amount in the input forms

- Data validation

- Exception handling

- Add more unit tests to increase the code coverage

## Build a docker image

```bash
docker build -t <your docker hub id>/mortgage-calculator .
```

## Pull the docker image from Docker Hub

```bash
docker pull hslcalgary/mortgage-calculator
```

## Run the mortgage calculator in a docker container on your local

```bash
docker run -it -d -p 4200:4200 hslcalgary/mortgage-calculator
```

## Related docker commands

```bash
docker container ls -a
docker container stop <container-id>
docker container rm <container-id>
docker image ls -a
docker image rm <image-id>
docker exec -it <container name> sh
docker logs <container name>
```
