Feature: Authentification

@Gherkin_Test_User_Al @PrioriPOS_CLOSE
Scenario: Connect as User1
  Given I have launched the PrioriPOS application
  When I m logged as "User1"
  Then On the Form "MainMenu", the Label "User1" is correctly Displayed
  
@Gherkin_Test_User_Retail @PrioriPOS_CLOSE 
Scenario: Connect as Retail
  Given I have launched the PrioriPOS application
  When I m logged as "User_Retail"
  Then On the Form "MainMenu", the Label "User_Retail" is correctly Displayed