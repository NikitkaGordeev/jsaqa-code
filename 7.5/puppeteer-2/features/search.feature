Feature: Tests tickets

Scenario: One seat reservation
  Given I am on the booking page            
  When I click on the day of the week
  And I click on the movie seance time
  And I click on a seat
  And I click on the accept button
  Then I should see a message confirming the seat selection

Scenario: Two seat reservation
  Given I am on the booking page
  When I click on the day of the week
  And I click on the movie seance time
  And I click on two seats
  And I click on the accept button
  Then I should see a message confirming the seat selection

Scenario: Reservation of occupied places
  Given I am on the booking page
  When I click on the day of the week
  And I click on the movie seance time
  Then the accept button should be disabled