$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber_maven.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "SignUp process on Lendkey site.",
  "description": "",
  "id": "signup-process-on-lendkey-site.",
  "keyword": "Feature"
});
formatter.background({
  "line": 21,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 22,
  "name": "Test data available for test.",
  "rows": [
    {
      "cells": [
        "username",
        "a"
      ],
      "line": 23
    },
    {
      "cells": [
        "password",
        "pswd"
      ],
      "line": 24
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.test_data(DataTable)"
});
formatter.result({
  "duration": 377943524,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Simple SignUp process",
  "description": "",
  "id": "signup-process-on-lendkey-site.;simple-signup-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "SigUp page display",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Enter Valid Test Data",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on SignUp",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on SignOut",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.sigup_page_display()"
});
formatter.result({
  "duration": 11773138904,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.enter_Valid_Test_Data()"
});
formatter.result({
  "duration": 337419651,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.click_on_SignUp()"
});
formatter.result({
  "duration": 28612,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.click_on_SignOut()"
});
formatter.result({
  "duration": 27057,
  "status": "passed"
});
formatter.match({
  "location": "stepDef.close_Browser()"
});
formatter.result({
  "duration": 682178752,
  "status": "passed"
});
});