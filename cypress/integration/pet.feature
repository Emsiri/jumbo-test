Feature: Pet's swagger API

  I want to add a new pet
  
  Scenario: Adding a new pet
    Given I add a new pet with the name 'Beethoven'
    Then I should see a new 'Beethoven' in the response  
  
  Scenario: Updating a new pet
    Given I update the pet with the new name 'Dogmeat'
    Then I should see the pet named 'Dogmeat' in the response

  Scenario: Finding all pets by status 
    Given I search for pets with the "available" status
    Then I should see all the "available" pets  

  Scenario: Find the pet by id
    Given I search for the pet with the id
    Then I should see the correct pet with the name 'Dogmeat'

  Scenario: Update the pet by id
    Given I update the pet via id
    Then I should get back a correct response

  Scenario: Delete the pet by id
    Given I delete the pet via id
    Then I should receive the correct response  
