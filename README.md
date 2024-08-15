# Trybe - Extensive Reach and Seamless Coordination for your club
Trybe connects you to event sponsors and helps you to manage tasks for seamless collaboration within your team. 


## Features:
### For Organizers - All Your Needs in One Place
1. Manage your student club, group, branch, or organization efficiently.
2. Keep track of your team's progress and tasks.
3. Create and plan events easily.
4. Connect with potential sponsors and pitch to them.
5. Stay connected with alumni and receive guidance for the smooth running of your organization.
6. Manage your event budget, including registration fees, prize money, sponsored funds, etc.
7. Utilize a smooth attendance system based on QR codes and an easy way to distribute certificates.
8. Host and provide coupons or offers from sponsors to increase the chances of profit for the sponsor, thus improving your chances of securing sponsorship.
9. View and control the points system.

### For Students or Attendees
1. Find events you're interested in and enroll easily.
2. Never lose track of what's going on in your university or even in others.
3. Follow clubs or events that interest you.
4. Easily access certificates.
5. Earn experience points to redeem for swag.
6. Use points to redeem coupons from local shops or major brands.

### For Sponsors - An Easy Way to Promote Your Business or Brand
1. Find events with the right target audience for you.
2. Explore and learn about the organizers, their achievements, and accomplishments.
3. Easily promote your business or brand by connecting directly with organizers.
4. Provide promotional offers to connect directly with your target audience.
5. Conduct surveys to analyze a specific audience or even their target audience.


## Tech Stack
- **Backend:** [Django](https://www.djangoproject.com/), [Django Rest Framework](https://www.django-rest-framework.org/)
- **Frontend:** [Nextjs 14](https://nextjs.org/), [ShadcnUI](https://ui.shadcn.com/)

## Development setup:
### Pre-requisites:
- [Python 3.10 or later](https://www.python.org/downloads/)
- [Node 18.18 or later](https://nodejs.org/en/download/package-manager/current)
- [pnpm](https://pnpm.io/installation)

### Steps:
- Clone the repo
    ```bash
    git clone https://github.com/adityanandanx/Trybe
    cd Trybe
    ```
#### Backend Setup
1. Setup [python virtual environment](https://docs.python.org/3/library/venv.html#creating-virtual-environments) named `.venv`:
    ```bash
    python -m venv .venv
    ```
2. Activate the environment (Only run the command corresponding to your OS/shell):
    - Mac/Linux:
    ```bash
    source .venv/bin/activate
    ```
    - Windows Powershell:
    ```bash
    .venv\Scripts\Activate.ps1
    ```
    - Windows Cmd:
    ```bash
    .venv\Scripts\Activate.bat
    ```
3. Install python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Run django development server:
    ```bash
    cd backend
    python manage.py runserver
    ```

#### Frontend Setup
1. Install dependencies:
    ```bash
    cd frontend
    pnpm install
    ```
2. Run nextjs development server:
    ```bash
    pnpm dev
    ```

> **_Note:_**
>
> In order to fix the following error while the setup on windows
> ```ps
> about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
> At line:1 char:1
> + .venv\Scripts\Activate.ps1
> + ~~~~~~~~~~~~~~~~~~~~~~~~~~
>     + CategoryInfo          : SecurityError: (:) [], PSSecurityException
>     + FullyQualifiedErrorId : UnauthorizedAccess 
> ```
> Run the command :
> ```ps
> Set-ExecutionPolicy Unrestricted -Scope Process
> ```
> In case you are unable to activate envoirnment in windows powershell or cmd then use git bash terminal and enter the following command.
>```bash
>source .venv/bin/activate
>```
> ***