# Ubisoft Connect PC - Frontend Test v1.1

Welcome to Acme Games. Acme Games needs an admin interface for their users and games.
Your task is to implement a single page application (frontend only) where users can:
    - View/Create/modify/remove users
    - View/Create/modify/remove games
    - Grant/Revoke ownership of games to users
	
# An user account is an entity with the following information:
    - User account id
    - First name
    - Last name
    - E-mail address
    - Password
    - Date of birth
	
# An ownership is an entity that connects a user account with a game and has the following information:
    - Ownership id
    - User account id
    - Game id
    - State (indicates owned/revoked)
    - Registered date
	
# A game is an entity with the following information:
    - Game id
    - Name
    - Thumbnail (PNG or JPG)
    - Age restriction
	
# You don't need to implement a backend, and can assume that the admin is already logged in into the interface. There is no need to persistently store the data, but you get bonus points for storing them in the local storage. There is no need to provide test data. On first use there shouldn't be any user or game available.

# Objective:
    - Implement the web interface
    - It's highly adviced to use TypeScript with strong typing
	- Only use JavaScript if TypeScript is not possible for you
    - It's recommended to build the application using Vue.js, but you can also use React or Angular
	- Handle the state of your application in a state management framework like: Vuex, Redux,...
	- Add at least 3 unit tests
    - You are allowed to use CSS frameworks
    - You are allowed to use Babel, less, packers, etc.
    - You are allowed to use CLIs to construct the boilerplate application (e.g. vue-cli)

# Bonus:
    - Store data in local storage
    - Implement a login for the interface, based on the user accounts
    - Support mobile

# Provide your source code as ZIP to us. Avoid zipping dependencies, but use package definitions. Also, you need to provide a report describing your development process. Describe your thought process, the problems you encountered and how you solved them. A good scope for such a report is 2-5 pages. Additionally, you need to provide how to build and test the frontend (e.g. running npm, using an development http server,...). Please mark code that you copied from somewhere else (e.g. Stack Overflow).

Have fun and good luck!
/ The Ubisoft Connect PC & Access
    * Massive Entertainment
    * Ubisoft Chengdu
    * Ubisoft Düsseldorf
    * Ubisoft Kyiv
    * Ubisoft Montréal
    * Ubisoft Shanghai
