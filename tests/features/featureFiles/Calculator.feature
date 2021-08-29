Feature: Validate functionalities of calculator

  Scenario Outline: Click on the calculator by location
    Given I am on the online calculator homepage
    When I switch to iframe
    And I click <button1>
    And I click <button2>
    And I click <button3>
    And I click <button4>

    Examples:
      | button1 | button2 | button3 | button4 |
      | 1       | +       | 1       | =       |
      | 2       | -       | 3       | =       |
      | 6       | *       | 7       | =       |
      | 8       | /       | 9       | =       |
      | 18      | +/      | 29      | MR      |

  Scenario Outline: Click on the calculator by keypress
    Given I am on the online calculator homepage
    When I switch to iframe
    And I press <key1>
    And I press <key2>
    And I press <key3>
    And I press <key4>

    Examples:
      | key1 | key2 | key3 | key4 |
      | 1    | +    | 1    | =    |
      | 9    | -    | 3    | =    |
      | 8    | /    | 2    | =    |
      | 7    | x    | 4    | =    |
