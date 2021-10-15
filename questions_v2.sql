-- Inserting data into the category_type table.
INSERT INTO category_type (name, description)
VALUES ('Business Description', 'Details of the Business Idea and what it does.');

INSERT INTO category_type (name, description)
VALUES ('Innovation', 'How innovative and unique is the Business approach?');

INSERT INTO category_type (name, description)
VALUES ('Market Analysis', 'Characteristics of the market and description of its customers');

INSERT INTO category_type (name, description)
VALUES ('Product or Service Analysis', 'The specifics of the product or service.');

INSERT INTO category_type (name, description)
VALUES ('Competition', 'Identify current and potential competitors');

INSERT INTO category_type (name, description)
VALUES ('Marketing Strategy', 'How will sales be achieved?');

INSERT INTO category_type (name, description)
VALUES ('Operations', 'How is the product or service produced and delivered?');

INSERT INTO category_type (name, description)
VALUES ('Finances', 'An overview of the required resources.');

INSERT INTO category_type (name, description)
VALUES ('Management/Technical complexity', 'An assessment of the entrepreneur/team.');

UPDATE category_type
SET created_by = 'Emma Keet', created_date = CURRENT_DATE
WHERE created_by IS NULL AND created_date IS NULL;

-- Inserting data into the pitch_type table.
INSERT INTO pitch_type (pitch_type_name) VALUES ('New');

INSERT INTO pitch_type (pitch_type_name) VALUES ('Existing');

UPDATE pitch_type
SET created_by = 'Emma Keet', created_date = CURRENT_DATE
WHERE created_by IS NULL AND created_date IS NULL;

-- Inserting data into the questions table for new business questions.
INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What problem is being addressed?', 1, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How is it being solved?', 1, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is it a breakthrough new product, service, delivery, or structure?', 2, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is it an improvement over current methods?', 2, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Are you addressing an emerging issue or an old issue in a creative way?', 2, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How will the innovation stand the test of time?', 2, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How does the innovation distinguish itself from other existing businesses?', 2, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the need for the product or service from the user’s perspective?', 3, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Why would this delight the market?', 3, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Who is your main target market?', 3, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the size and growth of the market?', 3, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the consumers willingness to pay for the product/service?', 3, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is the description clear? Show a visual representation', 4, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is the product/service feasible?', 4, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How easily it can it be duplicated?', 4, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is there a presence of potential substitutes for the product?', 4, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Describe the current and potential competitors, competitive response, and analysis of strengths and weaknesses?', 5, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the marketing plan?', 6, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the strategy for the price, product, place, and promotion?', 6, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How achievable and realistic is this?', 6, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Where the business is operating from?', 7, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the operational infrastructure?', 7, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the operational expenditure?', 7, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What are the channels of delivery?', 7, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How compelling is the business model?', 8, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How will you make money?', 8, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What are the financial projections?', 8, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What are their prospects for long-term profitability?', 8, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the degree of technical ability that is required to implement the solution?', 9, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Who is on the team?', 9, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What resources and skills are needed to implement the solution?', 9, 1);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the cost implication for the level of complexity?', 9, 1);

-- Inserting data into the questions table for existing business questions.
INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What problem is being addressed?', 1, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How is it being solved?', 1, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is it a breakthrough new product, service, delivery, or structure?', 2, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is it an improvement over current methods?', 2, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Are you addressing an emerging issue or an old issue in a creative way', 2, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How will the innovation stand the test of time?', 2, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How does the innovation distinguish itself from other existing businesses?', 2, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the need for the product or service from the user’s perspective?', 3, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Why would this delight the market?', 3, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Who is your main target market?', 3, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the size and growth of the market?', 3, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the consumers willingness to pay for the product/service?', 3, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is the description clear? Show a visual representation', 4, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is the product/service feasible?', 4, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How easily it can it be duplicated?', 4, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Is there a presence of potential substitutes for the product?', 4, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Describe the current and potential competitors, competitive response, and analysis of strengths and weaknesses?', 5, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the marketing plan?', 6, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the strategy for the price, product, place, and promotion?', 6, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How achievable and realistic is this?', 6, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Where the business is operating from?', 7, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the operational infrastructure?', 7, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the operational expenditure?', 7, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What are the channels of delivery?', 7, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How compelling is the business model?', 8, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How will you make money?', 8, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What are the financial projections?', 8, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What are the financial resources required for the venture?', 8, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Are there prospects for long-term profitability?', 8, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is current break-even analysis?', 8, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Show the operational expenses (Opex) versus the capital expenditure (Capex). (Expressed in % and Rand value)', 8, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What are the financial risks?', 8, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('The degree of technical ability that is required to implement the solution?', 9, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('Who is on the team - current organogram been as well as future staffing need?', 9, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('How will you grow with the organisation and attract new talent?', 9, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What are the necessary resources and skills been identified to implement the solution?', 9, 2);

INSERT INTO questions (questions, category_type_id, pitch_type_id)
VALUES ('What is the cost implication for the level of complexity?', 9, 2);

UPDATE questions
SET created_by = 'Emma Keet', created_date = CURRENT_DATE
WHERE created_by IS NULL AND created_date IS NULL;