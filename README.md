# Email_-_PDF_Ingestion
# IMAP Integration Project

## Challenge Overview

This project was designed as a challenge to integrate an IMAP connection into a web application, allowing users to connect to an email server, fetch unseen emails, and download attached PDFs. The task also involved building a user interface (UI) for the connection process, setting up a PostgreSQL database with Prisma ORM, and performing email management operations.

## Requirements and Achievements

- **IMAP Connection**: I successfully established a connection with the IMAP service, allowing for email retrieval from a provided IMAP server. 
- **Interactive UI**: I created a user-friendly, interactive front-end using React and Tailwind CSS for users to input their credentials and connect to the IMAP service.
- **PostgreSQL Database**: I created the Prisma schema for the database, using PostgreSQL to store relevant data like user details and email metadata.
- **Partial Completion of Task**: Although the task was not fully completed due to time constraints, I achieved significant progress. I managed to connect to the IMAP server and display basic functionality in the UI.

## Achievements:

1. **IMAP Service Integration**: I successfully connected the application to an IMAP email service, enabling basic functionality to authenticate with the server using user credentials (email, password, IMAP server, and port).
   
2. **UI Development**: I built an interactive front-end using React and Tailwind CSS. The form asks for necessary credentials, and on submission, it attempts to connect to the IMAP server, providing feedback to the user.
   
3. **Prisma & PostgreSQL Setup**: I created the skeleton of the Prisma ORM with PostgreSQL as the database for storing user information and email-related metadata.

## Partial Completion:

Although I was able to complete the connection setup and UI design, I faced difficulties with the next part of the task:

- **Inbox Access and Email Retrieval**: The most challenging part was retrieving unseen emails and downloading their PDF attachments. Due to time constraints, I could not fully implement this functionality, which was the primary goal of the project. The IMAP connection was established successfully, but I could not fetch the unseen emails and download PDFs from the inbox.

## Challenges:

- **Accessing the Inbox**: I struggled with handling the IMAP commands to properly access the inbox and filter out unseen emails. Some IMAP libraries I tested did not have the correct configuration, while others had documentation that was not clear enough to resolve this issue in the limited time available.
  
- **Downloading Attachments**: The process of identifying email attachments (PDFs) and downloading them was another obstacle. While I was able to establish the connection, I encountered issues when trying to parse and download the attachments. This feature was left incomplete.

## Future Work:

- **Complete Inbox Access**: A priority will be to finish the implementation for accessing the inbox and filtering unseen emails.
- **Attachment Downloading**: I plan to refine the process of downloading email attachments, particularly focusing on PDFs.
- **Refine UI/UX**: Further improvements to the UI, including error handling and better user feedback, will be necessary to enhance the user experience.

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone <repository_url>
