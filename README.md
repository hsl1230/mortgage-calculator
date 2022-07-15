# MortgageCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

NodeJs Version: v18.1.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

un `ng test` to do the unit tests

## High lights

### Factory method pattern is used to create instances of different mortgage calculators in factory service

### Strategy pattern is used to apply different mortgage calculation methods in calculation service

### All unit tests are fixed and passed


## Things to do

Docker enabled
Directive to format currency amount in the input forms
Data validation
Exception handling
Add more unit tests to increase the code coverage

## Docker

```bash
docker build -t hslcalgary/mortgage-calculator .
docker image ls -a
docker run -it -d -p 4200:4200 hslcalgary/mortgage-calculator
docker container ls -a
docker container stop <container-id>
docker container rm <container-id>
docker image rm <image-id>
```
