
Feature: Cashier on break

Scenario: The cashier is starting and ending a break 
  Given I have launched the PrioriPOS application
  When I m logged as "User1"
  And I open the cash register
  And I take a break
  Then The break time started and the interface buttons are updated accordingly
  When I end a break as "User1"
  Then The break time ends and the interface buttons are updated accordingly
  