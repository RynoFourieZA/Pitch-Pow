-- Inserting the question type.
INSERT INTO question_type (name) VALUES ('New');
INSERT INTO question_type (name) VALUES ('Existing');

-- Inserting all of the questions.
INSERT INTO pitch_questions (question_type, business_description, innovation, market_analysis, product_or_service_analysis, competition, marketing_strategy, operations, finances, management_and_technical_complexity) VALUES (1, 'What problem is being addressed?', 'Is it a breakthrough new product, service, delivery, or structure?', 'What is the need for the product or service from the user’s perspective?', 'Is the description clear? Show a visual representation', 'Describe the current and potential competitors, competitive response, and analysis of strengths and weaknesses?', 'What is the marketing plan?', 'Where the business is operating from?', 'How compelling is the business model?', 'What is the degree of technical ability that is required to implement the solution?');

INSERT INTO pitch_questions (question_type, business_description, innovation, market_analysis, product_or_service_analysis, marketing_strategy, operations, finances, management_and_technical_complexity) VALUES (1, 'How is it being solved?', 'Is it an improvement over current methods?', 'Why would this delight the market?', 'Is the product/service feasible?', 'What is the strategy for the price, product, place, and promotion?', 'What is the operational infrastructure?', 'How will you make money?', 'Who is on the team?');

INSERT INTO pitch_questions (question_type, innovation, market_analysis, product_or_service_analysis, marketing_strategy, operations, finances, management_and_technical_complexity) VALUES (1, 'Are you addressing an emerging issue or an old issue in a creative way?', 'Who is your main target market?', 'How easily can it be duplicated?', 'How achievable and realistic is this?', 'What is the operational expenditure?', 'What are the financial projections?', 'What resources and skills are needed to implement the solution?');

INSERT INTO pitch_questions (question_type, innovation, market_analysis, product_or_service_analysis, operations, finances, management_and_technical_complexity) VALUES (1, 'How will the innovation stand the test of time?', 'What is the size and growth of the market?', 'Is there a presence of potential substitutes for the product?', 'What are the channels of delivery?', 'What are their prospects for long-term profitability?', 'What is the cost implication for the level of complexity?');

INSERT INTO pitch_questions (question_type, innovation, market_analysis) VALUES (1, 'How does the innovation distinguish itself from other existing businesses?', 'What is the consumers willingness to pay for the product/service?');

INSERT INTO pitch_questions (question_type, business_description, innovation, market_analysis, product_or_service_analysis, competition, marketing_strategy, operations, finances, management_and_technical_complexity) VALUES (2, 'What problem is being addressed?', 'Is it a breakthrough new product, service, delivery, or structure?', 'What is the need for the product or service from the user’s perspective?', 'Is the description clear? Show a visual representation', 'Describe the current and potential competitors, competitive response, and analysis of strengths and weaknesses?', 'What is the marketing plan?', 'Where is the business operating from?', 'How compelling is the business model?', 'What is the degree of technical ability that is required to implement the solution?');

INSERT INTO pitch_questions (question_type, business_description, innovation, market_analysis, product_or_service_analysis, marketing_strategy, operations, finances, management_and_technical_complexity) VALUES (2, 'How is it being solved?', 'Is it an improvement over current methods?', 'Why would this delight the market?', 'Is the product/service feasible?', 'What is the strategy for the price, product, place, and promotion?', 'What is the operational infrastructure?', 'How will you make money?', 'Who is on the team -  current organogram been as well as future staffing need?');

INSERT INTO pitch_questions (question_type, innovation, market_analysis, product_or_service_analysis, marketing_strategy, operations, finances, management_and_technical_complexity) VALUES (2, 'Are you addressing an emerging issue or an old issue in a creative way?', 'Who is your main target market?', 'How easily it can it be duplicated?', 'How achievable and realistic is this?', 'What is the operational expenditure?', 'What are the financial projections?', 'How will you grow with the organisation and attract new talent?');

INSERT INTO pitch_questions (question_type, innovation, market_analysis, product_or_service_analysis, operations, finances, management_and_technical_complexity) VALUES (2, 'How will the innovation stand the test of time?', 'What is the size and growth of the market?', 'Is there a presence of potential substitutes for the product?', 'What are the channels of delivery?', 'What are the financial resources required for the venture?', 'What are the necessary resources and skills been identified to implement the solution?');

INSERT INTO pitch_questions (question_type, innovation, market_analysis, finances, management_and_technical_complexity) VALUES (2, 'How does the innovation distinguish itself from other existing businesses?', 'What is the consumers willingness to pay for the product/service?', 'Are there prospects for long-term profitability?', 'What is the cost implication for the level of complexity?');

INSERT INTO pitch_questions (question_type, finances) VALUES (2, 'What is current break-even analysis?');

INSERT INTO pitch_questions (question_type, finances) VALUES (2, 'Show the operational expenses (Opex) versus the capital expenditure (Capex). (Expressed in % and Rand value)');

INSERT INTO pitch_questions (question_type, finances) VALUES (2, 'What are the financial risks?');

UPDATE business_description, innovation, market_analysis, product_or_service_analysis, competition, marketing_strategy, operations, finances, management_and_technical_complexit 
SET business_description ' ', innovation = ' ', market_analysis = ' ', product_or_service_analysis = ' ', competition = ' ', marketing_strategy = ' ', operations = ' ', finances = ' ', management_and_technical_complexit = ' '
WHERE business_description, innovation, market_analysis, product_or_service_analysis, competition, marketing_strategy, operations, finances, management_and_technical_complexit IS NULL;