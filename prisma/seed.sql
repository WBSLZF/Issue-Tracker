-- Insert sample issues with realistic data
INSERT INTO "Issue" (title, description, status, "createdAt", "updatedAt")
VALUES 
    ('Fix login page responsive design', 'The login page layout breaks on mobile devices. Need to adjust the CSS media queries and ensure proper scaling of form elements.', 'OPEN', '2024-03-15 09:30:00', '2024-03-15 09:30:00'),
    
    ('Implement user profile image upload', 'Add functionality to allow users to upload and update their profile pictures. Include image compression and validation.', 'IN_PROGRESS', '2024-03-14 14:20:00', '2024-03-15 11:45:00'),
    
    ('Database query optimization needed', 'The dashboard page is loading slowly due to unoptimized database queries. Need to add proper indexes and optimize JOIN operations.', 'CLOSED', '2024-03-13 10:15:00', '2024-03-14 16:30:00'),
    
    ('Add email notification system', 'Implement a system to send email notifications for important updates and actions. Include templates and queue management.', 'OPEN', '2024-03-15 08:00:00', '2024-03-15 08:00:00'),
    
    ('Security audit required', 'Conduct a comprehensive security audit of the authentication system and API endpoints. Focus on potential vulnerabilities.', 'IN_PROGRESS', '2024-03-12 16:45:00', '2024-03-15 13:20:00'),
    
    ('Update documentation', 'The API documentation is outdated. Need to update with new endpoints and include example requests/responses.', 'OPEN', '2024-03-15 11:30:00', '2024-03-15 11:30:00'),
    
    ('Fix payment processing bug', 'Users are experiencing failed transactions due to incorrect currency conversion. Need to fix the calculation logic.', 'CLOSED', '2024-03-11 09:15:00', '2024-03-13 14:30:00'),
    
    ('Implement dark mode', 'Add dark mode theme support across the application. Include theme toggle and persist user preference.', 'IN_PROGRESS', '2024-03-14 13:00:00', '2024-03-15 10:15:00'),
    
    ('Performance optimization for search', 'The search functionality is slow with large datasets. Implement caching and optimize the search algorithm.', 'OPEN', '2024-03-15 10:45:00', '2024-03-15 10:45:00'),
    
    ('Add export functionality', 'Users need the ability to export their data in CSV and PDF formats. Include custom field selection.', 'IN_PROGRESS', '2024-03-13 15:30:00', '2024-03-15 09:20:00'); 