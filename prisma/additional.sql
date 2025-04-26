-- 新增20条issue记录
INSERT INTO "Issue" (title, description, status, "createdAt", "updatedAt")
VALUES 
    ('Refactor authentication middleware', 'Current auth middleware is outdated and needs to be refactored to support JWT tokens and improve security.', 'OPEN', '2024-03-16 10:00:00', '2024-03-16 10:00:00'),
    
    ('Implement password reset flow', 'Add functionality for users to reset their passwords via email with secure token validation.', 'IN_PROGRESS', '2024-03-15 14:30:00', '2024-03-16 11:15:00'),
    
    ('Optimize image loading performance', 'Images are loading slowly on the product pages. Implement lazy loading and proper compression.', 'OPEN', '2024-03-16 09:15:00', '2024-03-16 09:15:00'),
    
    ('Add user activity logging', 'Implement system to track and log important user activities for security and analytics.', 'OPEN', '2024-03-16 08:30:00', '2024-03-16 08:30:00'),
    
    ('Fix API rate limiting', 'Current rate limiting implementation is not working correctly, allowing too many requests.', 'IN_PROGRESS', '2024-03-15 16:00:00', '2024-03-16 12:45:00'),
    
    ('Update third-party dependencies', 'Several dependencies have security vulnerabilities and need to be updated to latest versions.', 'OPEN', '2024-03-16 11:30:00', '2024-03-16 11:30:00'),
    
    ('Implement two-factor authentication', 'Add support for 2FA using authenticator apps to enhance account security.', 'OPEN', '2024-03-16 13:15:00', '2024-03-16 13:15:00'),
    
    ('Fix mobile navigation menu', 'Mobile navigation menu has usability issues on certain devices and needs improvement.', 'IN_PROGRESS', '2024-03-15 13:45:00', '2024-03-16 10:30:00'),
    
    ('Add data validation for forms', 'Implement comprehensive client-side and server-side validation for all form inputs.', 'OPEN', '2024-03-16 14:00:00', '2024-03-16 14:00:00'),
    
    ('Optimize database connection pooling', 'Current connection pool settings are causing performance issues under heavy load.', 'OPEN', '2024-03-16 10:45:00', '2024-03-16 10:45:00'),
    
    ('Implement audit trail for admin actions', 'Track and log all administrative actions for security and accountability.', 'IN_PROGRESS', '2024-03-15 15:20:00', '2024-03-16 09:45:00'),
    
    ('Add support for multiple languages', 'Implement internationalization (i18n) to support multiple languages in the UI.', 'OPEN', '2024-03-16 12:00:00', '2024-03-16 12:00:00'),
    
    ('Fix session timeout issues', 'Users are being logged out unexpectedly due to incorrect session timeout settings.', 'OPEN', '2024-03-16 15:30:00', '2024-03-16 15:30:00'),
    
    ('Implement backup system', 'Create automated backup solution for database and important files.', 'IN_PROGRESS', '2024-03-15 17:30:00', '2024-03-16 14:15:00'),
    
    ('Optimize search indexing', 'Improve search performance by optimizing how content is indexed and queried.', 'OPEN', '2024-03-16 16:15:00', '2024-03-16 16:15:00'),
    
    ('Add user permission system', 'Implement granular permission system to control access to different features.', 'OPEN', '2024-03-16 13:45:00', '2024-03-16 13:45:00'),
    
    ('Fix memory leaks in API', 'Memory usage grows over time due to leaks in certain API endpoints.', 'IN_PROGRESS', '2024-03-15 18:00:00', '2024-03-16 15:00:00'),
    
    ('Implement API versioning', 'Add support for versioned API endpoints to maintain backward compatibility.', 'OPEN', '2024-03-16 17:00:00', '2024-03-16 17:00:00'),
    
    ('Add automated testing pipeline', 'Set up CI/CD pipeline to run automated tests on all pull requests.', 'OPEN', '2024-03-16 14:30:00', '2024-03-16 14:30:00'),
    
    ('Optimize frontend asset bundling', 'Current webpack configuration is not optimized for production builds.', 'OPEN', '2024-03-16 18:15:00', '2024-03-16 18:15:00');a