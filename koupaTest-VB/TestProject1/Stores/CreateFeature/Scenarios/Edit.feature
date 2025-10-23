Feature: Test Autocompletion

 Scenario Outline: Exemple
  Given I have launched the application {arg} and it completed loading in no more than {arg} seconds
  When The Form {arg} is Displayed
  Then On the Form {arg}, the Label {arg} is correctly Displayed
  And On the Form {arg} I enter {arg} into the {arg} Field
  And On the Form {arg} I click on the Button {arg}
  Then The Form {arg} is Displayed