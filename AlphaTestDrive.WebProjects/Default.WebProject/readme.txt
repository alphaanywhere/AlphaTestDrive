The files in this project are a starting point for your application. The index.a5w page displays a login component where your users can log in to your application.

The login component allows users to log in, reset their password if they have forgotten their password, and create a new account. In addition, you can capture additional user information using the Extend User-Information table (defined in Web Project Properties). The Extended User-Information Table lets you store custom data with users' accounts, such as their name or address. The Extended User-Information table is also required to provide two-factor authentication in your app.

Depending on how the Login component is configured, after the user has logged in, the browser will redirect to the masterTabbedUI component.
This component is a TabbedUI component and it serves as the "main menu" of your application.

You can also configure the Login component to give focus to another Panel Card in the component after login. This pattern is typically used when building mobile applictions.


Develop your application by creating the appropriate components (e.g., Grids, UX components, or Reports). Then, add your components to the masterTabbedUI component. You can specify which security groups can see the various components that you add to the masterTabbedUI component.

The masterTabbedUI includes a section for account administration where the user can change their password,
set two-factor authentication preferences, and configure other options.

The masterTabbedUI also has a section only visible if the logged in user is an ADMINISTRATOR.
The components in this section allow the administrator to create new accounts, change the groups that a user is assigned to, and perform other maintenance tasks on the users and groups in the applications.

How to Capture and Store Information in the Extended User-Information Table
==============================================================================
The structure of the Extended User-Information table is entirely arbitrary. You can add as many columns to this table as you want. The login component will automatically capture and store information in the Extended User-Information table for controls named "EXTENDED_fieldname" where "fieldname" is the column name in your table.  For example, say that your Extended User-Information table has 'Firstname' and 'Lastname' columns. To capture this information, you would add controls called 'EXTENDED_FIRSTNAME' and 'EXTENDED_LASTNAME' to the login component.

