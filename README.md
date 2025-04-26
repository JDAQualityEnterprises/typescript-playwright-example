
# Basic typescript webdriver.io tests
Demonstrating...
* Domain page objects
* Reporting and logging
* Model objects for domain data
* html report generation
* Soft assertions
* GitHub actions setup

# Running tests from the container
* Build the image:
  * docker build -t example-pw-docker .
* Run the tests in the container:
  * docker run -it example-pw-docker

# Running the tests locally

  npx playwright test

# Show the report

  npx playwright show-report

