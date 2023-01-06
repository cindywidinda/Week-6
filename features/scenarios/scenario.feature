@AllTest
Feature:Tools QA Scenario

#nomer 1
  @ButtonTest
  Scenario: Test all the button on Menu Element
    Given I am on the front page
    When I click on the element area
    Then I click buttons

#nomer 2
  @DragDrop
  Scenario: Test drag and drop on Interaction Menu
  Given I am on the front page
  When I Click on the Interaction area
  Then I try to Drag and Drop