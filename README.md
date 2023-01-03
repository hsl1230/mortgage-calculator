# MortgageCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

NodeJs Version: v18.1.0

[Requirement](./FE%20Assessment.docx)

## Prerequisite

Docker installed on Ubuntu

Tested on docker Docker version 20.10.17, build 100c701 on Ubuntu 22.04 LTS

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `ng test` to do the unit tests

## High lights

- Docker enabled

- different calculation method are applied to weekly, bi-weekly,accelerated weekly, and accelerated bi-weekly

| Method | Mortgage payment | Description
| ----------- | ----------- | ----------- |
| monthly | M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]. | M = Total monthly payment. <br> P = The total amount of your loan. <br> I = Your interest rate, as a monthly percentage. <br> N = The total amount of months in your timeline for paying off your mortgage. |
| semi monthly | same as above | same as above except <br> I = Your interest rate, as a semi-monthly percentage. |
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

## Build a docker image from your local

```bash
docker build -t <your docker hub id>/mortgage-calculator .
```

## Or pull the docker image from Docker Hub

```bash
docker pull hslcalgary/mortgage-calculator
```

## Run the mortgage calculator in a docker container on your local

```bash
docker run -it -d -p 4200:4200 hslcalgary/mortgage-calculator
```

## Launch up your application

open the link (http://localhost:4200)

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
